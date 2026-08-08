"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`ornament-divider text-xs sm:text-sm uppercase tracking-widest2 mb-4 ${
            light ? "text-sc-gold" : "text-sc-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${
          light ? "text-sc-offwhite" : "text-sc-blue"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 leading-relaxed ${light ? "text-sc-offwhite/75" : "text-sc-blue/70"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
