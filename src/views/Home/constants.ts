export const SITE = {
  name: 'Jack',
  role: 'Software engineer',
  email: 'jbenedickson826@gmail.com',
  location: 'Doylestown, PA',
};

export const INTRO = {
  kicker: SITE.name,
  title: 'I build TypeScript apps for the web and the cloud.',
  lede:
    'Based in Doylestown, PA. I work across React, Firebase, and Google Cloud — and I treat AI coding agents as part of the repo, not a side chat.',
};

export const ABOUT = {
  title: 'About',
  paragraphs: [
    'I’m a software engineer in Doylestown, Pennsylvania, with a B.S. in Computer Engineering from West Virginia University.',
    'Most of my work is full-stack TypeScript: Vite and React on the frontend, Node APIs and Cloud Functions on the backend, Firebase and GCP for auth, data, and hosting.',
    'I write a lot of that code with Cursor. Skills, rules, and hooks live in the repo, so the agent follows the same process we already use to ship.',
    'When I’m away from the keyboard, I’m usually fishing or on a golf course.',
  ],
};

export const FOCUS = [
  {
    title: 'React & TypeScript',
    body: 'Vite apps, typed UI, and the screens people actually work in.',
  },
  {
    title: 'Firebase & GCP',
    body: 'Auth, Firestore, Cloud Functions, Cloud Run — laptop to live.',
  },
  {
    title: 'APIs',
    body: 'Node and Express services, shared models, the glue between the browser and the database.',
  },
  {
    title: 'Agents in the repo',
    body: 'Cursor skills for the job, rules for the house style, hooks that gate shell, tickets, and edits. The AI ships the way the team already ships.',
  },
  {
    title: 'Off the clock',
    body: 'Fishing and golf.',
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
  body: 'I’m in Doylestown. If you want to talk software, agents, or golf, send a note.',
};
