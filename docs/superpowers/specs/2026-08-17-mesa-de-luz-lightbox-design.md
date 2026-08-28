# Mesa de Luz — Lightbox Imersiva na Home

Data: 2026-08-17
Status: Aprovado (rascunho de spec)

## Objetivo

Na seção `#projetos` da página inicial, apresentar os projetos como uma lista/grid de
thumbnails em preto e branco. Ao clicar em um projeto, a imagem cresce até ocupar a tela
— e esse crescimento é a transição para a página de detalhe `/projetos/[slug]`. Ao voltar,
a imagem encolhe de volta para o thumbnail (morphing reverso).

## Abordagem: morph ACROSS rotas (Motion + AnimatePresence)

`layoutId` só faz morph se os dois elementos (thumbnail antigo e hero da página nova)
estiverem na mesma árvore React ao mesmo tempo. Solução: envolver a navegação do App Router
em um `AnimatePresence` chaveado por `usePathname()`, mantendo a página que sai montada
enquanto a nova entra.

## Arquitetura

| Arquivo | Mudança |
|---|---|
| `src/app/layout.tsx` | Envolver `<main>` com novo `RouteTransition` (client component) |
| `src/components/animations/RouteTransition.tsx` | **novo** — `AnimatePresence` keyed por pathname envolvendo `{children}` |
| `src/components/projects/ProjectList.tsx` | **novo** — grid de thumbnails B&W (substitui `ProjectSection` na home) |
| `src/app/page.tsx` | Usar `ProjectList` na seção `#projetos` |
| `src/components/projects/ProjectCard.tsx` | Thumbnail vira `motion.div` com `layoutId={projeto-${slug}}` + filtro grayscale |
| `src/app/projetos/[slug]/page.tsx` | Hero vira `motion.div` com mesmo `layoutId`, tela cheia no topo; corrigir `params` para `Promise` (async/await) |

Dados (`src/data/projects.ts` e `src/types/project.ts`) não mudam.

## Comportamento

- Thumbnails em B&W: `grayscale` com `hover:grayscale-0`.
- Navegação via `<Link>` (prefetch já ativo) para `/projetos/[slug]`.
- Ao navegar, o Motion detecta o `layoutId` duplicado entre as duas rotas e anima do
  tamanho do thumbnail até o hero — "a imagem cresce até a tela".
- Voltar (botão back / navbar) reproduz a animação ao contrário via `AnimatePresence`.
- Fallback "Projeto não encontrado" permanece na página de detalhe.

## Tratamento de erros

- Projeto não encontrado: mensagem simples na página de detalhe (mantido).
- Navegação normal (sem morph, ex.: home -> contato): fade via AnimatePresence.

## Notas de implementação (Next.js neste repositório)

- Nesta versão do Next.js (16), `params` em páginas dinâmicas é uma `Promise` e deve ser
  aguardado com `await` (`params: Promise<{ slug: string }>`).
- Componentes que usam hooks do Motion precisam de `"use client"`.
