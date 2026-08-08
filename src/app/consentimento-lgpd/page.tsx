import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Consentimento LGPD",
  description: "Entenda como o Saint Catherine registra e trata o consentimento dos usuários, conforme a LGPD.",
  alternates: { canonical: "/consentimento-lgpd" },
};

export default function ConsentimentoLgpdPage() {
  return (
    <LegalLayout title="Consentimento LGPD" updated="Agosto de 2026">
      <p>
        Ao acessar o site Saint Catherine, apresentamos um aviso de boas-vindas
        solicitando seu consentimento explícito com nossos Termos de Uso, Política
        de Privacidade e Política de Cookies.
      </p>

      <h2>1. Registro do consentimento</h2>
      <p>
        O seu consentimento é registrado localmente no seu navegador, junto com a
        data e hora da confirmação, permitindo que você navegue livremente pelo
        site.
      </p>

      <h2>2. Recusa do consentimento</h2>
      <p>
        Caso opte por não aceitar nossos termos, o acesso à navegação completa do
        site não será liberado, e você será direcionado a uma página de
        despedida.
      </p>

      <h2>3. Revogação</h2>
      <p>
        Você pode revogar seu consentimento a qualquer momento, limpando os dados
        de navegação do seu navegador para este site ou entrando em contato com
        nossa Central de Dúvidas.
      </p>

      <h2>4. Base legal</h2>
      <p>
        O tratamento de dados pessoais realizado pelo Saint Catherine tem como
        base legal o consentimento do titular (art. 7º, I, da LGPD), bem como a
        execução de contrato quando aplicável.
      </p>
    </LegalLayout>
  );
}
