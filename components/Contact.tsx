"use client";

import { useState } from "react";
import {
  Building2,
  Clock3,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { CONTACT } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const serviceOptions = [
  "Occupational Health Services",
  "Safety & Environmental Consulting",
  "Training & Certification",
  "Specialised Services",
  "NewMaster Institute of Health & Safety",
  "Corporate Health Programmes",
  "Other",
] as const;

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  service: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  service: "",
  subject: "",
  message: "",
};

function isConfirmed(value: string) {
  return Boolean(value && !value.startsWith("[Insert"));
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.fullName.trim())
      nextErrors.fullName = "Please enter your full name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service)
      nextErrors.service = "Please select the service you are interested in.";
    if (!formData.subject.trim())
      nextErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) {
      nextErrors.message = "Please tell us how NewMaster can help.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message =
        "Please provide at least 20 characters so we can understand your enquiry.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setIsSubmitting(false);
    setStatus(
      "Our contact form is temporarily unavailable. Please use the contact details on this page to reach our team directly.",
    );
  };

  const contactMethods = [
    isConfirmed(CONTACT.phone)
      ? { label: "Phone", value: CONTACT.phone, icon: Phone }
      : null,
    isConfirmed(CONTACT.email)
      ? { label: "Email", value: CONTACT.email, icon: Mail }
      : null,
    isConfirmed(CONTACT.whatsapp)
      ? { label: "WhatsApp", value: CONTACT.whatsapp, icon: MessageCircle }
      : null,
  ].filter(Boolean) as { label: string; value: string; icon: typeof Phone }[];

  const businessHours = [CONTACT.hoursWeekday, CONTACT.hoursSaturday].filter(
    isConfirmed,
  );

  return (
    <section className="relative overflow-hidden bg-gray-light py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 dotted-pattern opacity-20 pointer-events-none" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="section-label mb-4 justify-center text-navy/70">
            Start a Conversation
          </div>
          <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
            Tell us what your workplace needs
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Request a quotation, arrange occupational medical services or
            training, or discuss a practical health and safety solution for your
            organisation.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
          <aside className="overflow-hidden rounded-2xl bg-navy text-white shadow-card">
            <div className="diagonal-pattern p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-orange-400">
                  Contact Information
                </p>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  NewMaster Health and Safety
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Integrated workplace health, safety, environmental, medical
                  and training support for organisations across Uganda and the
                  wider African market.
                </p>
              </div>

              <div className="space-y-4">
                <InfoItem
                  icon={MapPin}
                  label={CONTACT.kampalaLabel}
                  value={
                    isConfirmed(CONTACT.kampalaAddress)
                      ? CONTACT.kampalaAddress
                      : "Operations in the Kampala / Kasangati area"
                  }
                />
                <InfoItem
                  icon={MapPin}
                  label={CONTACT.mbararaLabel}
                  value={
                    isConfirmed(CONTACT.mbararaAddress)
                      ? CONTACT.mbararaAddress
                      : "Operations in Mbarara City"
                  }
                />
                {contactMethods.map((item) => (
                  <InfoItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                  />
                ))}
                {businessHours.length > 0 && (
                  <InfoItem
                    icon={Clock3}
                    label="Business Hours"
                    value={businessHours.join(" · ")}
                  />
                )}
              </div>

              {contactMethods.length === 0 && (
                <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed text-white/70">
                  Confirmed phone, WhatsApp and email details will appear here
                  when supplied.
                </div>
              )}

              <div className="mt-8 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3 text-sm text-white/75">
                  <Building2
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                    aria-hidden="true"
                  />
                  <p>
                    Services can be adapted to different industries, workforce
                    sizes and operating environments.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <Card>
            <CardHeader>
              <CardTitle>Send an Enquiry</CardTitle>
              <CardDescription>
                Complete the form below. Required fields are marked with an
                asterisk.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    htmlFor="fullName"
                    required
                    error={errors.fullName}>
                    <Input
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(event) =>
                        updateField("fullName", event.target.value)
                      }
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={
                        errors.fullName ? "fullName-error" : undefined
                      }
                    />
                  </FormField>
                  <FormField
                    label="Email Address"
                    htmlFor="email"
                    required
                    error={errors.email}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="you@organisation.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Phone Number" htmlFor="phone">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      placeholder="Optional"
                    />
                  </FormField>
                  <FormField
                    label="Organisation / Company"
                    htmlFor="organisation">
                    <Input
                      id="organisation"
                      name="organisation"
                      autoComplete="organization"
                      value={formData.organisation}
                      onChange={(event) =>
                        updateField("organisation", event.target.value)
                      }
                      placeholder="Optional"
                    />
                  </FormField>
                </div>

                <FormField
                  label="Service Interested In"
                  htmlFor="service"
                  required
                  error={errors.service}>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => updateField("service", value)}>
                    <SelectTrigger
                      id="service"
                      aria-label="Service interested in"
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField
                  label="Subject"
                  htmlFor="subject"
                  required
                  error={errors.subject}>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(event) =>
                      updateField("subject", event.target.value)
                    }
                    placeholder="How can we help?"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  />
                </FormField>

                <FormField
                  label="Message"
                  htmlFor="message"
                  required
                  error={errors.message}>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Tell us about your organisation, location and the support you need."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                </FormField>

                {status && (
                  <div
                    role="status"
                    className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                    {status}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto">
                  {isSubmitting ? (
                    <>
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />{" "}
                      Checking form...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" /> Send
                      Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  required = false,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>
        {label}
        {required && (
          <span className="ml-1 text-orange-500" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </Label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-300">
          {label}
        </p>
        <p className="mt-1 break-words text-sm leading-relaxed text-white/85">
          {value}
        </p>
      </div>
    </div>
  );
}
