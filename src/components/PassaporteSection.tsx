"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const atributos = [
  "Produto premium, produzido em edição exclusiva",
  "Numeração individual — cada exemplar é único",
  "Experiência colecionável, feita para durar",
  "Acesso a benefícios especiais em parceiros selecionados",
];

export function PassaporteSection() {
  return (
    <section id="passaporte" className="relative py-28 bg-sc-blue overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#D4AF37_1px,transparent_0)] [background-size:26px_26px]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-sc-gold/30" />
            <Image
              src="/assets/passaporte.png"
              alt="Passaporte Premium Saint Catherine — capa oficial"
              width={1456}
              height={816}
              className="relative w-full h-auto object-cover shadow-gold"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <p className="ornament-divider justify-start text-sc-gold text-xs sm:text-sm uppercase tracking-widest2 mb-5">
            O Passaporte
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-sc-offwhite leading-tight">
            Uma peça para carregar, colecionar e exibir
          </h2>
          <p className="mt-6 text-sc-offwhite/75 leading-relaxed">
            O Passaporte Saint Catherine não é um ingresso — é um objeto. Desenhado
            com o rigor de uma peça diplomática e a exclusividade de uma edição
            limitada, ele acompanha o viajante em cada destino, registrando sua
            jornada por Santa Catarina.
          </p>
          <ul className="mt-8 space-y-4">
            {atributos.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sc-offwhite/85">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sc-gold shrink-0" />
                <span className="leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
