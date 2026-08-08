"use client";

import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckoutInput, checkoutSchema } from "@/lib/validations";
import { buscarEnderecoPorCep } from "@/lib/cep";
import { formatarCpf } from "@/lib/cpf";
import { abrirWhatsApp, montarMensagemCheckout } from "@/lib/whatsapp";

const VALOR_UNITARIO = 189.9;
const FRETE_PADRAO = 24.9; // placeholder — estrutura preparada para Correios/Melhor Envio

const inputClass =
  "w-full border border-sc-blue/20 bg-white px-4 py-3 text-sc-blue placeholder:text-sc-blue/30 focus:outline-none focus:border-sc-gold transition-colors";

function Campo({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-widest2 text-sc-blue/60">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-sc-red">{error}</span>}
    </label>
  );
}

const steps = ["Comprador", "Participantes", "Entrega & Pagamento", "Resumo"];

export function CheckoutForm() {
  const [step, setStep] = useState(0);
  const [buscandoCep, setBuscandoCep] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CheckoutInput>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      comprador: {
        nomeCompleto: "",
        dataNascimento: "",
        cpf: "",
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        email: "",
        telefone: "",
      },
      quantidade: 1,
      participantesAdicionais: [],
      formaPagamento: "PIX",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "participantesAdicionais",
  });

  const quantidade = watch("quantidade");
  const formaPagamento = watch("formaPagamento");

  function ajustarQuantidade(valor: number) {
    const nova = Math.min(10, Math.max(1, valor));
    setValue("quantidade", nova);
    const diff = nova - 1 - fields.length;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) append({ nomeCompleto: "", dataNascimento: "", cpf: "" });
    } else if (diff < 0) {
      for (let i = 0; i < -diff; i++) remove(fields.length - 1);
    }
  }

  async function onCepBlur(e: React.FocusEvent<HTMLInputElement>) {
    const cep = e.target.value;
    setBuscandoCep(true);
    const endereco = await buscarEnderecoPorCep(cep);
    if (endereco) {
      setValue("comprador.rua", endereco.logradouro, { shouldValidate: true });
      setValue("comprador.bairro", endereco.bairro, { shouldValidate: true });
      setValue("comprador.cidade", endereco.localidade, { shouldValidate: true });
      setValue("comprador.estado", endereco.uf, { shouldValidate: true });
    }
    setBuscandoCep(false);
  }

  async function avancar() {
    let campos: any[] = [];
    if (step === 0) {
      campos = [
        "comprador.nomeCompleto",
        "comprador.dataNascimento",
        "comprador.cpf",
        "comprador.cep",
        "comprador.rua",
        "comprador.numero",
        "comprador.bairro",
        "comprador.cidade",
        "comprador.estado",
        "comprador.email",
        "comprador.telefone",
      ];
    } else if (step === 1) {
      campos = fields.map((_, i) => [
        `participantesAdicionais.${i}.nomeCompleto`,
        `participantesAdicionais.${i}.dataNascimento`,
        `participantesAdicionais.${i}.cpf`,
      ]).flat();
    }
    const valido = campos.length === 0 ? true : await trigger(campos as any);
    if (valido) setStep((s) => Math.min(steps.length - 1, s + 1));
  }

  function voltar() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function onSubmit(data: CheckoutInput) {
    await fetch("/api/checkout", { method: "POST", body: JSON.stringify(data) }).catch(() => {});
    abrirWhatsApp(
      montarMensagemCheckout({
        comprador: data.comprador,
        quantidade: data.quantidade,
        participantesAdicionais: data.participantesAdicionais,
        formaPagamento: data.formaPagamento,
        valorUnitario: VALOR_UNITARIO,
        frete: FRETE_PADRAO,
      })
    );
  }

  const total = VALOR_UNITARIO * quantidade + FRETE_PADRAO;

  return (
    <div>
      {/* Indicador de etapas */}
      <div className="flex items-center justify-between mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex-1 flex items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`h-9 w-9 rounded-full flex items-center justify-center text-sm border transition-colors ${
                  i <= step ? "bg-sc-blue text-sc-offwhite border-sc-blue" : "border-sc-blue/20 text-sc-blue/40"
                }`}
              >
                {i + 1}
              </div>
              <span className={`mt-2 text-[11px] uppercase tracking-wide text-center ${i <= step ? "text-sc-blue" : "text-sc-blue/40"}`}>
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-px flex-1 -mt-6 ${i < step ? "bg-sc-blue" : "bg-sc-blue/15"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-sc-blue/10 shadow-premium p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-5">
              <h2 className="font-display text-2xl text-sc-blue mb-2">Dados do Comprador</h2>

              <Campo label="Nome Completo" error={errors.comprador?.nomeCompleto?.message}>
                <input {...register("comprador.nomeCompleto")} className={inputClass} placeholder="Nome completo" />
              </Campo>

              <div className="grid sm:grid-cols-2 gap-5">
                <Campo label="Data de Nascimento" error={errors.comprador?.dataNascimento?.message}>
                  <input type="date" {...register("comprador.dataNascimento")} className={inputClass} />
                </Campo>
                <Campo label="CPF" error={errors.comprador?.cpf?.message}>
                  <input
                    {...register("comprador.cpf")}
                    onChange={(e) => setValue("comprador.cpf", formatarCpf(e.target.value))}
                    className={inputClass}
                    placeholder="000.000.000-00"
                    maxLength={14}
                  />
                </Campo>
              </div>

              <div className="grid sm:grid-cols-[1fr_auto] gap-5 items-end">
                <Campo label="CEP" error={errors.comprador?.cep?.message}>
                  <input
                    {...register("comprador.cep")}
                    onBlur={onCepBlur}
                    className={inputClass}
                    placeholder="00000-000"
                  />
                </Campo>
                {buscandoCep && <span className="text-xs text-sc-blue/50 pb-3">Buscando endereço…</span>}
              </div>

              <div className="grid sm:grid-cols-[2fr_1fr] gap-5">
                <Campo label="Rua" error={errors.comprador?.rua?.message}>
                  <input {...register("comprador.rua")} className={inputClass} placeholder="Rua / Avenida" />
                </Campo>
                <Campo label="Número" error={errors.comprador?.numero?.message}>
                  <input {...register("comprador.numero")} className={inputClass} placeholder="Nº" />
                </Campo>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Campo label="Complemento" error={errors.comprador?.complemento?.message}>
                  <input {...register("comprador.complemento")} className={inputClass} placeholder="Apto, bloco, referência (opcional)" />
                </Campo>
                <Campo label="Bairro" error={errors.comprador?.bairro?.message}>
                  <input {...register("comprador.bairro")} className={inputClass} placeholder="Bairro" />
                </Campo>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Campo label="Cidade" error={errors.comprador?.cidade?.message}>
                  <input {...register("comprador.cidade")} className={inputClass} placeholder="Cidade" />
                </Campo>
                <Campo label="Estado" error={errors.comprador?.estado?.message}>
                  <input {...register("comprador.estado")} className={inputClass} placeholder="UF" maxLength={2} />
                </Campo>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Campo label="E-mail" error={errors.comprador?.email?.message}>
                  <input {...register("comprador.email")} className={inputClass} placeholder="voce@email.com" />
                </Campo>
                <Campo label="Telefone" error={errors.comprador?.telefone?.message}>
                  <input {...register("comprador.telefone")} className={inputClass} placeholder="(48) 99999-9999" />
                </Campo>
              </div>

              <Campo label="Quantidade de Passaportes">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => ajustarQuantidade(quantidade - 1)}
                    className="h-11 w-11 border border-sc-blue/20 text-sc-blue hover:border-sc-gold hover:text-sc-gold transition-colors"
                  >
                    −
                  </button>
                  <span className="font-display text-2xl w-8 text-center">{quantidade}</span>
                  <button
                    type="button"
                    onClick={() => ajustarQuantidade(quantidade + 1)}
                    className="h-11 w-11 border border-sc-blue/20 text-sc-blue hover:border-sc-gold hover:text-sc-gold transition-colors"
                  >
                    +
                  </button>
                  <span className="text-xs text-sc-blue/50">Cada passaporte é único e numerado individualmente.</span>
                </div>
              </Campo>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-8">
              <h2 className="font-display text-2xl text-sc-blue mb-2">Demais Participantes</h2>
              {fields.length === 0 ? (
                <p className="text-sc-blue/60 text-sm">
                  Você selecionou 1 passaporte — não há participantes adicionais.
                </p>
              ) : (
                fields.map((field, i) => (
                  <div key={field.id} className="border border-sc-blue/10 p-5">
                    <p className="text-sm uppercase tracking-widest2 text-sc-gold mb-4">
                      {i + 2}ª Pessoa
                    </p>
                    <div className="space-y-4">
                      <Campo
                        label="Nome Completo"
                        error={errors.participantesAdicionais?.[i]?.nomeCompleto?.message}
                      >
                        <input
                          {...register(`participantesAdicionais.${i}.nomeCompleto` as const)}
                          className={inputClass}
                          placeholder="Nome completo"
                        />
                      </Campo>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Campo
                          label="Data de Nascimento"
                          error={errors.participantesAdicionais?.[i]?.dataNascimento?.message}
                        >
                          <input
                            type="date"
                            {...register(`participantesAdicionais.${i}.dataNascimento` as const)}
                            className={inputClass}
                          />
                        </Campo>
                        <Campo label="CPF" error={errors.participantesAdicionais?.[i]?.cpf?.message}>
                          <input
                            {...register(`participantesAdicionais.${i}.cpf` as const)}
                            onChange={(e) =>
                              setValue(`participantesAdicionais.${i}.cpf`, formatarCpf(e.target.value))
                            }
                            className={inputClass}
                            placeholder="000.000.000-00"
                            maxLength={14}
                          />
                        </Campo>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-sc-blue mb-2">Frete</h2>
                <p className="text-sm text-sc-blue/60 leading-relaxed">
                  O frete é calculado com base no seu CEP de entrega. Estrutura
                  preparada para integração futura com Correios e Melhor Envio.
                </p>
                <div className="mt-4 flex items-center justify-between border border-sc-blue/10 px-5 py-4">
                  <span className="text-sc-blue">Envio Padrão &middot; 5 a 12 dias úteis</span>
                  <span className="font-display text-xl text-sc-blue">
                    R$ {FRETE_PADRAO.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl text-sc-blue mb-2">Forma de Pagamento</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {(["PIX", "Cartão", "Boleto"] as const).map((forma) => (
                    <label
                      key={forma}
                      className={`cursor-pointer border px-5 py-4 text-center transition-colors ${
                        formaPagamento === forma
                          ? "border-sc-gold bg-sc-gold/10 text-sc-blue"
                          : "border-sc-blue/15 text-sc-blue/60 hover:border-sc-blue/30"
                      }`}
                    >
                      <input
                        type="radio"
                        value={forma}
                        {...register("formaPagamento")}
                        className="sr-only"
                      />
                      {forma}
                    </label>
                  ))}
                </div>
                <p className="mt-4 text-xs text-sc-blue/50 leading-relaxed">
                  O pagamento será finalizado pelo WhatsApp após a conferência dos dados.
                </p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-6">
              <h2 className="font-display text-2xl text-sc-blue mb-2">Resumo do Pedido</h2>

              <div className="border border-sc-blue/10 divide-y divide-sc-blue/10 text-sm">
                <div className="flex justify-between px-5 py-3">
                  <span className="text-sc-blue/60">Comprador</span>
                  <span className="text-sc-blue text-right">{watch("comprador.nomeCompleto") || "—"}</span>
                </div>
                <div className="flex justify-between px-5 py-3">
                  <span className="text-sc-blue/60">Quantidade</span>
                  <span className="text-sc-blue">{quantidade} passaporte(s)</span>
                </div>
                <div className="flex justify-between px-5 py-3">
                  <span className="text-sc-blue/60">Endereço</span>
                  <span className="text-sc-blue text-right">
                    {watch("comprador.cidade") || "—"}/{watch("comprador.estado") || "—"}
                  </span>
                </div>
                <div className="flex justify-between px-5 py-3">
                  <span className="text-sc-blue/60">Frete</span>
                  <span className="text-sc-blue">R$ {FRETE_PADRAO.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between px-5 py-3">
                  <span className="text-sc-blue/60">Pagamento</span>
                  <span className="text-sc-blue">{formaPagamento}</span>
                </div>
                <div className="flex justify-between px-5 py-4 bg-sc-offwhite">
                  <span className="font-display text-lg text-sc-blue">Total</span>
                  <span className="font-display text-2xl text-sc-blue">
                    R$ {total.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              <p className="text-xs text-sc-blue/50 leading-relaxed">
                Ao confirmar, abriremos o WhatsApp com todos os dados preenchidos
                para finalização do pagamento e conferência das informações.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-between">
          <button
            type="button"
            onClick={voltar}
            disabled={step === 0}
            className="px-6 py-3 text-sm uppercase tracking-widest2 text-sc-blue/60 hover:text-sc-blue disabled:opacity-0"
          >
            Voltar
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={avancar}
              className="px-8 py-3.5 bg-sc-blue text-sc-offwhite text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors"
            >
              Continuar
            </button>
          ) : (
            <button
              type="submit"
              className="px-8 py-3.5 bg-sc-gold text-sc-blue text-sm uppercase tracking-widest2 hover:bg-sc-blue hover:text-sc-offwhite transition-colors"
            >
              Confirmar via WhatsApp
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
