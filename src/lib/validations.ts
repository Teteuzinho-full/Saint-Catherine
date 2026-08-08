import { z } from "zod";
import { cpfValido } from "./cpf";

const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
const telefoneRegex = /^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/;
const cepRegex = /^\d{5}-?\d{3}$/;

export const nomeSchema = z
  .string()
  .min(3, "Informe o nome completo")
  .regex(nomeRegex, "O nome deve conter apenas letras");

export const telefoneSchema = z
  .string()
  .min(10, "Telefone inválido")
  .regex(telefoneRegex, "Informe um telefone brasileiro válido");

export const emailSchema = z.string().email("Informe um e-mail válido");

export const cepSchema = z
  .string()
  .regex(cepRegex, "CEP inválido. Use o formato 00000-000");

export const cpfSchema = z
  .string()
  .refine((v) => cpfValido(v), "CPF inválido");

export const dataNascimentoSchema = z
  .string()
  .refine((v) => !Number.isNaN(Date.parse(v)), "Data inválida")
  .refine((v) => {
    const data = new Date(v);
    const hoje = new Date();
    return data < hoje && data.getFullYear() > 1900;
  }, "Informe uma data de nascimento válida");

// ---------- Central de Dúvidas: Viajante ----------
export const assuntosViajante = [
  "Como funciona a compra?",
  "Comprei o passaporte e agora?",
  "Quero meu adesivo",
  "Quanto tempo leva para receber meu passaporte ou adesivo?",
  "Outros",
] as const;

export const contatoViajanteSchema = z.object({
  nome: nomeSchema,
  telefone: telefoneSchema,
  email: emailSchema,
  assunto: z.enum(assuntosViajante),
  mensagem: z.string().optional(),
}).refine(
  (data) => data.assunto !== "Outros" || (data.mensagem && data.mensagem.trim().length > 5),
  { message: "Descreva sua dúvida", path: ["mensagem"] }
);

export type ContatoViajanteInput = z.infer<typeof contatoViajanteSchema>;

// ---------- Central de Dúvidas: Empresa ----------
export const assuntosEmpresa = [
  "Como me torno uma empresa parceira?",
  "Quero anunciar meu hotel",
  "Outros",
] as const;

export const contatoEmpresaSchema = z.object({
  responsavel: nomeSchema,
  empresa: z.string().min(2, "Informe o nome da empresa"),
  telefone: telefoneSchema,
  email: emailSchema,
  assunto: z.enum(assuntosEmpresa),
  mensagem: z.string().optional(),
}).refine(
  (data) => data.assunto !== "Outros" || (data.mensagem && data.mensagem.trim().length > 5),
  { message: "Descreva sua solicitação", path: ["mensagem"] }
);

export type ContatoEmpresaInput = z.infer<typeof contatoEmpresaSchema>;

// ---------- Checkout ----------
export const participanteSchema = z.object({
  nomeCompleto: nomeSchema,
  dataNascimento: dataNascimentoSchema,
  cpf: cpfSchema,
});

export const compradorSchema = z.object({
  nomeCompleto: nomeSchema,
  dataNascimento: dataNascimentoSchema,
  cpf: cpfSchema,
  cep: cepSchema,
  rua: z.string().min(2, "Informe a rua"),
  numero: z.string().min(1, "Informe o número"),
  complemento: z.string().optional(),
  bairro: z.string().min(2, "Informe o bairro"),
  cidade: z.string().min(2, "Informe a cidade"),
  estado: z.string().min(2, "Informe o estado"),
  email: emailSchema,
  telefone: telefoneSchema,
});

export const formaPagamentoSchema = z.enum(["PIX", "Cartão", "Boleto"]);

export const checkoutSchema = z.object({
  comprador: compradorSchema,
  quantidade: z.number().min(1).max(10),
  participantesAdicionais: z.array(participanteSchema),
  formaPagamento: formaPagamentoSchema,
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type ParticipanteInput = z.infer<typeof participanteSchema>;
export type CompradorInput = z.infer<typeof compradorSchema>;
