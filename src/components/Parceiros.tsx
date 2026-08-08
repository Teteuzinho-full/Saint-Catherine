"use client";

import { motion } from "framer-motion";
import { parceiros } from "@/data/parceiros";
import { SectionHeading } from "./SectionHeading";

export function Parceiros() {
  return (
    <section id="parceiros" className="relative py-28 bg-sc-blue">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Rede Selecionada"
          title="Parceiros que elevam cada experiência"
          description="Hotéis, restaurantes, passeios e atrativos escolhidos por representarem o padrão Saint Catherine de excelência."
          light
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parceiros.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative bg-sc-offwhite/[0.04] border border-sc-gold/15 hover:border-sc-gold p-7 transition-colors duration-300"
            >
              <span className="inline-block text-[11px] uppercase tracking-widest2 text-sc-gold border border-sc-gold/40 px-2.5 py-1">
                {p.categoria}
              </span>
              <h3 className="mt-4 font-display text-2xl text-sc-offwhite">{p.nome}</h3>
              <p className="text-xs text-sc-offwhite/50 uppercase tracking-wide mt-0.5">{p.cidade}</p>
              <p className="mt-4 text-sm text-sc-offwhite/70 leading-relaxed">{p.descricao}</p>
              <p className="mt-4 text-sm text-sc-gold border-t border-sc-gold/15 pt-4">
                {p.beneficio}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-sc-offwhite/40">
          Novos parceiros são adicionados continuamente à rede Saint Catherine.
        </p>
      </div>
    </section>
  );
}
