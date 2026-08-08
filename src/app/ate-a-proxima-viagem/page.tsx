import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Até a Próxima Viagem",
  robots: { index: false, follow: false },
};

export default function AteAProximaViagemPage() {
  return (
    <div className="min-h-screen bg-sc-blue flex items-center justify-center px-6 text-center">
      <div>
        <Image
          src="/assets/menu.webp"
          alt="Saint Catherine"
          width={72}
          height={72}
          className="mx-auto h-16 w-16 object-contain mb-8 opacity-80"
        />
        <p className="ornament-divider text-xs uppercase tracking-widest2 text-sc-gold mb-6">
          Saint Catherine
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-sc-offwhite max-w-lg mx-auto leading-relaxed">
          Agradecemos a sua visita.
        </h1>
        <p className="mt-4 text-sc-offwhite/60 max-w-md mx-auto leading-relaxed">
          Devido ao não aceite dos nossos termos, nos encontraremos em outra viagem.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block px-8 py-3 border border-sc-gold/50 text-sc-gold text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
