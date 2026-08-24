export const SITE = {
  name: 'John',
  role: 'Software engineer',
  email: 'jbenedickson826@gmail.com',
  location: 'Doylestown, PA',
  github: 'https://github.com/jpb0042',
  linkedin: 'https://www.linkedin.com/in/john-benedickson-433605260/',
  resume: '/John_Benedickson_Resume.pdf',
};

export const LINKS = [
  { label: 'GitHub', href: SITE.github, external: true },
  { label: 'LinkedIn', href: SITE.linkedin, external: true },
  { label: 'Email', href: `mailto:${SITE.email}`, external: false },
] as const;

export const INTRO = {
  kicker: 'Hello, my name is',
  title: ['John Benedickson.', 'I build custom software for small businesses.'],
  lede: "I'm a full stack developer living in Doylestown, PA. Most of my work is React, Firebase, and Google Cloud.",
};

export const ABOUT = {
  title: 'About',
  paragraphs: [
    'I have a B.S. in Computer Engineering from West Virginia University.',
    'I write TypeScript end to end: Vite and React on the frontend, Node APIs and Cloud Functions on the backend, Firebase and GCP for auth, data, and hosting.',
    'I use Cursor to enhance my workflow. Skills, rules, and hooks sit in the repo so the agent works the way I do.',
    'In my free time, I like to play golf and go fishing.',
  ],
};

export const FOCUS = [
  {
    icon: 'react',
    title: 'React',
    body: 'Vite apps and typed UI.',
  },
  {
    icon: 'typescript',
    title: 'TypeScript',
    body: 'What I write almost everything in.',
  },
  {
    icon: 'firebase',
    title: 'Firebase',
    body: 'Auth, Firestore, Cloud Functions.',
  },
  {
    icon: 'gcp',
    title: 'Google Cloud',
    body: 'Cloud Run and hosting.',
  },
  {
    icon: 'api',
    title: 'APIs',
    body: 'Node and Express.',
  },
  {
    icon: 'cursor',
    title: 'Cursor',
    body: 'Skills and rules enhance my agents.',
  },
] as const;

export const PATH = [
  {
    step: '01',
    title: 'West Virginia University',
    body: 'B.S. in Computer Engineering, Morgantown, WV.',
  },
  {
    step: '02',
    title: 'Newport News Shipbuilding',
    body: 'Software engineer, Instrumentation & Control. Built an LLM RAG tool so engineers could query ship specs in plain language, prototyped an electric-plant HMI, and programmed a Xilinx Zynq to emulate PLC I/O — then wrote the docs that onboarded the next engineer.',
  },
  {
    step: '03',
    title: 'FreeTech',
    body: 'Full-stack developer since 2023. TypeScript monorepo with React, Firebase, Cloud Functions, and Express on Cloud Run — plus skills, rules, and hooks so the agent follows the same process I do.',
  },
] as const;

export const CONTACT = {
  title: 'Contact',
  body: 'If you want to talk software, agents, or golf, send a note.',
};
