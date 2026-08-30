import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://arquiteto.micro-sass.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Bloqueie rotas privadas quando existirem
        // disallow: ['/admin', '/api'],
      },
      // Liberação explícita para IAs (GEO/AIO) — GPTBot, ClaudeBot, PerplexityBot
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
