export const site = {
  name: 'Dimitrii Codrean',
  title: 'Dimitrii Codrean — Photography & Notes',
  description:
    'Photography, software, and notes by iOS and Go developer Dimitrii Codrean.',
  github: 'https://github.com/Kodryan',
};

export const withBase = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
