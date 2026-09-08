"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, TrendingUp, PhoneCall } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface NavLinkItem {
  name: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Career", href: "/career" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A192F]/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-2.5"
          : "bg-[#0A192F] border-b border-slate-800/80 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            aria-label="Equity & Commodity Market Research Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                Equity & Commodity
              </span>
              <span className="text-[11px] font-medium tracking-wider text-amber-400 uppercase">
                Market Research
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? "text-amber-400 font-semibold bg-slate-800/60"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0A192F] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-sm hover:shadow-md hover:shadow-amber-500/20 transition-all duration-200 group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-[#0A192F] bg-amber-400 hover:bg-amber-500 sm:hidden"
            >
              <span>Contact</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] bg-[#061121]/95 backdrop-blur-md z-50 flex flex-col border-t border-slate-800 animate-in fade-in duration-200">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-slate-800 text-amber-400 font-semibold border-l-4 border-amber-400"
                        : "text-slate-200 hover:bg-slate-800/60 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-base font-semibold text-[#0A192F] bg-amber-400 hover:bg-amber-500 shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${COMPANY_DATA.phone}`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call Desk: {COMPANY_DATA.phone}</span>
              </a>
            </div>

            {/* Disclaimer reminder on mobile menu */}
            <p className="text-[11px] text-slate-400 leading-relaxed pt-3">
              Equity & Commodity Market Research is an independent research provider. Research is for informational and educational purposes only.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
