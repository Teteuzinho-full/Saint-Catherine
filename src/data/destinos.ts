export type Destino = {
  id: string;
  nome: string;
  cidade: string;
  descricao: string;
  imagem: string;
};

// Imagens editoriais de referência (placeholder Unsplash — recomenda-se
// substituir por fotografia autoral/licenciada antes do lançamento oficial).
export const destinos: Destino[] = [
  {
    id: "ponte-hercilio-luz",
    nome: "Ponte Hercílio Luz",
    cidade: "Florianópolis",
    descricao:
      "O símbolo eterno da Ilha da Magia, iluminado ao entardecer sobre as águas da baía sul.",
    imagem:
      "https://images.unsplash.com/photo-1591001435487-8be7b3383860?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "serra-do-rio-do-rastro",
    nome: "Serra do Rio do Rastro",
    cidade: "Bom Jardim da Serra",
    descricao:
      "Curvas esculpidas na montanha, um dos mirantes mais dramáticos do sul do Brasil.",
    imagem:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "urubici",
    nome: "Urubici",
    cidade: "Serra Catarinense",
    descricao:
      "Altitude, neblina e cachoeiras — o refúgio alpino de Santa Catarina.",
    imagem:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "sao-joaquim",
    nome: "São Joaquim",
    cidade: "Serra Catarinense",
    descricao:
      "Vinícolas de altitude e a única neve regular do Brasil, num cenário europeu.",
    imagem:
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bombinhas",
    nome: "Bombinhas",
    cidade: "Litoral Centro-Norte",
    descricao:
      "Águas cristalinas e enseadas reservadas, o paraíso do mergulho catarinense.",
    imagem:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "balneario-camboriu",
    nome: "Balneário Camboriú",
    cidade: "Litoral Norte",
    descricao:
      "O skyline mais cintilante do sul do Brasil, entre a serra e o mar.",
    imagem:
      "https://images.unsplash.com/photo-1580128637411-7b4d4b8bcb90?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "pomerode",
    nome: "Pomerode",
    cidade: "Vale do Itajaí",
    descricao:
      "A cidade mais germânica do Brasil, entre enxaimeis e tradição centenária.",
    imagem:
      "https://images.unsplash.com/photo-1520271348391-049dd132bd7c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "blumenau",
    nome: "Blumenau",
    cidade: "Vale do Itajaí",
    descricao:
      "Arquitetura enxaimel, cultura germânica viva e a maior Oktoberfest das Américas.",
    imagem:
      "https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "guarda-do-embau",
    nome: "Guarda do Embaú",
    cidade: "Palhoça",
    descricao:
      "Onde o rio encontra o mar — reduto boêmio dos surfistas e viajantes livres.",
    imagem:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "praia-do-rosa",
    nome: "Praia do Rosa",
    cidade: "Imbituba",
    descricao:
      "Eleita uma das praias mais bonitas do mundo, santuário das baleias-francas.",
    imagem:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
  },
];
