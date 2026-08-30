import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RouteTransition from '../components/animations/RouteTransition';
import { Playfair_Display, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const baseUrl = 'https://arquiteto.micro-sass.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Studio Vértice — Site para Arquiteto',
    default: 'Studio Vértice | Site para Arquiteto — Portfólio de Alto Padrão em Next.js',
  },
  description:
    'Modelo de site para arquiteto em Next.js 16 — portfólio editorial brutalista, rápido e otimizado para Google e IAs (GEO/AIO). Ideal para escritórios que buscam site para arquiteto com SEO, sitemap dinâmico e portfólio de obras. Demonstração com 5 projetos para você apresentar a clientes.',
  keywords: [
    // Intenção principal — o que arquiteto digita
    'site para arquiteto',
    'site para arquitetos',
    'site de arquitetura',
    'site para escritório de arquitetura',
    'site para arquiteta',
    'criação de site para arquiteto',
    'fazer site para arquiteto',
    // Portfólio
    'portfólio para arquiteto',
    'portfolio para arquiteto',
    'portfólio de arquitetura',
    'portfólio arquitetura alto padrão',
    'modelo de portfólio arquitetura',
    // Template / sistema
    'template site arquiteto',
    'template para arquiteto',
    'site arquiteto nextjs',
    'site arquiteto next.js',
    'site arquiteto app router',
    // Atributos
    'site arquiteto brutalista',
    'site arquiteto minimalista',
    'site arquiteto alto padrão',
    'site arquiteto responsivo',
    'site arquiteto SEO',
    'site arquiteto GEO',
    'site para arquiteto barato', // captura variação long tail
    'exemplo de site para arquiteto',
    'inspiração site arquiteto',
    'Studio Vértice',
  ],
  authors: [{ name: 'Studio Vértice', url: baseUrl }],
  creator: 'Studio Vértice',
  publisher: 'Studio Vértice',
  category: 'Architecture Portfolio',
  classification: 'Site para arquiteto — portfólio Next.js',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': baseUrl,
    },
  },
  openGraph: {
    title: 'Site para Arquiteto — Studio Vértice | Portfólio Brutalista em Next.js',
    description:
      'O modelo de site para arquiteto que aparece no Google e nas IAs. Portfólio rápido, editorial e com SEO/AIO pronto. Veja a demonstração com 5 obras.',
    url: baseUrl,
    siteName: 'Studio Vértice — Site para Arquiteto',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/projects/drHouseProjects/01-12-1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Studio Vértice — Exemplo de site para arquiteto com portfólio brutalista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site para Arquiteto — Studio Vértice',
    description: 'Modelo de portfólio para arquitetos em Next.js — SEO + GEO/AIO. Demonstração real.',
    images: [`${baseUrl}/projects/drHouseProjects/01-12-1.jpg`],
    creator: '@studiovertice',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Adicione seu Search Console quando tiver domínio
  // verification: { google: 'seu-codigo' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Studio Vértice — Site para Arquiteto',
    url: baseUrl,
    description:
      'Modelo de site para arquiteto em Next.js — portfólio editorial para escritórios de arquitetura exibirem projetos com SEO e GEO/AIO.',
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      name: 'Studio Vértice',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/projetos?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const jsonLdProfessionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Studio Vértice',
    alternateName: 'Studio Vértice — Site para Arquiteto',
    image: `${baseUrl}/projects/drHouseProjects/01-12-1.jpg`,
    url: baseUrl,
    telephone: '+55-69-99391-5787',
    priceRange: '$$',
    description:
      'Criação de site para arquiteto e portfólio de arquitetura em Next.js. Template brutalista, rápido, com sitemap dinâmico, robots para GPTBot/ClaudeBot e JSON-LD para aparecer no Google e nas respostas de IAs (ChatGPT, Perplexity, Gemini) quando arquitetos buscam "site para arquiteto".',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. goias, 486',
      addressLocality: 'Barra do Garças',
      addressRegion: 'MT',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-15.8906',
      longitude: '-52.2631',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    serviceType: [
      'Site para arquiteto',
      'Portfólio para arquiteto',
      'Site de arquitetura',
      'Template Next.js para arquitetos',
    ],
    knowsAbout: [
      'site para arquiteto',
      'portfólio arquitetura',
      'Next.js App Router',
      'SEO para arquitetos',
      'GEO Generative Engine Optimization',
    ],
  };

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que é um site para arquiteto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'É um portfólio digital onde o escritório apresenta obras, ficha técnica, plantas e conceito. O modelo Studio Vértice usa Next.js App Router com grid editorial, página de projeto com galeria e ficha técnica, e SEO/AIO para aparecer quando arquitetos buscam "site para arquiteto".',
        },
      },
      {
        '@type': 'Question',
        name: 'Por que usar Next.js para site de arquitetura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js App Router gera sitemap e robots dinâmicos, otimiza imagens com next/image (sizes, quality, avif/webp) e entrega metadados Open Graph para WhatsApp e Google. É o padrão para portfólio rápido e bem indexado.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como este portfólio aparece no ChatGPT e Perplexity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Através de GEO/AIO: robots.ts libera GPTBot/ClaudeBot/PerplexityBot, sitemap.xml lista /projetos/[slug] dinamicamente e JSON-LD do tipo ProfessionalService descreve o serviço "site para arquiteto" com endereço e área de atuação. A IA lê esses dados estruturados para recomendar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso usar este site como modelo para meu escritório?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. É um template de demonstração com 5 projetos (DR House, Casa Praça, Hideout Leaf, Residência Caraçá, Armazém Medellín). Troque baseUrl, logo, og-image.jpg e dados do JSON-LD para seu escritório e conecte a um CMS depois.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto custa um site para arquiteto como este?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Como demonstração, o código é aberto para estudo. Para produção, o custo envolve domínio, hospedagem na Vercel e personalização de identidade, textos e fotos. Entre em contato pelo /contato.',
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" className="snap-y snap-proximity">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-white text-zinc-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <Navbar />
        <main>
          <RouteTransition>{children}</RouteTransition>
        </main>
      </body>
    </html>
  );
}
