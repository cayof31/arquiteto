import type { ArchitectureProject, ProjectImage } from '../types/project';


export const images = [
  "/projects/communalWarehouseProject/1.jpg",
  "/projects/communalWarehouseProject/2.jpg",
  "/projects/communalWarehouseProject/3.jpg",
  "/projects/communalWarehouseProject/4.jpg",
  "/projects/communalWarehouseProject/5.jpg",
  "/projects/communalWarehouseProject/6.jpg",
  "/projects/communalWarehouseProject/7.jpg",
  "/projects/communalWarehouseProject/8.jpg",
  "/projects/communalWarehouseProject/9.jpg",
  "/projects/communalWarehouseProject/10.jpg",
  "/projects/communalWarehouseProject/11.jpg",
  "/projects/communalWarehouseProject/12.jpg",
  "/projects/communalWarehouseProject/13.jpg",
  "/projects/communalWarehouseProject/14.jpg",
  "/projects/communalWarehouseProject/15.jpg",
  "/projects/communalWarehouseProject/16.jpg",
  "/projects/communalWarehouseProject/17.jpg",
  "/projects/communalWarehouseProject/18.jpg",
  "/projects/communalWarehouseProject/19.jpg",
  "/projects/communalWarehouseProject/20.jpg",
  "/projects/communalWarehouseProject/21.jpeg",
  "/projects/communalWarehouseProject/22.jpeg",
  "/projects/communalWarehouseProject/23.jpeg",
  "/projects/communalWarehouseProject/24.jpeg",
];

export const imagesPlan = [
  "/projects/communalWarehouseProject/1_planta.jpg",
  "/projects/communalWarehouseProject/2_planta.jpg",    
  "/projects/communalWarehouseProject/3_planta.jpg",    
  "/projects/communalWarehouseProject/4_planta.jpg",    
  "/projects/communalWarehouseProject/5_planta.jpg",    
  "/projects/communalWarehouseProject/6_planta.jpg",    
  "/projects/communalWarehouseProject/7_planta.jpeg",    

]

