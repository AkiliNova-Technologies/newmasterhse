import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactFormData = {
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  service: string;
  subject: string;
  message: string;
};

function buildEmailHtml(data: ContactFormData): string {
  const rows = [
    { label: "Full Name", value: data.fullName },
    { label: "Email Address", value: data.email },
    { label: "Phone Number", value: data.phone || "—" },
    { label: "Organisation", value: data.organisation || "—" },
    { label: "Service Area", value: data.service },
    { label: "Subject", value: data.subject },
  ];

  const rowsHtml = rows
    .map(
      ({ label, value }) =>
        `<tr>
          <td style="padding: 12px 16px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9; width: 160px; vertical-align: top; font-size: 14px;">${label}</td>
          <td style="padding: 12px 16px; color: #0f172a; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${value}</td>
        </tr>`,
    )
    .join("\n");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Website Enquiry</title>
      </head>
      <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 32px 16px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          
          <!-- Header Banner -->
          <div style="background-color: #0f172a; padding: 24px 32px; text-align: left;">
            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #f97316;">NewMaster Website Contact</p>
            <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">New Enquiry Received</h2>
          </div>

          <!-- Main Content Area -->
          <div style="padding: 32px;">
            <p style="margin: 0 0 20px 0; font-size: 14px; color: #475569; line-height: 1.5;">
              You have received a new message submission from the website contact form. You can reply directly to this email to reach the sender.
            </p>

            <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              ${rowsHtml}
            </table>

            <div style="margin-top: 24px;">
              <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05px; color: #475569;">Client Message</p>
              <div style="padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${data.message}</div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 16px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 12px; color: #64748b;">This is an automated notification sent from your website contact system.</p>
          </div>

        </div>
      </body>
    </html>
  `.trim();
}

function buildEmailText(data: ContactFormData): string {
  return [
    `NEW WEBSITE ENQUIRY`,
    `====================`,
    `Full Name:    ${data.fullName}`,
    `Email:        ${data.email}`,
    `Phone:        ${data.phone || "—"}`,
    `Organisation: ${data.organisation || "—"}`,
    `Service:      ${data.service}`,
    `Subject:      ${data.subject}`,
    ``,
    `MESSAGE:`,
    `----------------------------------------`,
    data.message,
    `----------------------------------------`,
  ].join("\n");
}

export async function POST(request: NextRequest) {
  const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!RECIPIENT_EMAIL) {
    console.error("CONTACT_EMAIL is not set.");
    return NextResponse.json(
      { error: "Recipient address is not configured." },
      { status: 500 },
    );
  }

  let body: ContactFormData;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!body.fullName || !body.email || !body.service || !body.subject || !body.message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: "NewMaster Website <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: body.email,
      subject: `[Website Enquiry – ${body.service}] ${body.subject}`,
      text: buildEmailText(body),
      html: buildEmailHtml(body),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}