"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Updated background to SyncVision Green for consistency
    <footer className="bg-slate-950 text-white py-12 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block -ml-2"> {/* Negative margin to align logo edge with text */}
              <div className="relative w-64 h-32">
                <Image 
                  src="/assets/SyncVisionLogo4.png" 
                  alt="SyncVision Logo" 
                  fill
                  // Applying the same brightness/invert trick if visibility is low
                  className="object-cover object-left t" 
                  priority
                />
              </div>
            </Link>
            
            {/* <p className="text-white/60 text-sm leading-relaxed mb-6 mt-2">
              A professional Site Management Organization (SMO) delivering efficient, compliant, and quality-driven clinical trial operations.
            </p> */}

            {/* <div className="flex gap-4">
              {[
                { Icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700" },
                { Icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
                { Icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
                { Icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
              ].map(({ Icon, label, color }, idx) => (
                <Link 
                  key={idx}
                  href="#" 
                  aria-label={label}
                  className={`p-2 rounded-full bg-white/5 ${color} transition-all hover:-translate-y-1 group`}
                >
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                </Link>
              ))}
            </div> */}
            <div className="flex gap-4">
              {[
                /* Changed color classes from hover:bg-... to bg-... */
                { Icon: Linkedin, label: "LinkedIn", color: "bg-[#0077B5]" },
                { Icon: Twitter, label: "Twitter", color: "bg-[#1DA1F2]" },
                { Icon: Facebook, label: "Facebook", color: "bg-[#1877F2]" },
                { Icon: Instagram, label: "Instagram", color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
              ].map(({ Icon, label, color }, idx) => (
                <Link 
                  key={idx}
                  href="#" 
                  aria-label={label}
                  /* Added the background color directly. Hover now only affects transform and brightness */
                  className={`p-2.5 rounded-full ${color} transition-all duration-300 hover:-translate-y-1.5 hover:brightness-110 hover:shadow-lg group`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--syncvision-accent)]">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="/about" className="hover:text-[var(--syncvision-accent)] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--syncvision-accent)] transition-colors">Our Services</Link></li>
              <li><Link href="/therapeutic-areas" className="hover:text-[var(--syncvision-accent)] transition-colors">Therapeutic Areas</Link></li>
              <li><Link href="/careers" className="hover:text-[var(--syncvision-accent)] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--syncvision-accent)]">Expertise</h4>
            <ul className="grid grid-cols-1 gap-2 text-white/60 text-sm">
              <li className="flex items-center gap-2">Oncology</li>
              <li className="flex items-center gap-2">Neurology</li>
              <li className="flex items-center gap-2">Cardiology</li>
              <li className="flex items-center gap-2">Dermatology</li>
              <li className="flex items-center gap-2 italic text-[var(--syncvision-accent)]">And more...</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--syncvision-accent)]">Contact Us</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--syncvision-accent)] flex-shrink-0" />
                <span>DEMO ADDRESS, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--syncvision-accent)] flex-shrink-0" />
                <a href="mailto:official@syncvisionresearch.com" className="hover:text-white transition-colors">
                  official@syncvisionresearch.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--syncvision-accent)] flex-shrink-0" />
                <span>+91 99999-99999</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs uppercase tracking-widest font-medium">
          <p>© {currentYear} SyncVision Research Solution LLP. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}