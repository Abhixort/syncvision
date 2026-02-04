import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Sync<span className="text-cyan-400 group-hover:text-white">Vision</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-medium">
                  Research Solution LLP
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A professional Site Management Organization (SMO) delivering efficient, compliant, and quality-driven clinical trial operations.
            </p>
            <div className="flex gap-4">
  <Link 
    href="#" 
    aria-label="LinkedIn"
    className="p-2 rounded-full bg-white/5 hover:bg-cyan-600 transition-all hover:-translate-y-1"
  >
    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
  </Link>
  
  <Link 
    href="#" 
    aria-label="Twitter"
    className="p-2 rounded-full bg-white/5 hover:bg-sky-500 transition-all hover:-translate-y-1"
  >
    <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white" />
  </Link>

  <Link 
    href="#" 
    aria-label="Facebook"
    className="p-2 rounded-full bg-white/5 hover:bg-blue-600 transition-all hover:-translate-y-1"
  >
    <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white" />
  </Link>

  <Link 
    href="#" 
    aria-label="Instagram"
    className="p-2 rounded-full bg-white/5 hover:bg-pink-600 transition-all hover:-translate-y-1"
  >
    <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white" />
  </Link>
</div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Our Services</Link></li>
              <li><Link href="/therapeutic-areas" className="hover:text-cyan-400 transition-colors">Therapeutic Areas</Link></li>
              <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Therapeutic Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Expertise</h4>
            <ul className="grid grid-cols-1 gap-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">Oncology</li>
              <li className="flex items-center gap-2">Neurology</li>
              <li className="flex items-center gap-2">Cardiology</li>
              <li className="flex items-center gap-2">Dermatology</li>
              <li className="flex items-center gap-2 italic text-cyan-500/80">And more...</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>DEMO ADDRESS, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:official-email@syncvision.com" className="hover:text-white transition-colors">
                official@syncvisionresearch.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>+91 99999-99999</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs uppercase tracking-widest font-medium">
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