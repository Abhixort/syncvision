"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-5 w-full">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            className="w-full px-5 py-4 bg-white/10 border border-white/10 text-white rounded-xl outline-none focus:border-cyan-500 transition-all placeholder:text-slate-600"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            required
            className="w-full px-5 py-4 bg-white/10 border border-white/10 text-white rounded-xl outline-none focus:border-cyan-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
          Subject
        </label>
        <select className="w-full px-5 py-4 bg-white/10 border border-white/10 text-white rounded-xl outline-none focus:border-cyan-500 transition-all appearance-none cursor-pointer">
           <option className="bg-slate-900">General Inquiry</option>
           <option className="bg-slate-900">Site Feasibility</option>
           <option className="bg-slate-900">Sponsor Collaboration</option>
           <option className="bg-slate-900">Career Opportunity</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
          Message
        </label>
        <textarea
          placeholder="How can we help your study?"
          rows={5}
          required
          className="w-full px-5 py-4 bg-white/10 border border-white/10 text-white rounded-xl outline-none focus:border-cyan-500 transition-all placeholder:text-slate-600 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-500 text-slate-950 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all transform hover:scale-[1.01] shadow-lg shadow-cyan-500/20 cursor-pointer"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}