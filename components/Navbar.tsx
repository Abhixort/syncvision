"use client";

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
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#2FB7DA]
     after:origin-left after:scale-x-0 after:transition-transform after:duration-300
     hover:after:scale-x-100
     ${pathname === href ? "after:scale-x-100 text-[#2FB7DA]" : "text-white hover:text-[#2FB7DA]/80"}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 border-b
        ${scrolled 
            ? "bg-[#0F1C2E]/95 backdrop-blur-md py-3 shadow-xl border-[#2FB7DA]/20" 
            : "bg-transparent py-6 border-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-tight">
              <span className={`font-extrabold tracking-tighter text-white transition-all duration-500 ${
                scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              }`}>
                Sync<span className="text-[#2FB7DA]">Vision</span>
              </span>
              <span className={`uppercase tracking-[0.2em] text-[#2FB7DA] font-bold leading-none mt-1 transition-all duration-500 ${
                scrolled ? "text-[8px] md:text-[9px]" : "text-[10px] md:text-[11px]"
              }`}>
                Research Solution LLP
              </span>
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
            className="lg:hidden text-white text-3xl p-2 hover:text-[#2FB7DA] transition-colors"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU - Optimized Font Sizes */}
      <div className={`fixed inset-0 z-[100] bg-[#0F1C2E] text-white transition-all duration-500 transform flex flex-col
        ${open ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="flex items-center justify-between min-h-[80px] px-6 border-b border-white/10">
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold text-white">Sync<span className="text-[#2FB7DA]">Vision</span></span>
          </div>
          <button onClick={() => setOpen(false)} className="text-3xl p-2 hover:text-[#2FB7DA] transition-colors">✕</button>
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
                  ? "text-[#2FB7DA] border-[#2FB7DA] bg-[#2FB7DA]/5" 
                  : "text-white/90 border-transparent active:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 text-center border-t border-white/5 bg-[#0a1422]">
             <p className="text-[10px] uppercase tracking-[0.3em] text-[#2FB7DA] font-black">
                Reliable • Compliant • Quality
             </p>
        </div>
      </div>
    </>
  );
}