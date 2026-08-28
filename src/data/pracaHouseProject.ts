import type { ArchitectureProject, ProjectImage } from '../types/project';

export const pracaHouseProject: ArchitectureProject = {
  slug: 'casa-praca-felipe-hess-arquitetos',
  title: 'Casa Praça',
  category: 'Residencial',
  year: 2023,
  location: 'São Paulo, Brasil',
  coverImage:
    'https://images.adsttc.com/media/images/6899/e204/a805/bb5c/ec3d/f4e3/large_jpg/casa-praca-felipe-hess-arquitetos_29.jpg?1754915345',
  description:
    'Implantada em um lote estreito de 10 x 60 metros no Jardim Paulistano, a residência se organiza em três blocos intercalados por pátios, criando uma casa longa, silenciosa e integrada à luz e ao paisagismo.',
  source: {
    name: 'ArchDaily',
    url: 'https://www.archdaily.com.br/br/1032817/casa-praca-felipe-hess-arquitetos',
  },
  technicalDetails: {
    area: 600,
    architects: 'Felipe Hess Arquitetos',
    designTeam: ['Felipe Hess', 'Pia Quagliato', 'Ana Falcão', 'Manuela Siffert'],
    materials: [
      'Pintura Mineral Natural',
      'Assoalho de Carvalho Belga',
      'Esquadrias de Madeira Natural',
      'Portas Revestidas em Camurça e Palha',
      'Concreto Aparente',
      'Muros de Pedra'
    ],
    structuralChallenges:
      'Distribuição funcional de 3 blocos independentes intercalados por pátios em lote estreito e profundo (10x60m) com transições estruturais por pérgulas'
  },
  plans: [
    {
      url: 'https://images.adsttc.com/media/images/6891/76b4/cb12/3860/35f7/a213/large_jpg/img-8597-1.jpg?1754363611',
      alt: 'Planta do Pavimento Térreo',
      caption: 'Planta do Pavimento Térreo',
      category: 'plans'
    },
    {
      url: 'https://images.adsttc.com/media/images/6891/76b4/9a2f/b601/7e5e/8aa7/large_jpg/img-8598-2.jpg?1754363614',
      alt: 'Planta do Primeiro Andar',
      caption: 'Planta do Primeiro Andar',
      category: 'plans'
    }
  ],
  content: [
    // 1. Imagem de Abertura
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6891/76b0/cb12/3860/35f7/a20c/large_jpg/casa-praca-felipe-hess-arquitetos_19.jpg?1754363651',
        alt: 'Vista externa da Casa Praça e integração entre blocos e pátios',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 1
    {
      type: 'paragraph',
      text: 'Implantada em um terreno estreito e profundo de 10 x 60 metros no Jardim Paulistano, a Casa Praça está organizada em três blocos intercalados com pátios. Essa configuração aproveita a geometria do lote para distribuir os espaços funcionalmente e criar áreas abertas que potencializam a entrada de luz natural e incentivam a interação social.'
    },
    // 2. Par de fotos (Pátio e Varandas)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6891/76b0/9a2f/b601/7e5e/8aa3/large_jpg/casa-praca-felipe-hess-arquitetos_7.jpg?1754363596',
          alt: 'Varanda em concreto aparente e conexão com o pátio central',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6891/76b2/9a2f/b601/7e5e/8aa6/large_jpg/casa-praca-felipe-hess-arquitetos_25.jpg?1754363749',
          alt: 'Circulação externa e transição de luz natural entre os volumes',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 2
    {
      type: 'paragraph',
      text: 'O bloco da frente, próximo à rua, concentra os espaços de apoio: garagem, lavanderia, escritório e quarto de hóspedes. No bloco central estão a cozinha, que serve como núcleo da vida cotidiana, a sala de jantar e, no andar superior, os quartos das filhas. O bloco dos fundos abriga a sala de estar com lareira e, no andar superior, a suíte do casal. Nos fundos, um jardim com piscina, churrasqueira, sauna e academia completa o programa, com áreas de lazer integradas por uma pérgula e cercadas por vegetação e muros de pedra.'
    },
    // Parágrafo 3 (continuidade direta de leitura)
    {
      type: 'paragraph',
      text: 'A materialidade reforça a sensação de solidez e permanência. Paredes com pintura mineral natural, assoalho de carvalho belga, esquadrias de madeira e portas revestidas em camurça e palha compõem uma paleta sóbria e acolhedora. O mobiliário sob medida e objetos do acervo familiar adicionam personalidade, enquanto a marcenaria personalizada traz diferentes texturas que definem a transição entre os espaços.'
    },
    // 3. Grid de Interiores (Estar, Jantar e Marcenaria)
    {
      type: 'image-grid',
      columns: 3,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6891/76af/cb12/3860/35f7/a209/large_jpg/casa-praca-felipe-hess-arquitetos_5.jpg?1754363592',
          alt: 'Living com sofá, painéis de madeira e iluminação intimista',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6891/76af/cb12/3860/35f7/a20a/large_jpg/casa-praca-felipe-hess-arquitetos_10.jpg?1754363596',
          alt: 'Sala de jantar com mesa em madeira e cadeiras de design',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6891/76b0/cb12/3860/35f7/a20b/large_jpg/casa-praca-felipe-hess-arquitetos_3.jpg?1754363599',
          alt: 'Detalhe da integração da sala de jantar com as esquadrias envidraçadas',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 4
    {
      type: 'paragraph',
      text: 'O paisagismo assinado por Flávia Tiraboschi incorpora trepadeiras e áreas sombreadas estrategicamente posicionadas. O projeto propõe uma casa longa e silenciosa, onde os espaços abertos desempenham um papel central na experiência de morar.'
    },
    // 4. Imagem de Fechamento Fotográfico
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6891/76b1/cb12/3860/35f7/a211/large_jpg/casa-praca-felipe-hess-arquitetos_24.jpg?1754363662',
        alt: 'Varanda externa com pérgula e paisagismo integrado ao pátio',
        span: 'col-span-2',
        category: 'photo'
      }
    }
  ]
};