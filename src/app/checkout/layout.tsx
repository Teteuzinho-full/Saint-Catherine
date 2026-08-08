import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — Adquira seu Passaporte",
  description:
    "Finalize a aquisição do seu Passaporte Premium Saint Catherine. Sem login, com atendimento personalizado via WhatsApp.",
  alternates: { canonical: "/checkout" },
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
