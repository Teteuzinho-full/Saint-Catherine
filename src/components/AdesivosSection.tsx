"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function AdesivosSection() {
  return (
    <section className="relative py-28 bg-sc-offwhite overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="Registre sua Jornada"
            title="Cada destino, um adesivo. Cada adesivo, uma conquista."
            align="left"
          />
          <p className="mt-6 text-sc-blue/70 leading-relaxed max-w-xl">
            Ao visitar atrações participantes e pontos turísticos presentes no
            Passaporte Saint Catherine, o viajante poderá registrar sua jornada
            por meio de adesivos exclusivos.
          </p>
          <p className="mt-4 text-sc-blue/70 leading-relaxed max-w-xl">
            Cada adesivo representa uma conquista e transforma o passaporte em
            uma coleção única de experiências — um relicário pessoal de tudo o
            que Santa Catarina tem de mais especial.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-xs"
        >
          <div className="absolute inset-0 bg-sc-gold/20 blur-3xl rounded-full scale-90" />
          <Image
            src="/assets/adesivo.webp"
            alt="Adesivo colecionável — Ponte Hercílio Luz"
            width={874}
            height={1330}
            className="relative w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
