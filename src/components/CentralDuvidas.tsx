"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assuntosEmpresa,
  assuntosViajante,
  contatoEmpresaSchema,
  contatoViajanteSchema,
  ContatoEmpresaInput,
  ContatoViajanteInput,
} from "@/lib/validations";
import { abrirWhatsApp, montarMensagemEmpresa, montarMensagemViajante } from "@/lib/whatsapp";
import { SectionHeading } from "./SectionHeading";

type Tipo = "viajante" | "empresa";

function Campo({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest2 text-sc-blue/60">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-sc-red">{error}</span>}
    </label>
  );
}

const inputClass =
  "w-full border border-sc-blue/20 bg-white px-4 py-3 text-sc-blue placeholder:text-sc-blue/30 focus:outline-none focus:border-sc-gold transition-colors";

function FormViajante() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContatoViajanteInput>({ resolver: zodResolver(contatoViajanteSchema) });
  const assunto = watch("assunto");
  const [enviado, setEnviado] = useState(false);

  async function onSubmit(data: ContatoViajanteInput) {
    // Envio backend preparado — validação completa via Zod antes do disparo.
    await fetch("/api/contato", { method: "POST", body: JSON.stringify({ tipo: "viajante", ...data }) }).catch(() => {});
    abrirWhatsApp(montarMensagemViajante(data));
    setEnviado(true);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Campo label="Nome" error={errors.nome?.message}>
        <input {...register("nome")} className={inputClass} placeholder="Seu nome completo" />
      </Campo>
      <div className="grid sm:grid-cols-2 gap-5">
        <Campo label="Telefone" error={errors.telefone?.message}>
          <input {...register("telefone")} className={inputClass} placeholder="(48) 99999-9999" />
        </Campo>
        <Campo label="E-mail" error={errors.email?.message}>
          <input {...register("email")} className={inputClass} placeholder="voce@email.com" />
        </Campo>
      </div>
      <Campo label="Assunto" error={errors.assunto?.message}>
        <select {...register("assunto")} className={inputClass} defaultValue="">
          <option value="" disabled>Selecione um assunto</option>
          {assuntosViajante.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </Campo>
      <AnimatePresence>
        {assunto === "Outros" && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <Campo label="Sua mensagem" error={errors.mensagem?.message}>
              <textarea {...register("mensagem")} rows={4} className={inputClass} placeholder="Conte-nos como podemos ajudar" />
            </Campo>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3.5 bg-sc-blue text-sc-offwhite text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors disabled:opacity-60"
      >
        Enviar pelo WhatsApp
      </button>
      {enviado && <p className="text-sm text-sc-green">Sua mensagem foi preparada no WhatsApp. Obrigado!</p>}
    </form>
  );
}

function FormEmpresa() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContatoEmpresaInput>({ resolver: zodResolver(contatoEmpresaSchema) });
  const assunto = watch("assunto");
  const [enviado, setEnviado] = useState(false);

  async function onSubmit(data: ContatoEmpresaInput) {
    await fetch("/api/contato", { method: "POST", body: JSON.stringify({ tipo: "empresa", ...data }) }).catch(() => {});
    abrirWhatsApp(montarMensagemEmpresa(data));
    setEnviado(true);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Campo label="Nome do responsável" error={errors.responsavel?.message}>
          <input {...register("responsavel")} className={inputClass} placeholder="Seu nome completo" />
        </Campo>
        <Campo label="Nome da empresa" error={errors.empresa?.message}>
          <input {...register("empresa")} className={inputClass} placeholder="Razão social ou nome fantasia" />
        </Campo>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Campo label="Telefone" error={errors.telefone?.message}>
          <input {...register("telefone")} className={inputClass} placeholder="(48) 99999-9999" />
        </Campo>
        <Campo label="E-mail" error={errors.email?.message}>
          <input {...register("email")} className={inputClass} placeholder="contato@empresa.com" />
        </Campo>
      </div>
      <Campo label="Assunto" error={errors.assunto?.message}>
        <select {...register("assunto")} className={inputClass} defaultValue="">
          <option value="" disabled>Selecione um assunto</option>
          {assuntosEmpresa.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </Campo>
      <AnimatePresence>
        {assunto === "Outros" && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <Campo label="Sua mensagem" error={errors.mensagem?.message}>
              <textarea {...register("mensagem")} rows={4} className={inputClass} placeholder="Conte-nos sobre sua empresa" />
            </Campo>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3.5 bg-sc-blue text-sc-offwhite text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors disabled:opacity-60"
      >
        Enviar pelo WhatsApp
      </button>
      {enviado && <p className="text-sm text-sc-green">Sua mensagem foi preparada no WhatsApp. Obrigado!</p>}
    </form>
  );
}

export function CentralDuvidas() {
  const [tipo, setTipo] = useState<Tipo>("viajante");

  return (
    <section id="duvidas" className="relative py-28 bg-sc-offwhite">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <SectionHeading eyebrow="Estamos Aqui" title="Central de Dúvidas" />

        <div className="mt-12 bg-white border border-sc-blue/10 shadow-premium p-7 sm:p-10">
          <div className="flex gap-2 p-1 bg-sc-offwhite border border-sc-blue/10 mb-8">
            {(["viajante", "empresa"] as Tipo[]).map((t) => (
              <button
                key={t}
                onClick={() => setTipo(t)}
                className={`flex-1 py-3 text-sm uppercase tracking-widest2 transition-colors duration-300 ${
                  tipo === t ? "bg-sc-blue text-sc-offwhite" : "text-sc-blue/60 hover:text-sc-blue"
                }`}
              >
                {t === "viajante" ? "Viajante" : "Empresa Parceira"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tipo}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tipo === "viajante" ? <FormViajante /> : <FormEmpresa />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
