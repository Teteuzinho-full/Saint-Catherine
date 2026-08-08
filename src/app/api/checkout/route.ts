import { NextRequest, NextResponse } from "next/server";
import { checkoutSchema } from "@/lib/validations";

// Estrutura preparada para persistência futura (ex: Postgres/Prisma) e
// para integração com gateways de pagamento e frete (Correios/Melhor Envio).
// O fechamento comercial ocorre via WhatsApp após a conferência dos dados.
export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // TODO: persistir pedido em banco de dados e calcular frete real.
  return NextResponse.json({ ok: true, pedido: parsed.data });
}
