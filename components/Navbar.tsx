"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Updated navigation structure based on your provided content
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Therapeutic Areas", href: "/therapeutic-areas" },
    { name: "Sponsors & CROs", href: "/sponsorscros" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkClass = (href: string) =>
    `relative pb-1 transition-colors
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-400
     after:origin-left after:scale-x-0 after:transition-transform after:duration-300
     hover:after:scale-x-100
     ${pathname === href ? "after:scale-x-100 text-cyan-400" : "text-white"}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-slate-950/95 backdrop-blur-md py-2 shadow-xl" : "bg-transparent py-4"}`}
      >
        <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Sync<span className="text-cyan-400 group-hover:text-white">Vision</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium leading-none mt-1">
                Research Solution LLP
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Using lg:flex and gap-6 to accommodate 7 items */}
          <ul className="hidden lg:flex items-center gap-6 text-[12px] xl:text-[13px] font-medium tracking-wide">
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
            className="lg:hidden text-white text-2xl cursor-pointer p-2"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[100] bg-slate-950 text-white transition-all duration-500 transform
        ${open ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="flex items-center justify-between h-24 px-6 border-b border-white/10">
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-tight text-white">
                Sync<span className="text-cyan-400">Vision</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
                Research Solution LLP
            </span>
          </div>
          <button onClick={() => setOpen(false)} className="text-3xl p-2 hover:text-cyan-400 transition-colors">✕</button>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-12 text-2xl font-light">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              onClick={() => setOpen(false)} 
              href={link.href} 
              className={`transition-colors duration-300 ${pathname === link.href ? "text-cyan-400 font-bold" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Brand Motto at bottom of mobile nav */}
        <div className="absolute bottom-10 left-0 w-full text-center">
             <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                Reliable • Compliant • Quality
             </p>
        </div>
      </div>
    </>
  );
}