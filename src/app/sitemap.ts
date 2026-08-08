import type { MetadataRoute } from "next";

const siteUrl = "https://www.saintcatherine.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    "",
    "/checkout",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/politica-de-cookies",
    "/exclusao-de-dados",
    "/direitos-do-titular",
    "/consentimento-lgpd",
  ];

  return rotas.map((rota) => ({
    url: `${siteUrl}${rota}`,
    lastModified: new Date(),
    changeFrequency: rota === "" ? "weekly" : "monthly",
    priority: rota === "" ? 1 : 0.6,
  }));
}
