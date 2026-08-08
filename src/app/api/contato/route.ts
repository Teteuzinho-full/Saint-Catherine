import { NextRequest, NextResponse } from "next/server";
import { contatoEmpresaSchema, contatoViajanteSchema } from "@/lib/validations";

// Estrutura preparada para persistência futura (ex: Postgres/Prisma).
// No momento, apenas valida e confirma o recebimento — o envio real
// acontece via WhatsApp no client.
export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const { tipo, ...rest } = body ?? {};

  const schema = tipo === "empresa" ? contatoEmpresaSchema : contatoViajanteSchema;
  const parsed = schema.safeParse(rest);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // TODO: persistir em banco de dados quando disponível.
  return NextResponse.json({ ok: true });
}
