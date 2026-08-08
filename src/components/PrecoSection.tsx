"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function PrecoSection() {
  return (
    <section className="relative py-28 bg-sc-offwhite overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sc-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/assets/menu.webp"
            alt="Brasão Saint Catherine"
            width={64}
            height={64}
            className="mx-auto h-16 w-16 object-contain mb-6"
          />
          <p className="ornament-divider text-xs uppercase tracking-widest2 text-sc-gold mb-4">
            Sua Coleção Começa Aqui
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-sc-blue">
            Passaporte Saint Catherine
          </h2>
          <p className="mt-6 font-display text-6xl sm:text-7xl text-sc-blue">
            R$ 189,90
          </p>
          <p className="mt-4 text-sc-blue/60 text-sm">
            Edição exclusiva &middot; Numeração individual &middot; Envio nacional
          </p>

          <Link
            href="/checkout"
            className="mt-10 inline-block px-12 py-4 bg-sc-blue text-sc-offwhite text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors duration-300"
          >
            Adquirir o Meu Passaporte
          </Link>

          <p className="mt-6 text-xs text-sc-blue/40 max-w-md mx-auto leading-relaxed">
            Peças produzidas em lote limitado. Após o esgotamento da edição atual,
            novas unidades podem levar meses para retornar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
