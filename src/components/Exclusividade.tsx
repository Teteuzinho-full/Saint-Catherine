"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const pilares = [
  {
    titulo: "Parceiros Selecionados",
    texto: "Uma curadoria criteriosa de hotéis, restaurantes e experiências que representam o melhor de Santa Catarina.",
  },
  {
    titulo: "Benefícios Exclusivos",
    texto: "Vantagens reais, reservadas apenas para portadores do Passaporte Saint Catherine.",
  },
  {
    titulo: "Turismo Premium",
    texto: "Um novo padrão de viagem — pausado, intencional e verdadeiramente memorável.",
  },
  {
    titulo: "Locais Únicos",
    texto: "Acesso a paisagens e experiências que poucos viajantes conhecem de verdade.",
  },
  {
    titulo: "Coleção de Memórias",
    texto: "Cada jornada registrada, cada conquista guardada — um passaporte que se torna relicário.",
  },
];

export function Exclusividade() {
  return (
    <section className="relative py-28 bg-sc-offwhite overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="A Filosofia Saint Catherine"
          title="Mais do que visitar Santa Catarina. Colecionar experiências."
          description="O Saint Catherine nasce de uma convicção simples: viajar bem é um privilégio que deve ser vivido com intenção, curadoria e exclusividade."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pilares.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-6 bg-white border border-sc-blue/10 hover:border-sc-gold transition-colors duration-300"
            >
              <span className="font-display text-4xl text-sc-gold/60 group-hover:text-sc-gold transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-sc-blue">{p.titulo}</h3>
              <p className="mt-2 text-sm text-sc-blue/65 leading-relaxed">{p.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
