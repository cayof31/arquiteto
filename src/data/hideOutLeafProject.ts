import type { ArchitectureProject, ProjectImage } from '../types/project';

export const images = [
  "/projects/hideoutLeafHouse/01.jpg",
  "/projects/hideoutLeafHouse/1.jpg",
  "/projects/hideoutLeafHouse/2.jpg",
  "/projects/hideoutLeafHouse/3.jpg",
  "/projects/hideoutLeafHouse/4.jpg",
  "/projects/hideoutLeafHouse/5.jpg",
  "/projects/hideoutLeafHouse/6.jpg",
  "/projects/hideoutLeafHouse/7.jpg",
  "/projects/hideoutLeafHouse/8.jpg",
  "/projects/hideoutLeafHouse/9.jpg",
  "/projects/hideoutLeafHouse/10.jpg",
  "/projects/hideoutLeafHouse/11.jpg",
];

export const imagesPlan = [
  "/projects/hideoutLeafHouse/1_planta.jpg",
  "/projects/hideoutLeafHouse/2_planta.jpg",
];

export const hideoutLeafProject: ArchitectureProject = {
  slug: 'hideout-leaf-villa-pablo-luna-studio',
  title: 'Hideout Leaf Villa',
  category: 'Hospitalidade',
  year: 2026,
  location: 'Sidemen, Indonésia',
  coverImage: images[0],
  description:
    'Villa ecológica imersa na selva montanhosa de Bali, inspirada na queda orgânica de quatro folhas que formam coberturas esculturais em bambu, integrando espaços abertos, vidro curvo e ventilação passiva.',
  source: {
    name: 'ArchDaily',
    url: 'https://www.archdaily.com/1183102/hideout-leaf-villa-pablo-luna-studio',
  },
  technicalDetails: {
    area: 160,
    architects: 'Pablo Luna Studio, Hideout Bali',
    designTeam: [
      'Brandon James',
      'Fillologus Iryono',
      'Theodorus Alvin',
      'I Putu Raditya Manggala Hutama',
      'I Putu Krisnantara Putra',
      'Adhi Guna Dharma'
    ],
    interiorDesignTeam: ['Rass Interior', 'Hideout Atelier'],
    materials: [
      'Bambu Preto Estrutural',
      'Bambu Amarelo',
      'Calcário Polido (Bhoomi Earth Studio)',
      'Vidro Curvo Piso-Teto',
      'Pedra Natural',
      'Palha Tradicional'
    ],
    structuralChallenges:
      'Estrutura orgânica autoportante em bambu com número mínimo de pilares, coberturas curvas sobrepostas em balanço e fechamentos em vidro curvo integrados a terreno de preservação'
  },
  plans: [
    {
      url: imagesPlan[0],
      alt: 'Planta Baixa do Primeiro Andar',
      caption: 'Planta Baixa do Pavimento Principal',
      category: 'plans'
    },
    {
      url: imagesPlan[1],
      alt: 'Corte Arquitetônico Longitudinal',
      caption: 'Corte Arquitetônico e Esquema de Coberturas',
      category: 'plans'
    }
  ],
  content: [
    // 1. Imagem de Abertura
    {
      type: 'image',
      image: {
        url: images[1],
        alt: 'Vista externa da Hideout Leaf Villa integrada à selva tropical',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 1
    {
      type: 'paragraph',
      text: 'O Hideout Leaf está localizado nas montanhas do leste de Bali, cercado por uma paisagem natural que forma um ecossistema vivo de espaços conscientes do design, arte e experiências sensoriais, aninhado ao lado de um rio tranquilo à sombra do Monte Agung. Afastada da intensidade da vida urbana, a villa é imersa nos sons da água corrente, folhas farfalhando e vegetação tropical, tornando-se parte intrínseca do ambiente. O projeto busca criar uma relação estreita entre arquitetura e natureza, permitindo que a paisagem ao redor molde a experiência do habitar.'
    },
    // 2. Imagem Destaque (Estrutura e Vegetação)
    {
      type: 'image',
      image: {
        url: images[2],
        alt: 'Detalhe da estrutura de bambu curvado e beiral sobre a floresta',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 2
    {
      type: 'paragraph',
      text: 'A residência de três quartos está situada em uma área de 3.000 m² de selva intocada, preservada em seu estado natural. O acesso é feito por uma passarela suspensa que serpenteia suavemente pela topografia, permitindo que a vegetação nativa e os riachos existentes permaneçam completamente preservados.'
    },
    // 3. Par de fotos (Interiores e Geometria dos Telhados)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: images[3],
          alt: 'Interiores com iluminação intimista e marcenaria em bambu',
          category: 'photo'
        },
        {
          url: images[4],
          alt: 'Volume externo e telhados orgânicos sobrepostos',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 3
    {
      type: 'paragraph',
      text: 'Projetada em colaboração com Brandon James, cofundador do Hideout Bali, a villa se inspira na imagem poética de quatro folhas caindo suavemente sobre o relevo. Cada folha se torna um elemento de cobertura distinto que define o ritmo espacial da casa. Ondulando pelo terreno, os telhados sobrepostos criam uma composição dinâmica e harmoniosa, organizando a arquitetura em uma sequência de espaços que equilibram fluidez, privacidade e conexão contínua com a paisagem.'
    },
    // 4. Par de fotos (Aberturas e Detalhes de Cobertura)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: images[5],
          alt: 'Encontro dos telhados em balanço e claraboias naturais',
          category: 'photo'
        },
        {
          url: images[6],
          alt: 'Detalhe da estrutura de bambu e entrada de luz natural',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 4
    {
      type: 'paragraph',
      text: 'As aberturas entre as coberturas permitem que a luz natural e o ar circulem livremente por toda a edificação. À medida que a luz do sol filtra por essas frestas, padrões mutáveis de sombras animam os ambientes ao longo do dia, enquanto a ventilação cruzada garante conforto térmico passivo no clima tropical.'
    },
    // Parágrafo 5 (continuidade sem interrupção técnica)
    {
      type: 'paragraph',
      text: 'O sistema estrutural foi desenvolvido com um número reduzido de pilares de bambu, criando amplitude e continuidade visual nos interiores. No centro da villa, a cobertura principal abriga a área social integrada, concebida como ponto de encontro do projeto. Acima dela, um telhado ligeiramente elevado abriga um dormitório aberto ao ar livre, oferecendo um refúgio íntimo ventilado pela brisa das montanhas.'
    },
    // 5. Imagem da Área Social Central
    {
      type: 'image',
      image: {
        url: images[7],
        alt: 'Área de convivência sob a estrutura central de bambu',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 6
    {
      type: 'paragraph',
      text: 'Os dois telhados laterais acolhem as suítes principais e seus banheiros, completando o conjunto de quatro folhas que confere identidade à obra. Estes quartos são protegidos por panos de vidro de piso a teto, incluindo elegantes vidros curvos que suavizam a transição entre o interior e a vegetação densa.'
    },
    // 6. Par de fotos (Suítes e Banheiros Integrados)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: images[8],
          alt: 'Dormitório fechado por vidros curvos com vista panorâmica',
          category: 'photo'
        },
        {
          url: images[9],
          alt: 'Banheiro integrado com pedra natural e piso de calcário',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 7
    {
      type: 'paragraph',
      text: 'Construída inteiramente com materiais sustentáveis, a vila celebra o bambu em múltiplas aplicações: o bambu preto é empregado nas estruturas portantes, pisos e mobiliário sob medida, enquanto o bambu amarelo introduz calor e contraste. Pisos e paredes de calcário polido desenvolvidos pelo Bhoomi Earth Studio unem-se ao vidro para equilibrar solidez, transparência e leveza.'
    },
    // 7. Imagem Detalhe de Marcenaria e Materiais
    {
      type: 'image',
      image: {
        url: images[10],
        alt: 'Detalhes construtivos dos encaixes de bambu e acabamento mineral',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 8
    {
      type: 'paragraph',
      text: 'O Hideout Leaf foi concebido como um refúgio onde arquitetura, materialidade e ecossistema coexistem em harmonia. A geometria de suas coberturas e o uso de matérias-primas nativas criam um espaço onde a experiência de morar é regida pelos ciclos da natureza e pelo silêncio verde das montanhas de Bali.'
    },
    // 8. Imagem de Fechamento Fotográfico
    {
      type: 'image',
      image: {
        url: images[11],
        alt: 'Vista poética da vila camuflada na copa das árvores ao entardecer',
        span: 'col-span-2',
        category: 'photo'
      }
    }
  ]
};