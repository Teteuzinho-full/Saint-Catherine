import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Entenda como o Saint Catherine utiliza cookies para melhorar sua experiência de navegação.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaDeCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updated="Agosto de 2026">
      <p>
        Cookies são pequenos arquivos armazenados no seu navegador que ajudam a
        melhorar sua experiência de navegação. O Saint Catherine utiliza cookies
        próprios e, eventualmente, de terceiros, para os fins descritos abaixo.
      </p>

      <h2>1. Cookies essenciais</h2>
      <p>
        Necessários para o funcionamento básico do site, como o registro do seu
        consentimento com os Termos de Uso e a Política de Privacidade.
      </p>

      <h2>2. Cookies de desempenho</h2>
      <p>
        Utilizados para entender como os visitantes interagem com o site,
        permitindo melhorias contínuas de performance e usabilidade.
      </p>

      <h2>3. Cookies de funcionalidade</h2>
      <p>
        Armazenam preferências de navegação para tornar sua próxima visita mais
        conveniente.
      </p>

      <h2>4. Como gerenciar cookies</h2>
      <p>
        Você pode gerenciar ou desativar cookies diretamente nas configurações do
        seu navegador. Note que a desativação de cookies essenciais pode afetar o
        funcionamento do site.
      </p>

      <h2>5. Consentimento</h2>
      <p>
        Ao aceitar nossos termos no modal de boas-vindas, você consente com o uso
        de cookies conforme descrito nesta política.
      </p>
    </LegalLayout>
  );
}
