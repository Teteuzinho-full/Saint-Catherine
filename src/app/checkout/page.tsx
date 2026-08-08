import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="pt-28 pb-24 bg-sc-offwhite min-h-screen">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="ornament-divider text-xs uppercase tracking-widest2 text-sc-gold mb-4">
            Sem Login &middot; Atendimento Personalizado
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-sc-blue">
            Finalize sua Aquisição
          </h1>
          <p className="mt-4 text-sc-blue/60 max-w-xl mx-auto">
            Preencha os dados abaixo. O pagamento será finalizado pelo WhatsApp
            após a conferência das informações.
          </p>
        </div>
        <CheckoutForm />
      </div>
    </div>
  );
}
