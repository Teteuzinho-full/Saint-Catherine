export type PontoTuristico = [nome: string, cidade: string];

// Cores extraídas diretamente do arquivo mapa_regioes_sc.svg original (não alterado).
export const coresRegioes: Record<string, string> = {
  "Oeste Catarinense": "#e07a5f",
  "Norte Catarinense": "#3d5a80",
  Serrana: "#81b29a",
  "Vale do Itajaí": "#f2cc8f",
  "Grande Florianópolis": "#9b5de5",
  "Sul Catarinense": "#f4a261",
};

export const pontosTuristicos: Record<string, PontoTuristico[]> = {
  "Grande Florianópolis": [
    ["Lagoa da Conceição", "Florianópolis"],
    ["Praia da Joaquina", "Florianópolis"],
    ["Centro Histórico / Mercado Público", "Florianópolis"],
    ["Praia da Pinheira", "Palhoça"],
    ["Praia de Ganchos", "Governador Celso Ramos"],
  ],
  "Vale do Itajaí": [
    ["Vila Germânica", "Blumenau"],
    ["Praia Central", "Balneário Camboriú"],
    ["Beto Carrero World", "Penha"],
    ["Museu Nacional de Imigração", "Joinville / Blumenau"],
    ["Rota do Enxaimel", "Pomerode"],
  ],
  "Norte Catarinense": [
    ["Festa das Flores", "Joinville"],
    ["Centro Histórico e Praias", "São Francisco do Sul"],
    ["Praia Grande", "Itapoá"],
    ["Museu Nacional de Imigração e Colonização", "Joinville"],
    ["Serra Dona Francisca", "São Bento do Sul"],
  ],
  Serrana: [
    ["Neve e vinícolas de altitude", "São Joaquim"],
    ["Cachoeira do Avencal", "Urubici"],
    ["Morro da Igreja / Pedra Furada", "Urubici"],
    ["Centro Histórico e Museu Thiago de Castro", "Lages"],
    ["Serra do Corvo Branco", "Bom Jardim da Serra"],
  ],
  "Oeste Catarinense": [
    ["Parque das Nações / Festa Nacional do Colono", "Chapecó"],
    ["Complexo Turístico Termas de Piratuba", "Piratuba"],
    ["Fenachama (Festa Nacional do Chimarrão)", "Xanxerê"],
    ["Roteiro da Fronteira", "São Miguel do Oeste"],
    ["Museu Histórico Municipal", "Concórdia"],
  ],
  "Sul Catarinense": [
    ["Praia do Rosa", "Imbituba / Garopaba"],
    ["Centro Histórico e Lagoa de Santo Antônio", "Laguna"],
    ["Museu do Carvão", "Criciúma"],
    ["Vinícolas e Cantinas Italianas", "Urussanga"],
    ["Farol de Santa Marta", "Laguna"],
  ],
};
