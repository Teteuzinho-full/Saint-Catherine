"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CONSENT_KEY = "sc_consent_v1";

export function ConsentGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "pending" | "accepted" | "declined">(
    "loading"
  );
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted") setStatus("accepted");
    else if (saved === "declined") setStatus("declined");
    else setStatus("pending");
  }, []);

  useEffect(() => {
    if (status === "pending" || status === "loading") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  function aceitar() {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    window.localStorage.setItem(CONSENT_KEY + "_ts", new Date().toISOString());
    setStatus("accepted");
  }

  function recusar() {
    window.localStorage.setItem(CONSENT_KEY, "declined");
    setStatus("declined");
    router.replace("/ate-a-proxima-viagem");
  }

  // Páginas legais permanecem acessíveis mesmo sem consentimento, para transparência.
  const paginaLivre = pathname?.startsWith("/politica-") || pathname?.startsWith("/termos-") || pathname?.startsWith("/direitos-") || pathname?.startsWith("/exclusao-") || pathname?.startsWith("/consentimento-") || pathname === "/ate-a-proxima-viagem";
  const acessoBloqueado = status === "declined" && !paginaLivre;

  useEffect(() => {
    if (acessoBloqueado) router.replace("/ate-a-proxima-viagem");
  }, [acessoBloqueado, router]);

  if (status === "loading") {
    return <div className="min-h-screen bg-sc-offwhite" />;
  }

  return (
    <>
      {!acessoBloqueado && children}
      <AnimatePresence>
        {status === "pending" && !paginaLivre && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-sc-blue/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-sm border border-sc-gold/40 bg-sc-offwhite p-8 sm:p-10 shadow-gold"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="ornament-divider mb-4 text-sc-gold text-xs uppercase tracking-widest2">
                Saint Catherine
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-center text-sc-blue mb-4">
                Bem-vindo ao Saint Catherine
              </h2>
              <p className="text-center text-sc-blue/80 leading-relaxed mb-8">
                Aceite nossos{" "}
                <Link href="/termos-de-uso" className="underline decoration-sc-gold underline-offset-4 hover:text-sc-gold">
                  Termos de Uso
                </Link>
                ,{" "}
                <Link href="/politica-de-privacidade" className="underline decoration-sc-gold underline-offset-4 hover:text-sc-gold">
                  Política de Privacidade
                </Link>{" "}
                e{" "}
                <Link href="/politica-de-cookies" className="underline decoration-sc-gold underline-offset-4 hover:text-sc-gold">
                  Política de Cookies
                </Link>{" "}
                para continuar navegando.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={aceitar}
                  className="px-8 py-3 bg-sc-blue text-sc-offwhite tracking-widest2 text-sm uppercase hover:bg-sc-gold hover:text-sc-blue transition-colors duration-300"
                >
                  Aceitar
                </button>
                <button
                  onClick={recusar}
                  className="px-8 py-3 border border-sc-blue/30 text-sc-blue tracking-widest2 text-sm uppercase hover:border-sc-red hover:text-sc-red transition-colors duration-300"
                >
                  Não Aceitar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
