// Número oficial do Saint Catherine no WhatsApp (substituir pelo número real em produção).
export const WHATSAPP_NUMERO = "5548999999999";

export function abrirWhatsApp(mensagem: string, numero: string = WHATSAPP_NUMERO) {
  const texto = encodeURIComponent(mensagem);
  const url = `https://wa.me/${numero}?text=${texto}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function montarMensagemViajante(input: {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem?: string;
}) {
  return [
    "*Saint Catherine — Central de Dúvidas*",
    "Tipo de contato: Viajante",
    `Nome: ${input.nome}`,
    `E-mail: ${input.email}`,
    `Telefone: ${input.telefone}`,
    `Assunto: ${input.assunto}`,
    input.mensagem ? `Mensagem: ${input.mensagem}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function montarMensagemEmpresa(input: {
  responsavel: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem?: string;
}) {
  return [
    "*Saint Catherine — Central de Dúvidas*",
    "Tipo de contato: Empresa Parceira",
    `Nome do responsável: ${input.responsavel}`,
    `Empresa: ${input.empresa}`,
    `E-mail: ${input.email}`,
    `Telefone: ${input.telefone}`,
    `Assunto: ${input.assunto}`,
    input.mensagem ? `Mensagem: ${input.mensagem}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function montarMensagemCheckout(input: {
  comprador: {
    nomeCompleto: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  quantidade: number;
  participantesAdicionais: { nomeCompleto: string; cpf: string; dataNascimento: string }[];
  formaPagamento: string;
  valorUnitario: number;
  frete: number;
}) {
  const { comprador, quantidade, participantesAdicionais, formaPagamento, valorUnitario, frete } = input;
  const total = valorUnitario * quantidade + frete;

  const linhasParticipantes = participantesAdicionais
    .map(
      (p, i) =>
        `  ${i + 2}ª pessoa: ${p.nomeCompleto} — CPF ${p.cpf} — Nasc. ${p.dataNascimento}`
    )
    .join("\n");

  return [
    "*Saint Catherine — Novo Pedido de Passaporte Premium*",
    "",
    "*Comprador*",
    `Nome: ${comprador.nomeCompleto}`,
    `CPF: ${comprador.cpf}`,
    `Nascimento: ${comprador.dataNascimento}`,
    `E-mail: ${comprador.email}`,
    `Telefone: ${comprador.telefone}`,
    "",
    "*Endereço de Entrega*",
    `${comprador.rua}, ${comprador.numero}${comprador.complemento ? " - " + comprador.complemento : ""}`,
    `${comprador.bairro} — ${comprador.cidade}/${comprador.estado}`,
    `CEP: ${comprador.cep}`,
    "",
    `*Quantidade de Passaportes:* ${quantidade}`,
    participantesAdicionais.length > 0 ? "*Demais participantes:*" : "",
    linhasParticipantes,
    "",
    `*Frete:* R$ ${frete.toFixed(2).replace(".", ",")}`,
    `*Forma de Pagamento:* ${formaPagamento}`,
    `*Valor Total:* R$ ${total.toFixed(2).replace(".", ",")}`,
    "",
    "_Pagamento a ser finalizado via WhatsApp após conferência dos dados._",
  ]
    .filter(Boolean)
    .join("\n");
}