export const communalWarehouseProject: ArchitectureProject = {
  slug: 'armazem-comunitario-medellin-yemail-arquitectura',
  title: 'Armazém Comunitário Medellín',
  category: 'Comercial / Interiores',
  year: 2020,
  location: 'Medellín, Colômbia',
  coverImage:
    images[0],
  description:
    'Reconversão de um antigo galpão industrial no bairro de Manila em um espaço de coworking e cafeteria colaborativa, recuperando a volumetria de pé-direito duplo e tesouras de madeira com novos mezaninos e jardins triangulares.',
  source: {
    name: 'ArchDaily',
    url: 'https://www.archdaily.com/1088922/communal-warehouse-medellin-yemail-arquitectura',
  },
  technicalDetails: {
    area: 350,
    architects: 'Yemail Arquitectura',
    materials: [
      'Madeira de Abeto Estrutural',
      'Tesouras de Madeira Existentes',
      'Concreto Polido e Blocos de Concreto',
      'Estruturas Metálicas Leves',
      'Vidro',
      'Vegetação Tropical Interna'
    ],
    structuralChallenges:
      'Recuperação da tipologia industrial de quatro paredes de pé-direito duplo e cobertura de duas águas em cinco tesouras, inserindo mezaninos em abeto e escadas esculturais autoportantes sem sobrecarregar a estrutura pré-existente'
  },
  plans: [
    {
      url: imagesPlan[0],
      alt: 'Planta Baixa do Pavimento Térreo e Mezaninos',
      caption: 'Planta Baixa do Pavimento Térreo e Mezaninos',
      category: 'plans'
    },
    {
      url: imagesPlan[1],
      alt: 'Planta Baixa do Mezanino Superior',
      caption: 'Planta Baixa do Mezanino Superior',
      category: 'plans'
    },
    {
      url: imagesPlan[2],
      alt: 'Corte Longitudinal A-A com tesouras de madeira',
      caption: 'Corte Longitudinal',
      category: 'plans'
    },
    {
      url: imagesPlan[3],
      alt: 'Corte Transversal B-B e jardins triangulares',
      caption: 'Corte Transversal',
      category: 'plans'
    },
    {
      url: imagesPlan[4],
      alt: 'Elevação Frontal da fachada na rua Manila',
      caption: 'Elevação Frontal',
      category: 'plans'
    },
    {
      url: imagesPlan[5],
      alt: 'Elevação Lateral e fundos do galpão',
      caption: 'Elevação Lateral',
      category: 'plans'
    },
    {
      url: imagesPlan[6],
      alt: 'Diagramas estruturais e detalhes dos mezaninos em abeto',
      caption: 'Detalhes Estruturais e Mezaninos',
      category: 'plans'
    }
  ],
  content: [
    // 1. Imagem de Abertura
    {
      type: 'image',
      image: {
             url: images[1],
        alt: 'Área central do Armazém Comunitário com mezanino em madeira e cafeteria',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 1
    {
      type: 'paragraph',
      text: 'O Communal abriu suas portas como um experimento sobre o papel do design enquanto meio para conectar pessoas, espíritos e intelectos. Trata-se de pensamento em rede, expansão e criatividade, demonstrando como o ato de compartilhar adquiriu a força de um princípio orientador contemporâneo.'
    },
    // 2. Par de fotos (Espaços de Convivência e Trabalho)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: images[2],
          alt: 'Ambiente de trabalho coletivo com mesas compartilhadas e iluminação zenital',
          category: 'photo'
        },
        {
          url: images[3],
          alt: 'Área de café e refeições sob os mezaninos de madeira',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 2
    {
      type: 'paragraph',
      text: 'As dimensões da intervenção revelam uma peça que se encaixa em outra buscando a menor tensão possível: um armazém no tradicional bairro de Manila, em Medellín, construído a partir de remanescentes de seu passado como oficina mecânica, escritório e confecção têxtil. O espaço é transformado por meio de operações elementares para nivelar, desobstruir, ventilar e iluminar, recuperando a tipologia industrial essencial de quatro paredes de pé-direito duplo e telhado de duas águas sustentado por cinco tesouras de madeira.'
    },
    // 3. Imagem Destaque (Estrutura e Altura Dupla)
    {
      type: 'image',
      image: {
        url: images[4],
        alt: 'Vista da altura dupla e das tesouras de madeira originais preservadas',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 3
    {
      type: 'paragraph',
      text: 'O diálogo com o espaço é guiado por um conjunto de elementos de naturezas diversas dispostos nas extremidades: dois mezaninos em madeira de abeto que expressam ordem estrutural, seis jardins triangulares, 11 janelas circulares (olhos-de-boi), uma escada contida dentro de outra e uma terceira escada desenhada para ser um lugar de permanência em si, e não apenas um meio de circulação vertical. Uma composição de geometrias singulares que coexistem de forma dinâmica.'
    },
    // 4. Par de fotos (Detalhes dos Mezaninos e Circulação)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: images[5],
          alt: 'Encontro entre a estrutura de madeira nova e as paredes pré-existentes',
          category: 'photo'
        },
        {
          url: images[6],
          alt: 'Circulação no mezanino superior e visuais para o salão principal',
          category: 'photo'
        }
      ]
    },
    // 5. Imagem dos Interiores e Vegetação
    {
      type: 'image',
      image: {
        url: images[7],
        alt: 'Jardins triangulares internos integrados às estações de coworking',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 4
    {
      type: 'paragraph',
      text: 'Uma encenação arquitetônica que organiza diferentes ideias, pessoas e temporalidades através de componentes espaciais que transcendem a função rígida para serem moldados pelas proporções do corpo e pelas relações humanas.'
    },
    // 6. Imagem de Fechamento (Fachada Externa)
    {
      type: 'image',
      image: {
        url: images[8],
        alt: 'Fachada do armazém na rua do bairro Manila',
        span: 'col-span-2',
        category: 'photo'
      }
    }
  ]
};