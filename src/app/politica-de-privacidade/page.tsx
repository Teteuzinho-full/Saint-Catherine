import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Saiba como o Saint Catherine coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalLayout title="Política de Privacidade" updated="Agosto de 2026">
      <p>
        Esta Política de Privacidade descreve como o Saint Catherine coleta, utiliza,
        armazena e protege os dados pessoais de seus visitantes e clientes, em
        conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>1. Dados que coletamos</h2>
      <p>
        Coletamos dados fornecidos voluntariamente por você em nossos formulários de
        contato e checkout, tais como nome, e-mail, telefone, CPF, data de nascimento
        e endereço de entrega. Também podemos coletar dados de navegação por meio de
        cookies, conforme detalhado em nossa Política de Cookies.
      </p>

      <h2>2. Finalidade do tratamento</h2>
      <ul>
        <li>Processar a compra e entrega do Passaporte Premium Saint Catherine;</li>
        <li>Responder dúvidas e solicitações enviadas pelos canais de atendimento;</li>
        <li>Cumprir obrigações legais e regulatórias;</li>
        <li>Aprimorar a experiência de navegação no site.</li>
      </ul>

      <h2>3. Compartilhamento de dados</h2>
      <p>
        Seus dados podem ser compartilhados com parceiros estritamente necessários à
        operação (como transportadoras, para fins de entrega), sempre respeitando os
        princípios de necessidade e finalidade previstos na LGPD. Não vendemos dados
        pessoais a terceiros.
      </p>

      <h2>4. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados
        contra acessos não autorizados, perda ou alteração indevida.
      </p>

      <h2>5. Seus direitos</h2>
      <p>
        Você pode solicitar acesso, correção, portabilidade ou exclusão dos seus dados
        a qualquer momento. Consulte nossa página de{" "}
        <a href="/direitos-do-titular" className="underline decoration-sc-gold text-sc-blue">
          Direitos do Titular
        </a>{" "}
        para mais informações.
      </p>

      <h2>6. Contato</h2>
      <p>
        Em caso de dúvidas sobre esta política, entre em contato pela nossa Central de
        Dúvidas, disponível na página inicial do site.
      </p>
    </LegalLayout>
  );
}
