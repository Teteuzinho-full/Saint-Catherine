"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] lg:hidden" initial="hidden" animate="visible" exit="hidden">
          <motion.button type="button" aria-label="Fechar menu" className="absolute inset-0 cursor-default bg-sc-blue/55 backdrop-blur-[2px]" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.22 }} onClick={() => setOpen(false)} />
          <motion.aside id={menuId} className="absolute inset-y-0 right-0 flex w-[min(88vw,25rem)] flex-col overflow-y-auto border-l border-sc-gold/30 bg-sc-blue text-sc-offwhite shadow-[-24px_0_60px_rgba(0,0,0,0.28)]" variants={{ hidden: { x: "100%" }, visible: { x: 0 } }} transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }} role="dialog" aria-modal="true" aria-label="Menu de navegação">
            <div className="flex items-center justify-between border-b border-sc-gold/20 px-6 py-5">
              <span className="font-display text-xl tracking-widest2">SAINT CATHERINE</span>
              <button type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center border border-sc-gold/30 text-sc-offwhite transition-colors hover:border-sc-gold hover:bg-sc-gold hover:text-sc-blue focus:outline-none focus:ring-2 focus:ring-sc-gold">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 py-10" aria-label="Navegação principal">
              {links.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.045, duration: 0.28 }}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="block border-b border-sc-offwhite/10 py-4 font-display text-3xl text-sc-offwhite transition-colors hover:text-sc-gold focus:outline-none focus:text-sc-gold">{link.label}</Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}>
                <Link href="/checkout" onClick={() => setOpen(false)} className="mt-8 block border border-sc-gold bg-sc-gold px-6 py-4 text-center text-sm font-semibold uppercase tracking-widest2 text-sc-blue transition-colors hover:bg-transparent hover:text-sc-gold">Comprar passaporte</Link>
              </motion.div>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-sc-blue/95 py-2 shadow-premium backdrop-blur-sm" : "bg-gradient-to-b from-sc-blue/70 to-transparent py-4"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/#inicio" className="group flex items-center gap-3" aria-label="Saint Catherine — início">
            <Image src="/assets/menu.webp" alt="Brasão Saint Catherine" width={48} height={48} className="h-11 w-11 object-contain drop-shadow-[0_2px_6px_rgba(212,175,55,0.5)] transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12" priority />
            <span className="font-display text-xl tracking-widest2 text-sc-offwhite sm:text-2xl">SAINT CATHERINE</span>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {links.map((link) => <Link key={link.href} href={link.href} className="text-sm uppercase tracking-widest2 text-sc-offwhite/85 transition-colors hover:text-sc-gold">{link.label}</Link>)}
            <Link href="/checkout" className="border border-sc-gold px-6 py-2.5 text-sm uppercase tracking-widest2 text-sc-gold transition-colors hover:bg-sc-gold hover:text-sc-blue">Comprar</Link>
          </nav>
          <button type="button" aria-label="Abrir menu" aria-expanded={open} aria-controls={menuId} className="grid h-11 w-11 place-items-center border border-sc-offwhite/25 text-sc-offwhite transition-colors hover:border-sc-gold hover:text-sc-gold focus:outline-none focus:ring-2 focus:ring-sc-gold lg:hidden" onClick={() => setOpen(true)}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </button>
        </div>
      </header>
      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
