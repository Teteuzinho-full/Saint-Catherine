# Saint Catherine — Passaporte Premium de Santa Catarina

Site editorial premium para venda do Passaporte Saint Catherine, construído com
Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion, Swiper.js,
React Hook Form e Zod.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
  app/                 → páginas (App Router)
    api/                → rotas de backend (contato, checkout)
    checkout/            → fluxo de compra sem login
    politica-de-*/        → páginas LGPD
  components/          → componentes de UI
    checkout/            → formulário multi-etapas do checkout
  data/                → dados estáticos (destinos, regiões, parceiros)
  lib/                 → validações Zod, integração ViaCEP, WhatsApp, CPF
public/
  assets/              → imagens originais do projeto (logo, passaporte, adesivo, whatsapp)
  mapa/                → SVG original do mapa de Santa Catarina (não alterado)
```

## Pontos de atenção antes do lançamento

1. **Imagens dos destinos**: atualmente usam placeholders do Unsplash. Substitua
   por fotografia autoral/licenciada em `src/data/destinos.ts`.
2. **Número do WhatsApp**: definido em `src/lib/whatsapp.ts` (`WHATSAPP_NUMERO`).
   Atualize para o número oficial.
3. **Frete**: o valor em `src/components/checkout/CheckoutForm.tsx`
   (`FRETE_PADRAO`) é um placeholder. A estrutura já está pronta para integração
   com Correios/Melhor Envio.
4. **Banco de dados**: as rotas `/api/contato` e `/api/checkout` validam os
   dados com Zod e retornam sucesso, mas ainda não persistem em banco. Há
   comentários `TODO` indicando onde conectar Prisma/Postgres ou outro banco.
5. **Domínio**: atualize `siteUrl` em `src/app/layout.tsx` e `src/app/sitemap.ts`
   para o domínio real antes de publicar.
