// Edit the general site wording here. Gallery names and descriptions are in
// galleries.ts; article titles and body text are in content/articles/*.md.
export const content = {
  navigation: [
    { href: '/photography/', label: 'Photography' },
    { href: '/articles/', label: 'Writing' },
    { href: '/about/', label: 'About' },
  ],
  accessibility: {
    primaryNavigation: 'Primary navigation',
    homeLink: 'home',
    skipToContent: 'Skip to content',
    switchToDarkTheme: 'Switch to dark theme',
    switchToLightTheme: 'Switch to light theme',
  },
  home: {
    eyebrow: 'Todo',
    titleStart: 'Code, light',
    titleEmphasis: 'observation.',
    heroAlt: 'A rainy city street at night, photographed by Dimitrii Codrean',
    heroCaption: 'Untitled, from Photographs',
    heroLinkLabel: 'View all photography',
    statementLabel: 'In focus',
    statement: 'statement todo',
    latestWritingHeading: 'Latest writing',
    allArticlesLink: 'All articles ↗',
    emptyWriting: 'Notes on software, photography, and the details worth remembering—coming soon.',
  },
  photography: {
    pageTitle: 'Photography — Dimitrii Codrean',
    pageDescription: 'Personal and commissioned photography by Dimitrii Codrean.',
    eyebrow: 'Selected photography',
    titleStart: 'Stories in',
    titleEmphasis: 'still frames.',
    introduction:
      'Street observations, human gestures, and commissioned documentary work. Three collections, made with attention to what usually passes unnoticed.',
    collectionsHeading: 'Collections',
    backLink: '← All photography',
    imageViewer: 'image viewer',
  },
  gallery: {
    singularFrame: 'frame',
    pluralFrames: 'frames',
    photographs: 'photographs',
  },
  writing: {
    pageTitle: 'Writing — Dimitrii Codrean',
    pageDescription: 'Notes about software, photography, and close observation by Dimitrii Codrean.',
    allWritingHeading: 'All writing',
    emptyState: 'The notebook is open. The first article will appear here soon.',
    backLink: '← All writing',
    readLink: 'Read',
  },
  about: {
    pageTitle: 'About — Dimitrii Codrean',
    pageDescription: 'About Dimitrii Codrean, TODO',
    introductionLabel: 'A short introduction',
    introduction: 'I’m Dimitrii, TODO',
    body:
      'todo body',
    githubPrefix: 'Find my development work on',
  },
  footer: {
    statementFirstLine: 'Photographs, software,',
    statementSecondLine: 'and occasional notes.',
    githubLabel: 'GitHub',
    builtWith: 'Built with',
    astroLabel: 'Astro',
  },
  notFound: {
    pageTitle: 'Page not found — Dimitrii Codrean',
    message: 'This frame is empty.',
    returnHome: 'Return home →',
  },
} as const;
