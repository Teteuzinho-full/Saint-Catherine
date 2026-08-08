import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Exclusão de Dados",
  description: "Saiba como solicitar a exclusão dos seus dados pessoais junto ao Saint Catherine.",
  alternates: { canonical: "/exclusao-de-dados" },
};

export default function ExclusaoDeDadosPage() {
  return (
    <LegalLayout title="Exclusão de Dados" updated="Agosto de 2026">
      <p>
        Em conformidade com a LGPD, você tem o direito de solicitar a exclusão dos
        seus dados pessoais tratados pelo Saint Catherine, exceto quando houver
        obrigação legal de retenção.
      </p>

      <h2>1. Como solicitar</h2>
      <p>
        Para solicitar a exclusão dos seus dados, entre em contato através da nossa
        Central de Dúvidas, informando seu nome completo e e-mail cadastrado.
      </p>

      <h2>2. Prazo de atendimento</h2>
      <p>
        As solicitações são analisadas e respondidas em até 15 dias úteis,
        conforme prazos estabelecidos pela legislação vigente.
      </p>

      <h2>3. Exceções</h2>
      <p>
        Dados relacionados a obrigações fiscais, contratuais ou legais poderão ser
        mantidos pelo período exigido por lei, mesmo após a solicitação de
        exclusão.
      </p>

      <h2>4. Confirmação</h2>
      <p>
        Após a exclusão, você receberá uma confirmação por e-mail informando que
        seus dados foram removidos de nossas bases ativas.
      </p>
    </LegalLayout>
  );
}
