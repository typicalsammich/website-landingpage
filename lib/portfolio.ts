export const projects = [
  {
    name: 'Imperial Crown Lath & Plastering',
    category: 'Stucco & plastering',
    desc: 'A confident, craft-focused website for specialist lath and plastering services.',
    url: 'https://imperial-clp.vercel.app',
    host: 'imperial-clp.vercel.app',
  },
  {
    name: 'LPZ Plumbing Solutions',
    category: 'Plumbing',
    desc: 'A clear, service-led website that puts plumbing expertise front and center.',
    url: 'https://lpz-plumbing.vercel.app',
    host: 'lpz-plumbing.vercel.app',
  },
  {
    name: 'Pro Surface',
    category: 'Surface services',
    desc: 'A distinctive online presence built around professional surface services.',
    url: 'https://pro-surface.vercel.app',
    host: 'pro-surface.vercel.app',
  },
] as const;

export type PortfolioProject = (typeof projects)[number];
