"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_NUMERO } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
        "Olá! Vim pelo site Saint Catherine e gostaria de mais informações sobre o Passaporte Premium."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-gold"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500/40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <Image
        src="/assets/whatsapp.webp"
        alt="WhatsApp"
        width={36}
        height={36}
        className="relative h-8 w-8 sm:h-9 sm:w-9 object-contain"
      />
    </motion.a>
  );
}
