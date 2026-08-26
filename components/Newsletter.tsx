"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus(
      "Thank you. Subscriptions are not stored online yet. Please contact NewMaster Health and Safety if you would like updates.",
    );
    setEmail("");
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
          <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          Stay In Touch
          <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-navy block sm:inline">Ready to strengthen</span>{" "}
          <span className="text-orange-500 italic block sm:inline">
            workplace health and safety?
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          Leave your email if you would like to be contacted, or speak with the team directly.
          We do not currently operate an automated mailing list.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto w-full"
        >
          <div className="relative w-full">
            <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-navy rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
              className="w-full pl-14 sm:pl-16 pr-4 py-3.5 sm:py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 text-sm sm:text-base"
          >
            Send
          </button>
        </form>
        {status && (
          <p className="text-sm text-navy/70 mt-4 max-w-xl mx-auto" role="status">
            {status}
          </p>
        )}
        <Link
          href="/contact"
          className="inline-block mt-6 text-orange-500 font-semibold text-sm sm:text-base"
        >
          Or go to the contact page
        </Link>
      </div>
    </section>
  );
}
