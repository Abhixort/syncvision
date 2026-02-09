"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "63d3068e-a5a9-48bd-95ed-8d60702f15c8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result: Web3FormsResponse = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-[var(--syncvision-gold)]/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-[var(--syncvision-gold)]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 max-w-[250px]">
          Thank you for reaching out. SyncVision will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="cursor-pointer mt-8 text-sm font-bold text-[var(--syncvision-gold)] hover:underline uppercase tracking-widest"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none transition-all focus:border-syncvision-teal placeholder:text-slate-400 placeholder:opacity-100"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@company.com"
            required
            className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none transition-all focus:border-syncvision-teal placeholder:text-slate-400 placeholder:opacity-100"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
          Subject
        </label>
        <div className="relative">
          <select
            name="subject"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none transition-all focus:border-syncvision-teal appearance-none cursor-pointer"
          >
            <option value="General Inquiry" className="bg-[var(--syncvision-green)]">
              General Inquiry
            </option>
            <option value="Site Feasibility" className="bg-[var(--syncvision-green)]">
              Site Feasibility
            </option>
            <option value="Sponsor Collaboration" className="bg-[var(--syncvision-green)]">
              Sponsor Collaboration
            </option>
            <option value="Career Opportunity" className="bg-[var(--syncvision-green)]">
              Career Opportunity
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
          Message
        </label>
        <textarea
          name="message"
          placeholder="How can we help your study?"
          rows={5}
          required
          className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none transition-all focus:border-syncvision-teal placeholder:text-slate-400 placeholder:opacity-100 resize-none"
        />
      </div>

      {error && <p className="text-red-400 text-sm ml-1">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full bg-[var(--syncvision-gold)] text-[var(--syncvision-green)] py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all transform hover:scale-[1.01] shadow-lg shadow-[0_4px_20px_rgb(var(--syncvision-gold-rgb)_/_0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-[var(--syncvision-green)]/30 border-t-[var(--syncvision-green)] rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
