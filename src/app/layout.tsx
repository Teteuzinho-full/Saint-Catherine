import type { Metadata } from "next";
import "./globals.css";
import { ConsentGate } from "@/components/ConsentGate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const siteUrl = "https://www.saintcatherine.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saint Catherine | Passaporte Premium de Santa Catarina",
    template: "%s | Saint Catherine",
  },
  description:
    "O Passaporte Saint Catherine é uma coleção exclusiva de experiências, benefícios e memórias por Santa Catarina. Edição limitada, para quem viaja como poucos conseguem.",
  keywords: [
    "Saint Catherine",
    "passaporte premium",
    "turismo Santa Catarina",
    "passaporte de viagem",
    "experiências exclusivas SC",
    "turismo de luxo Brasil",
  ],
  authors: [{ name: "Saint Catherine" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Saint Catherine",
    title: "Saint Catherine | Passaporte Premium de Santa Catarina",
    description:
      "Descubra Santa Catarina como poucos conseguem. Um passaporte premium criado para colecionar experiências exclusivas.",
    images: [
      {
        url: "/assets/passaporte.png",
        width: 1456,
        height: 816,
        alt: "Passaporte Premium Saint Catherine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saint Catherine | Passaporte Premium de Santa Catarina",
    description:
      "Um passaporte premium criado para colecionar experiências, benefícios exclusivos e memórias inesquecíveis.",
    images: ["/assets/passaporte.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Saint Catherine",
  url: siteUrl,
  logo: `${siteUrl}/assets/menu.webp`,
  description:
    "Saint Catherine cria o Passaporte Premium de Santa Catarina, uma coleção exclusiva de experiências e benefícios turísticos.",
  sameAs: [],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Passaporte Premium Saint Catherine",
  description:
    "Edição exclusiva e colecionável que reúne benefícios, experiências e parceiros selecionados em Santa Catarina.",
  image: `${siteUrl}/assets/passaporte.png`,
  brand: { "@type": "Brand", name: "Saint Catherine" },
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: "189.90",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}/checkout`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="font-body bg-sc-offwhite text-sc-blue antialiased">
        <ConsentGate>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ConsentGate>
      </body>
    </html>
  );
}
