export const site = {
  name: 'Dimitrii Codrean',
  title: 'Dimitrii Codrean — Photography',
  description: 'Photography by Dimitrii Codrean.',
  github: 'https://github.com/Kodryan',
};

export const withBase = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
};
