import type { ArchitectureProject, ProjectImage } from '../types/project';

export const images = [
  "/projects/drHouseProjects/01-12-1.jpg",
  "/projects/drHouseProjects/1.jpg",
  "/projects/drHouseProjects/2.jpg",
  "/projects/drHouseProjects/3.jpg",
  "/projects/drHouseProjects/4.jpg",
  "/projects/drHouseProjects/5.jpg",
  "/projects/drHouseProjects/6.jpg",
  "/projects/drHouseProjects/7.jpg",
  "/projects/drHouseProjects/8.jpg",
  "/projects/drHouseProjects/9.jpg",
  "/projects/drHouseProjects/10.jpg",
  "/projects/drHouseProjects/11.jpg",
  "/projects/drHouseProjects/12.jpg",
];

export const drHouseProject: ArchitectureProject = {
  slug: 'dr-house-arc-architects',
  title: 'DR House',
  category: 'Residencial',
  year: 2025,
  location: 'Tashkent, Uzbequistão',
  coverImage: images[0],
  description:
    'Residência unifamiliar contemporânea articulada em torno de múltiplos pátios ajardinados e um estúdio central com pé-direito duplo nos arredores de Tashkent.',
  source: {
    name: 'ArchDaily',
    url: 'https://www.archdaily.com/1183689/dr-house-arc-architects',
  },
  technicalDetails: {
    area: 697,
    architects: 'ARC Architects',
    designTeam: [
      'Anastasia Pyagay',
      'Bekzod Mukhammadboev',
      'Bobir Klichev'
    ],
    interiorDesignTeam: [
      'Bobir Klichev',
      'Farrukh Shadmanov',
      'Muazzam Karimova',
      'Mardon Rajabiy'
    ],
    materials: [
      'Pedra Natural',
      'Reboco Texturizado',
      'Madeira Natural',
      'Vidro Piso-Teto',
      'Parquet de Madeira',
      'Azulejos'
    ],
    structuralChallenges:
      'Articulação de múltiplos pátios internos com grandes panos de vidro estrutural e estúdio central com pé-direito duplo'
  },
  // Campo dedicado caso queira renderizar direto na seção escura no final da página
  plans: [
    {
      url: 'https://images.adsttc.com/media/images/6a87/1bc9/ab59/ca01/8994/66c4/large_jpg/dr-house-archdaily-14-08-26-page-2-2-1.jpg?1787239450',
      alt: 'Planta Baixa do Primeiro Andar',
      caption: 'Planta do Primeiro Andar',
      category: 'plans'
    },
    {
      url: 'https://images.adsttc.com/media/images/6a87/140e/ac8b/af01/892c/dcae/large_jpg/dr-house-archdaily-14-08-26-page-6-6.jpg?1787237484',
      alt: 'Diagrama Isométrico Seccional',
      caption: 'Diagrama Isométrico Seccional',
      category: 'plans'
    }
  ],
  content: [
    // 1. Imagem de abertura
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a87/1586/ab59/ca01/8994/664f/large_jpg/z-4-10.jpg?1787237866',
        alt: 'Fachada externa e vista volumétrica da residência',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 1
    {
      type: 'paragraph',
      text: 'Localizada nos arredores nordeste de Tashkent, a casa está situada entre dois ambientes contrastantes. O local é acessível por duas ruas, com um canal e jardins de um lado e um bairro residencial de baixa altura, ou mahalla, do outro. A casa estava posicionada para abrir para os jardins, enquanto os andares superiores ofereciam vistas da paisagem ao redor e, em dias claros, das montanhas ao além.'
    },
    // 2. Par de fotos (Pátio e Circulação)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6a87/1585/ac8b/af01/892c/dcc0/large_jpg/z-9-11.jpg?1787237833',
          alt: 'Pátio interno e paisagismo integrado',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6a87/1588/ab59/ca01/8994/6650/large_jpg/z-10-12.jpg?1787237803',
          alt: 'Circulação e transição entre espaços internos e externos',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 2
    {
      type: 'paragraph',
      text: 'A entrada principal está localizada no lado oeste, voltada para a mahalla e seu denso tecido residencial. Em contraste com as elevações abertas voltadas para o jardim, a fachada de entrada é mais contida e fechada. Uma série de elementos arquitetônicos proporciona sombra do sol enquanto cria uma maior sensação de privacidade.'
    },
    // 3. Imagem destaque (Fachada Oeste)
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a87/1580/ab59/ca01/8994/6649/large_jpg/03-11-2.jpg?1787237776',
        alt: 'Fachada oeste com elementos de proteção solar',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 3
    {
      type: 'paragraph',
      text: 'Vários pátios de diferentes tamanhos estão integrados ao plano. Eles dividem a casa em zonas distintas, trazendo luz natural e ventilação para os cômodos e criando uma variedade de experiências espaciais. O maior e mais paisagístico pátio está localizado na parte de trás da casa. Os principais espaços de convivência — cozinha, sala de estar, quarto principal, corredor e piscina — são orientados para ele.'
    },
    // 4. Par de fotos (Piscina e Estar)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6a87/1585/ab59/ca01/8994/664d/large_jpg/z-15-14.jpg?1787237799',
          alt: 'Vista da piscina e área de lazer externa',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6a87/1586/ab59/ca01/8994/664e/large_jpg/z-31-17.jpg?1787237796',
          alt: 'Conexão dos ambientes internos com o deque',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 4
    {
      type: 'paragraph',
      text: 'No centro do pátio, um terraço de verão forma uma extensão externa da casa. Inclui uma área de jantar, sala de estar e cozinha de verão com despensa e uma conexão de serviço separada para entregas convenientes.'
    },
    // Parágrafo 5 (continuidade de texto sem a planta no meio)
    {
      type: 'paragraph',
      text: 'A arquitetura combina materiais naturais com uma paleta contida. As fachadas são acabadas em pedra e reboco texturizado, enquanto o teto do terraço é revestido com madeira natural. A casa foi projetada para uma família grande, jovem e ativa, com os espaços organizados em torno do descanso, da vida familiar e da conexão com o ar livre.'
    },
    // 5. Par de fotos (Fachadas e Detalhes)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6a87/1588/ab59/ca01/8994/6651/large_jpg/z-37-21.jpg?1787237802',
          alt: 'Detalhe do acabamento em pedra e forro de madeira',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6a87/1589/ab59/ca01/8994/6652/large_jpg/z-33-18.jpg?1787237838',
          alt: 'Fachada posterior voltada ao jardim',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 6
    {
      type: 'paragraph',
      text: 'O interior mantém o conceito arquitetônico ao minimizar a fronteira entre a casa e o jardim. Em várias áreas, os materiais usados nas fachadas continuam para o interior, estendendo visualmente a arquitetura do exterior para o interior. O vidro do chão ao teto fortalece ainda mais essa conexão, permitindo que os pátios se tornem parte integrante dos espaços de convivência.'
    },
    // 6. Par de fotos (Ambientes Internos)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6a87/157e/ab59/ca01/8994/6646/large_jpg/z-43-26.jpg?1787237790',
          alt: 'Interiores com esquadrias do chão ao teto',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6a87/1589/ac8b/af01/892c/dcc3/large_jpg/z-42-25.jpg?1787237804',
          alt: 'Sala de estar com vista contínua para os pátios',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 7
    {
      type: 'paragraph',
      text: 'O primeiro andar é organizado em torno de um grande estúdio de altura dupla com vista para o jardim. É o principal espaço de reunião da casa e combina uma sala de estar, área de jantar e cozinha principal. A cozinha desempenha um papel importante no cotidiano da família, por isso foi posicionada para manter conexões visuais com a entrada, pátio, sala de estar e corredor.'
    },
    // 7. Imagem destaque (Estúdio Pé-Direito Duplo)
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a87/1581/ab59/ca01/8994/664a/large_jpg/09-7-8.jpg?1787237775',
        alt: 'Estúdio principal com pé-direito duplo e living integrado',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 8
    {
      type: 'paragraph',
      text: 'Uma cozinha separada nos fundos fica ao lado da cozinha principal. É projetada para preparar pratos tradicionais uzbeques e também oferece áreas de armazenamento e preparo de alimentos, com acesso conveniente ao serviço a partir da garagem. A zona de entrada no primeiro andar inclui uma sala de recepção para hóspedes e um quarto para hóspedes. Na extremidade oposta da casa, o spa e a piscina se abrem para o pátio por grandes janelas deslizantes.'
    },
    // 8. Par de fotos (Spa e Cozinha Gourmet)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6a87/1583/ab59/ca01/8994/664b/large_jpg/z-41-24.jpg?1787237799',
          alt: 'Área do spa interno com vista para o pátio',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6a87/1589/ac8b/af01/892c/dcc4/large_jpg/z-49-28.jpg?1787237805',
          alt: 'Cozinha e área de jantar integradas',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 9
    {
      type: 'paragraph',
      text: 'O segundo andar contém as áreas privadas para dormir, conectadas por um salão compartilhado e naturalmente iluminado. O quarto principal fica voltado para o pátio principal e tem acesso a uma varanda privada. O terceiro andar superior abriga uma sala de fitness, sala de caldeiras e terraço. Espaços técnicos, armazenamento e um cinema estão localizados no porão.'
    },
    // 9. Imagem Quarto Principal
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a87/1580/ac8b/af01/892c/dcbc/large_jpg/z-17-15.jpg?1787237793',
        alt: 'Quarto principal com varanda privativa',
        category: 'photo'
      }
    },
    // Parágrafo 10
    {
      type: 'paragraph',
      text: 'A luz natural é um elemento fundamental em toda a casa. Os interiores são intencionalmente mantidos simples, usando uma paleta limitada de paredes brancas, azulejos, pedra, parquet e folheado de madeira. Esses materiais adicionam calor e qualidade tátil, mantendo o foco nas vistas em mudança do jardim. Por toda a casa, a paisagem permanece como o principal elemento visual e uma parte essencial da experiência interna.'
    },
    // 10. Imagem de Fechamento Fotográfico
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a87/158a/ab59/ca01/8994/6653/large_jpg/04-11-3.jpg?1787237792',
        alt: 'Vista crepuscular da casa e piscina integrada ao jardim',
        span: 'col-span-2',
        category: 'photo'
      }
    }
  ]
};