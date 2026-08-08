"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coresRegioes, pontosTuristicos } from "@/data/regioes";
import { SectionHeading } from "./SectionHeading";

export function MapaInterativo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [regiaoAtiva, setRegiaoAtiva] = useState<string | null>(null);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    let cancelado = false;
    fetch("/mapa/mapa_regioes_sc.svg")
      .then((r) => r.text())
      .then((svgText) => {
        if (cancelado || !containerRef.current) return;
        // Integração do arquivo original sem qualquer alteração de path, script ou estrutura.
        containerRef.current.innerHTML = svgText;
        setCarregado(true);
      });
    return () => {
      cancelado = true;
    };
  }, []);

  useEffect(() => {
    if (!carregado || !containerRef.current) return;
    const paths = containerRef.current.querySelectorAll<SVGPathElement>("path.region");

    function handleClick(this: SVGPathElement) {
      const nome = this.dataset.region || null;
      setRegiaoAtiva((atual) => (atual === nome ? null : nome));
    }

    paths.forEach((p) => {
      p.style.cursor = "pointer";
      p.addEventListener("click", handleClick);
    });

    return () => {
      paths.forEach((p) => p.removeEventListener("click", handleClick));
    };
  }, [carregado]);

  useEffect(() => {
    if (!containerRef.current) return;
    const paths = containerRef.current.querySelectorAll<SVGPathElement>("path.region");
    paths.forEach((p) => {
      const isActive = p.dataset.region === regiaoAtiva;
      p.style.filter = isActive ? "brightness(1.18)" : "";
      p.style.stroke = isActive ? "#D4AF37" : "#ffffff";
      p.style.strokeWidth = isActive ? "2.4" : "1.2";
    });
  }, [regiaoAtiva]);

  const spots = regiaoAtiva ? pontosTuristicos[regiaoAtiva] ?? [] : [];
  const cor = regiaoAtiva ? coresRegioes[regiaoAtiva] : undefined;

  return (
    <section id="mapa" className="relative py-28 bg-sc-offwhite">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Explore o Território"
          title="Um mapa para planejar sua coleção"
          description="Toque em uma região para descobrir os pontos turísticos que fazem parte do universo Saint Catherine."
        />

        <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="bg-white border border-sc-blue/10 rounded-sm p-4 sm:p-8 shadow-premium">
            <div ref={containerRef} className="w-full [&>svg]:w-full [&>svg]:h-auto" />

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {Object.entries(coresRegioes).map(([nome, cor]) => (
                <button
                  key={nome}
                  onClick={() => setRegiaoAtiva((atual) => (atual === nome ? null : nome))}
                  className={`flex items-center gap-2 text-sm transition-opacity ${
                    regiaoAtiva && regiaoAtiva !== nome ? "opacity-50" : "opacity-100"
                  }`}
                >
                  <span className="h-3 w-3 rounded-sm shrink-0" style={{ backgroundColor: cor }} />
                  {nome}
                </button>
              ))}
            </div>
          </div>

          <div className="sticky top-24 bg-sc-blue text-sc-offwhite rounded-sm p-8 min-h-[320px] border border-sc-gold/20">
            <AnimatePresence mode="wait">
              {regiaoAtiva ? (
                <motion.div
                  key={regiaoAtiva}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-2xl flex items-center gap-2">
                      <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: cor }} />
                      {regiaoAtiva}
                    </h3>
                    <button
                      aria-label="Fechar"
                      onClick={() => setRegiaoAtiva(null)}
                      className="text-sc-offwhite/60 hover:text-sc-gold text-xl leading-none"
                    >
                      &times;
                    </button>
                  </div>
                  <p className="text-xs uppercase tracking-widest2 text-sc-gold mb-6">
                    {spots.length} pontos turísticos
                  </p>
                  <ul className="space-y-4">
                    {spots.map(([nome, cidade], i) => (
                      <motion.li
                        key={nome}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="border-l-2 pl-3"
                        style={{ borderColor: cor }}
                      >
                        <p className="text-sc-offwhite">{nome}</p>
                        <p className="text-sm text-sc-offwhite/50">{cidade}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[260px] items-center justify-center text-center text-sc-offwhite/50"
                >
                  Toque em uma região do mapa
                  <br />
                  para ver os pontos turísticos
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
