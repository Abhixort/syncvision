"use client";

import React, { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

// Define the response shape from Web3Forms
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
    
    // Web3Forms Access Key - Get a free one at https://web3forms.com/
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
        <div className="w-20 h-20 bg-[#2FB7DA]/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#2FB7DA]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 max-w-[250px]">
          Thank you for reaching out. SyncVision will get back to you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-bold text-[#2FB7DA] hover:underline uppercase tracking-widest"
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
            className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none focus:border-[#2FB7DA] transition-all placeholder:text-slate-600"
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
            className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none focus:border-[#2FB7DA] transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
          Subject
        </label>
        <select 
          name="subject"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none focus:border-[#2FB7DA] transition-all appearance-none cursor-pointer"
        >
           <option value="General Inquiry" className="bg-[#0F1C2E]">General Inquiry</option>
           <option value="Site Feasibility" className="bg-[#0F1C2E]">Site Feasibility</option>
           <option value="Sponsor Collaboration" className="bg-[#0F1C2E]">Sponsor Collaboration</option>
           <option value="Career Opportunity" className="bg-[#0F1C2E]">Career Opportunity</option>
        </select>
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
          className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none focus:border-[#2FB7DA] transition-all placeholder:text-slate-600 resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm ml-1">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full bg-[#2FB7DA] text-[#0F1C2E] py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all transform hover:scale-[1.01] shadow-lg shadow-[#2FB7DA]/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-[#0F1C2E]/30 border-t-[#0F1C2E] rounded-full animate-spin" />
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