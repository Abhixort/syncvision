"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Therapeutic Areas", href: "/therapeutic-areas" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkClass = (href: string) =>
    `relative pb-1 transition-colors duration-300 font-semibold tracking-tight
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[var(--syncvision-gold)]
     after:origin-left after:scale-x-0 after:transition-transform after:duration-300
     hover:after:scale-x-100
     ${pathname === href ? "after:scale-x-100 text-[var(--syncvision-gold)]" : "text-white hover:text-[var(--syncvision-gold)]/80"}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${scrolled 
            ? "bg-[var(--syncvision-green)]/95 backdrop-blur-md py-3 shadow-xl border-b border-[var(--syncvision-teal)]/20" 
            : "bg-transparent py-5 border-b border-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500">
          
        <Link href="/" className="relative flex items-center group">
          <div className={`relative transition-all duration-500 ${
            /* Increased heights to give the logo more vertical 'breathing room' */
            scrolled 
              ? "w-60 h-16 md:w-64 md:h-18" 
              : "w-80 h-24 md:w-96 md:h-28"
          }`}>
            <Image 
              src="/assets/SyncVisionLogo5.png" 
              alt="SyncVision Logo" 
              fill
              /* 'object-contain' ensures it never cuts off. 
                'object-left' keeps it aligned with your container edge. */
              className={`object-contain object-left transition-all duration-500 ${
                scrolled ? "brightness-0 invert" : ""
              }`}              
              priority
            />
          </div>
        </Link>

          <ul className="hidden lg:flex items-center gap-8 text-sm xl:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={navLinkClass(link.href)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer lg:hidden text-white text-3xl p-2 hover:text-[var(--syncvision-gold)] transition-colors"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[100] bg-[var(--syncvision-green)] text-white transition-all duration-500 transform flex flex-col
        ${open ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="flex items-center justify-between min-h-[90px] px-6 border-b border-white/10">
          {/* MOBILE LOGO: Also increased for readability */}
          <div className="relative w-56 h-14">
             <Image 
                src="/assets/SyncVisionLogo5.png" 
                alt="SyncVision Logo" 
                fill
                className="object-contain object-left"
              />
          </div>
          <button onClick={() => setOpen(false)} className="cursor-pointer text-3xl p-2 hover:text-[var(--syncvision-gold)] transition-colors">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-8">
          <div className="flex flex-col gap-5 text-lg font-bold tracking-tight">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                onClick={() => setOpen(false)} 
                href={link.href} 
                className={`transition-all border-l-2 pl-4 py-1.5 ${
                  pathname === link.href 
                  ? "text-[var(--syncvision-gold)] border-[var(--syncvision-gold)] bg-[var(--syncvision-gold)]/5" 
                  : "text-white/90 border-transparent active:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 text-center border-t border-white/5 bg-[var(--syncvision-teal)]/20">
             <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--syncvision-gold)] font-black">
                Reliable • Compliant • Quality
             </p>
        </div>
      </div>
    </>
  );
}