import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Direitos do Titular",
  description: "Conheça seus direitos como titular de dados pessoais, conforme a LGPD, junto ao Saint Catherine.",
  alternates: { canonical: "/direitos-do-titular" },
};

export default function DireitosDoTitularPage() {
  return (
    <LegalLayout title="Direitos do Titular" updated="Agosto de 2026">
      <p>
        A Lei Geral de Proteção de Dados (LGPD) garante aos titulares de dados
        pessoais uma série de direitos. No Saint Catherine, você pode exercer:
      </p>

      <ul>
        <li>Confirmação da existência de tratamento de dados;</li>
        <li>Acesso aos dados pessoais tratados;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
        <li>Eliminação dos dados tratados com consentimento;</li>
        <li>Informação sobre entidades públicas e privadas com quem compartilhamos dados;</li>
        <li>Revogação do consentimento a qualquer momento.</li>
      </ul>

      <h2>Como exercer seus direitos</h2>
      <p>
        Para exercer qualquer um desses direitos, entre em contato pela nossa
        Central de Dúvidas. Nossa equipe responderá dentro dos prazos previstos
        pela legislação.
      </p>
    </LegalLayout>
  );
}
