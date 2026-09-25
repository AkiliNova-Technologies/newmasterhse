import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const SERVICE_OPTIONS = new Set([
  "Occupational Health Services", "Safety & Environmental Consulting",
  "Training & Certification", "Emergency Preparedness", "Consulting Services",
  "Projects", "NewMaster Institute of Health & Safety", "Corporate Health Programmes", "Other",
]);
const MAX_REQUESTS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

type ContactFormData = {
  fullName: string; email: string; phone: string; organisation: string;
  service: string; subject: string; message: string; website: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character] ?? character);
}

function stringField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function parseContactForm(value: unknown): ContactFormData | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const body = value as Record<string, unknown>;
  const data = {
    fullName: stringField(body.fullName, 120), email: stringField(body.email, 254).toLowerCase(),
    phone: stringField(body.phone, 50), organisation: stringField(body.organisation, 160),
    service: stringField(body.service, 100), subject: stringField(body.subject, 160),
    message: stringField(body.message, 5_000), website: stringField(body.website, 200),
  };
  if (!data.fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !SERVICE_OPTIONS.has(data.service) || !data.subject || data.message.length < 20) return null;
  return data;
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try { return new URL(origin).host === request.nextUrl.host; } catch { return false; }
}

function isRateLimited(request: NextRequest) {
  const clientId = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const entry = requestCounts.get(clientId);
  if (!entry || entry.resetAt <= now) {
    requestCounts.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

function buildEmailHtml(data: ContactFormData) {
  const rows = [["Full name", data.fullName], ["Email address", data.email], ["Phone number", data.phone || "—"], ["Organisation", data.organisation || "—"], ["Service area", data.service], ["Subject", data.subject]];
  return `<h2>New website enquiry</h2><table>${rows.map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table><h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`;
}

function buildEmailText(data: ContactFormData) {
  return ["NEW WEBSITE ENQUIRY", `Full name: ${data.fullName}`, `Email: ${data.email}`, `Phone: ${data.phone || "—"}`, `Organisation: ${data.organisation || "—"}`, `Service: ${data.service}`, `Subject: ${data.subject}`, "", "MESSAGE:", data.message].join("\n");
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  if (isRateLimited(request)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });

  let body: ContactFormData | null;
  try { body = parseContactForm(await request.json()); } catch { body = null; }
  if (!body) return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });

  // Bots commonly fill this visually hidden field. Do not pass such data to Resend.
  if (body.website) return NextResponse.json({ success: true });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !recipient || !from) {
    console.error("Contact email configuration is incomplete.");
    return NextResponse.json({ error: "The contact service is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const { data, error } = await new Resend(apiKey).emails.send({
      from, to: recipient, replyTo: body.email,
      subject: `[Website enquiry – ${body.service}] ${body.subject}`,
      text: buildEmailText(body), html: buildEmailHtml(body),
    });
    if (error || !data?.id) {
      console.error("Contact email provider rejected a submission.", error);
      return NextResponse.json({ error: "We could not send your enquiry. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email provider request failed.", error);
    return NextResponse.json({ error: "We could not send your enquiry. Please try again later." }, { status: 502 });
  }
}
