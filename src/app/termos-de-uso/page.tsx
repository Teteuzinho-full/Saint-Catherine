import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do site e dos serviços do Saint Catherine.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoPage() {
  return (
    <LegalLayout title="Termos de Uso" updated="Agosto de 2026">
      <p>
        Ao acessar e utilizar o site Saint Catherine, você concorda com os termos e
        condições descritos a seguir. Caso não concorde, recomendamos não continuar
        a navegação.
      </p>

      <h2>1. Sobre o Passaporte Saint Catherine</h2>
      <p>
        O Passaporte Saint Catherine é um produto colecionável de edição exclusiva,
        que oferece acesso a benefícios em estabelecimentos parceiros selecionados.
        A disponibilidade de benefícios pode variar conforme o parceiro e a região.
      </p>

      <h2>2. Compra e pagamento</h2>
      <p>
        As compras realizadas pelo site são finalizadas via WhatsApp, após a
        conferência dos dados informados no checkout. Os preços exibidos estão
        sujeitos a alteração sem aviso prévio até a confirmação do pedido.
      </p>

      <h2>3. Uso do site</h2>
      <p>
        É vedado o uso do site para fins ilícitos, fraudulentos ou que violem
        direitos de terceiros. O Saint Catherine reserva-se o direito de suspender
        o acesso de usuários que descumprirem estes termos.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo do site — textos, imagens, identidade visual e marca Saint
        Catherine — é protegido por direitos autorais e não pode ser reproduzido
        sem autorização prévia.
      </p>

      <h2>5. Limitação de responsabilidade</h2>
      <p>
        O Saint Catherine atua como curador e intermediário de experiências
        turísticas, não sendo responsável direto pela prestação dos serviços
        oferecidos por parceiros terceiros.
      </p>

      <h2>6. Alterações destes termos</h2>
      <p>
        Estes termos podem ser atualizados periodicamente. A versão vigente estará
        sempre disponível nesta página.
      </p>
    </LegalLayout>
  );
}
