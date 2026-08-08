"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-sc-blue">
      {/* Textura de fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#D4AF37_1px,transparent_0)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-sc-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-sc-red/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="ornament-divider justify-start text-sc-gold text-xs sm:text-sm uppercase tracking-widest2 mb-6">
            Edição Exclusiva &middot; Santa Catarina
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-sc-offwhite">
            Descubra Santa Catarina{" "}
            <span className="text-shimmer">Como Poucos Conseguem</span>
          </h1>
          <p className="mt-7 text-lg text-sc-offwhite/75 leading-relaxed max-w-xl">
            Um passaporte premium criado para colecionar experiências, benefícios
            exclusivos e memórias inesquecíveis.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#passaporte"
              className="px-8 py-4 bg-sc-gold text-sc-blue text-center text-sm uppercase tracking-widest2 font-medium hover:bg-sc-offwhite transition-colors duration-300"
            >
              Conheça o Passaporte
            </Link>
            <Link
              href="/#destinos"
              className="px-8 py-4 border border-sc-offwhite/40 text-sc-offwhite text-center text-sm uppercase tracking-widest2 hover:border-sc-gold hover:text-sc-gold transition-colors duration-300"
            >
              Explorar Destinos
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-sc-gold/20 blur-3xl rounded-full scale-90" />
          <div className="relative rounded-sm overflow-hidden shadow-gold border border-sc-gold/30">
            <Image
              src="/assets/passaporte.png"
              alt="Passaporte Premium Saint Catherine"
              width={1456}
              height={816}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-6 -left-6 bg-sc-offwhite text-sc-blue px-6 py-4 shadow-premium hidden sm:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="font-display text-2xl text-sc-gold">Nº 000117</p>
            <p className="text-xs uppercase tracking-widest2 text-sc-blue/60">Edição Limitada</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sc-offwhite/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" />
          <circle cx="11" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
