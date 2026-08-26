"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, CONTACT_REASONS } from "@/lib/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: CONTACT_REASONS[0],
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.message) {
      setStatus("Please complete the required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus(
      "Thank you. This form is not connected to a server yet. Please use the phone, WhatsApp or email placeholders once provided, or try again when live enquiry handling is enabled.",
    );
  };

  return (
    <section className="relative bg-gray-light py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Contact Us
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy block sm:inline">Let&apos;s Make Your Workplace</span>
            <span className="text-orange-500 italic block sm:inline sm:ml-2">Safer</span>
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                  How can we help? *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                >
                  {CONTACT_REASONS.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                  Tell Us About Your Needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your organisation, location and the occupational health, safety or training support you need."
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 text-sm sm:text-base w-full sm:w-auto"
              >
                Send Message
              </button>
              {status && (
                <p className="text-sm text-navy/80" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white diagonal-pattern h-full">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Operations</h3>
                <div className="space-y-4 text-white/70 text-sm sm:text-base">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                    <span>
                      <strong className="text-white">{CONTACT.kampalaLabel}</strong>
                      <br />
                      {CONTACT.kampalaAddress}
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                    <span>
                      <strong className="text-white">{CONTACT.mbararaLabel}</strong>
                      <br />
                      {CONTACT.mbararaAddress}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact</h3>
                <div className="space-y-2.5 sm:space-y-3">
                  <p className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {CONTACT.phone}
                  </p>
                  <p className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    WhatsApp: {CONTACT.whatsapp}
                  </p>
                  <p className="flex items-center gap-2 text-white/70 text-sm sm:text-base break-all">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {CONTACT.email}
                  </p>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Business Hours</h3>
                <div className="space-y-1.5 text-white/70 text-sm sm:text-base">
                  <p>{CONTACT.hoursWeekday}</p>
                  <p>{CONTACT.hoursSaturday}</p>
                  <p className="text-white/50 text-xs sm:text-sm mt-1">Sunday & Public Holidays: Closed</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
