import type { ArchitectureProject, ProjectImage } from '../types/project';

export const communalWarehouseProject: ArchitectureProject = {
  slug: 'armazem-comunitario-medellin-yemail-arquitectura',
  title: 'Armazém Comunitário Medellín',
  category: 'Comercial / Interiores',
  year: 2020,
  location: 'Medellín, Colômbia',
  coverImage:
    'https://images.adsttc.com/media/images/5f87/b2b0/63c0/1777/3a00/07c3/large_jpg/Alejandro_Arango__(5).jpg?1602728616',
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
      url: 'https://images.adsttc.com/media/images/5f87/a953/63c0/1777/3a00/07a1/large_jpg/4_Planta_Primer_Piso.jpg?1602726207',
      alt: 'Planta Baixa do Primeiro Pavimento',
      caption: 'Planta Baixa do Pavimento Térreo e Mezaninos',
      category: 'plans'
    },
    {
      url: 'https://images.adsttc.com/media/images/5f87/aa1e/63c0/1777/3a00/07a7/large_jpg/6_Alzado.jpg?1602726410',
      alt: 'Elevação Arquitetônica',
      caption: 'Elevação e Seção Longitudinal',
      category: 'plans'
    }
  ],
  content: [
    // 1. Imagem de Abertura
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/5f87/b354/63c0/1777/3a00/07d1/large_jpg/Alejandro_Arango__(18).jpg?1602728779',
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
          url: 'https://images.adsttc.com/media/images/5f87/b2a4/63c0/173b/c600/094c/large_jpg/Alejandro_Arango__(4).jpg?1602728604',
          alt: 'Ambiente de trabalho coletivo com mesas compartilhadas e iluminação zenital',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/5f87/b36e/63c0/173b/c600/095a/large_jpg/Alejandro_Arango__(20).jpg?1602728804',
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
        url: 'https://images.adsttc.com/media/images/5f87/b2d5/63c0/173b/c600/0950/large_jpg/Alejandro_Arango__(8).jpg?1602728652',
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
          url: 'https://images.adsttc.com/media/images/5f87/b2c8/63c0/1777/3a00/07c5/large_jpg/Alejandro_Arango__(7).jpg?1602728640',
          alt: 'Encontro entre a estrutura de madeira nova e as paredes pré-existentes',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/5f87/b31d/63c0/173b/c600/0956/large_jpg/Alejandro_Arango__(14).jpg?1602728725',
          alt: 'Circulação no mezanino superior e visuais para o salão principal',
          category: 'photo'
        }
      ]
    },
    // 5. Imagem dos Interiores e Vegetação
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/5f87/b298/63c0/1777/3a00/07c1/large_jpg/Alejandro_Arango__(3).jpg?1602728593',
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
        url: 'https://images.adsttc.com/media/images/5f87/b339/63c0/173b/c600/0958/large_jpg/Alejandro_Arango__(16).jpg?1602728748',
        alt: 'Fachada do armazém na rua do bairro Manila',
        span: 'col-span-2',
        category: 'photo'
      }
    }
  ]
};