"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#passaporte", label: "O Passaporte" },
  { href: "/#destinos", label: "Destinos" },
  { href: "/#parceiros", label: "Parceiros" },
  { href: "/#mapa", label: "Mapa" },
  { href: "/#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sc-blue/95 backdrop-blur-sm shadow-premium py-2"
          : "bg-gradient-to-b from-sc-blue/70 to-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <Link href="/#inicio" className="flex items-center gap-3 group">
          <Image
            src="/assets/menu.webp"
            alt="Brasão Saint Catherine"
            width={48}
            height={48}
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain drop-shadow-[0_2px_6px_rgba(212,175,55,0.5)] transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <span className="font-display text-xl sm:text-2xl tracking-widest2 text-sc-offwhite">
            SAINT CATHERINE
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest2 text-sc-offwhite/85 hover:text-sc-gold transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/checkout"
            className="px-6 py-2.5 border border-sc-gold text-sc-gold text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors duration-300"
          >
            Comprar
          </Link>
        </nav>

        <button
          aria-label="Abrir menu"
          className="lg:hidden text-sc-offwhite p-2"
          onClick={() => setOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-sc-blue lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-sc-gold/20">
              <span className="font-display text-xl tracking-widest2 text-sc-offwhite">
                SAINT CATHERINE
              </span>
              <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="text-sc-offwhite p-2">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <motion.nav className="flex flex-col items-center justify-center gap-8 py-16">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl tracking-wide text-sc-offwhite hover:text-sc-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link
                  href="/checkout"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-block px-8 py-3 border border-sc-gold text-sc-gold uppercase tracking-widest2 text-sm hover:bg-sc-gold hover:text-sc-blue transition-colors"
                >
                  Comprar
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
