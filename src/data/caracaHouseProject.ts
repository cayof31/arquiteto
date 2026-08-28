import type { ArchitectureProject, ProjectImage } from '../types/project';

export const caracaHouseProject: ArchitectureProject = {
  slug: 'residencia-caraca-23-sul',
  title: 'Residência Caraçá',
  category: 'Residencial',
  year: 2023,
  location: 'São Paulo, Brasil',
  coverImage:
    'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33f0/large_jpg/0354.23Sul.CasaCaraca-PKOK3501P.jpg?1786993894',
  description:
    'Reforma residencial que amplia uma casa térrea pré-existente através de meios-níveis e escavação, revelando tesouras de madeira originais e integrando o convívio a um pátio central e nova edícula em tijolo maciço de reúso.',
  source: {
    name: 'ArchDaily',
    url: 'https://www.archdaily.com.br/pt/1183471/residencia-caraca-23-sul',
  },
  technicalDetails: {
    area: 233,
    architects: '23 SUL',
    designTeam: [
      'Gabriel Manzi',
      'Ivo Magaldi',
      'Luís Pompeo',
      'Luiz Florence',
      'Moreno Zaidan',
      'Tiago Oakley',
      'Larissa Napoli',
      'Vitoria Aguiar',
      'Leonardo Felice',
      'Beatriz Trindade',
      'Mariana Chiarello'
    ],
    materials: [
      'Tijolo Maciço Aparente (Reúso)',
      'Tesouras de Madeira Preservadas',
      'Cobogó de Tijolo',
      'Laje de Concreto Mezanino',
      'Marcenaria em Madeira Natural',
      'Piso Cerâmico Lepri'
    ],
    structuralChallenges:
      'Criação de novos níveis sem alterar o gabarito e proporção originais: remoção de forro para expor a cobertura e escavação de 1 metro na área íntima aproveitando o desnível do lote'
  },
  plans: [
    {
      url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33f9/large_jpg/263_RCA_PE_XREF_R03-TERREO.jpg?1786993702',
      alt: 'Planta Baixa do Pavimento Térreo',
      caption: 'Planta Baixa - Pavimento Térreo e Pátio',
      category: 'plans'
    },
    {
      url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33f8/large_jpg/263_RCA_PE_XREF_R03-PRIMEIRO_PAV.jpg?1786993689',
      alt: 'Planta Baixa do Primeiro Pavimento',
      caption: 'Planta Baixa - Mezanino e Suíte Superior',
      category: 'plans'
    }
  ],
  content: [
    // 1. Imagem de Abertura
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33ea/large_jpg/0354.23Sul.CasaCaraca-PKOK3644P.jpg?1786993956',
        alt: 'Interiores da Residência Caraçá com tesouras de madeira expostas',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 1
    {
      type: 'paragraph',
      text: 'A casa térrea pré-existente não atendia às necessidades espaciais dos novos moradores. Foi necessário adicionar mais um andar, mas sem alterar as proporções e a escala originais da construção.'
    },
    // 2. Par de fotos (Living e Área Social)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33e5/large_jpg/0354.23Sul.CasaCaraca-KOKP7901ENR.jpg?1786993724',
          alt: 'Sala de estar integrada com estante em marcenaria e estrutura aparente',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33e7/large_jpg/0354.23Sul.CasaCaraca-PKOK3365HP.jpg?1786993878',
          alt: 'Sala de jantar sob a cobertura inclinada de madeira',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 2
    {
      type: 'paragraph',
      text: 'Para alcançar esse objetivo, duas intervenções foram determinantes: a remoção do forro revelou as tesouras de madeira originais do telhado, e, aproveitando o fato de que a casa era originalmente elevada 1,5 metro em relação à rua, foi possível escavar 1 metro na cota dos dormitórios.'
    },
    // Parágrafo 3
    {
      type: 'paragraph',
      text: 'Esses dois ganhos de pé-direito permitiram transformar a experiência espacial da antiga casa térrea através de meios-níveis: os espaços sociais ganharam amplitude com o pé-direito generoso, enquanto a área íntima foi organizada com foco em privacidade e acolhimento. Uma nova laje de mezanino meio nível acima do living abriga os quartos das crianças e sala de TV no nível inferior, e a suíte principal com escritório no nível superior.'
    },
    // 3. Par de fotos (Mezanino e Dormitórios)
    {
      type: 'image-grid',
      columns: 2,
      images: [
        {
          url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33ef/large_jpg/0354.23Sul.CasaCaraca-PKOK3441P.jpg?1786993842',
          alt: 'Escada de acesso ao mezanino e detalhe dos níveis intermediários',
          category: 'photo'
        },
        {
          url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33f3/large_jpg/0354.23Sul.CasaCaraca-PKOK3597P.jpg?1786993934',
          alt: 'Dormitório da suíte com marcenaria sob medida e luz natural',
          category: 'photo'
        }
      ]
    },
    // Parágrafo 4
    {
      type: 'paragraph',
      text: 'Essa reorganização deslocou o centro focal do lote para o pátio ajardinado entre o corpo principal e os fundos. A sala de estar se abre completamente para o quintal, integrando-se à nova edícula que concentra churrasqueira, banheiro e lavanderia no pavimento térreo, além de sauna e solário no piso superior.'
    },
    // 4. Imagem Destaque (Integração com o Pátio)
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33f1/large_jpg/0354.23Sul.CasaCaraca-PKOK3540P.jpg?1786993952',
        alt: 'Abertura da área de refeições para o quintal e nova edícula',
        span: 'col-span-2',
        category: 'photo'
      }
    },
    // Parágrafo 5
    {
      type: 'paragraph',
      text: 'O reboco das duas empenas longitudinais preservadas foi descascado para expor a alvenaria de tijolos maciços originais. Além disso, todos os tijolos provenientes das paredes demolidas durante a reforma foram limpos e reaproveitados na construção das paredes e cobogós da nova edícula.'
    },
    // 5. Imagem de Fechamento (Detalhe dos Cobogós de Tijolo)
    {
      type: 'image',
      image: {
        url: 'https://images.adsttc.com/media/images/6a83/5c09/3cf9/6c00/0178/33eb/large_jpg/0354.23Sul.CasaCaraca-PKOK3727P.jpg?1786993984',
        alt: 'Fachada da edícula com cobogós e paredes em tijolos maciços de reúso',
        span: 'col-span-2',
        category: 'photo'
      }
    }
  ]
};