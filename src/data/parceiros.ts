export type Parceiro = {
  id: string;
  nome: string;
  categoria: "Hotel" | "Restaurante" | "Passeio" | "Experiência" | "Atrativo Turístico";
  cidade: string;
  descricao: string;
  beneficio: string;
};

// Estrutura preparada para futura integração com API/CMS de parceiros.
export const parceiros: Parceiro[] = [
  {
    id: "p1",
    nome: "Pousada Vista Serrana",
    categoria: "Hotel",
    cidade: "Urubici",
    descricao: "Hospedagem boutique com vista para os Aparados da Serra.",
    beneficio: "15% de desconto para portadores do Passaporte",
  },
  {
    id: "p2",
    nome: "Cantina Villa Itália",
    categoria: "Restaurante",
    cidade: "Urussanga",
    descricao: "Gastronomia italiana autêntica em vinícola centenária.",
    beneficio: "Harmonização exclusiva de boas-vindas",
  },
  {
    id: "p3",
    nome: "Náutica Baía Sul",
    categoria: "Passeio",
    cidade: "Florianópolis",
    descricao: "Passeios de escuna pela Ponte Hercílio Luz e ilhas da baía.",
    beneficio: "Embarque prioritário para membros",
  },
  {
    id: "p4",
    nome: "Ateliê do Enxaimel",
    categoria: "Experiência",
    cidade: "Pomerode",
    descricao: "Imersão na arquitetura e tradição germânica centenária.",
    beneficio: "Adesivo comemorativo exclusivo",
  },
  {
    id: "p5",
    nome: "Mirante Rio do Rastro",
    categoria: "Atrativo Turístico",
    cidade: "Bom Jardim da Serra",
    descricao: "Acesso VIP aos melhores pontos panorâmicos da serra.",
    beneficio: "Acesso antecipado antes da abertura ao público",
  },
  {
    id: "p6",
    nome: "Spa Águas de Santa Catarina",
    categoria: "Experiência",
    cidade: "Praia do Rosa",
    descricao: "Bem-estar frente ao mar, com rituais inspirados na Mata Atlântica.",
    beneficio: "Upgrade de experiência sem custo adicional",
  },
];
