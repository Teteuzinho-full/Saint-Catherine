import { Hero } from "@/components/Hero";
import { Exclusividade } from "@/components/Exclusividade";
import { PassaporteSection } from "@/components/PassaporteSection";
import { AdesivosSection } from "@/components/AdesivosSection";
import { DestinosCarousel } from "@/components/DestinosCarousel";
import { MapaInterativo } from "@/components/MapaInterativo";
import { Parceiros } from "@/components/Parceiros";
import { PrecoSection } from "@/components/PrecoSection";
import { CentralDuvidas } from "@/components/CentralDuvidas";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona a compra do Passaporte Saint Catherine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A compra é feita pelo site, sem necessidade de login. Após preencher os dados no checkout, o pedido é finalizado e o pagamento confirmado via WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "Como funcionam os adesivos colecionáveis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ao visitar atrações participantes, o viajante recebe adesivos exclusivos para colar no passaporte, registrando sua jornada por Santa Catarina.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para receber o passaporte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O prazo de entrega varia conforme a região e a modalidade de frete escolhida, sendo informado durante a finalização do pedido.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Saint Catherine",
  image: "https://www.saintcatherine.com.br/assets/menu.webp",
  address: {
    "@type": "PostalAddress",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: "Santa Catarina, Brasil",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <Exclusividade />
      <PassaporteSection />
      <AdesivosSection />
      <DestinosCarousel />
      <MapaInterativo />
      <Parceiros />
      <PrecoSection />
      <CentralDuvidas />
    </>
  );
}
