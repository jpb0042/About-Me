import crmActivityPhoto from '../../assets/crm-activity.png';
import crmContactPhoto from '../../assets/crm-contact.png';
import crmLeadPhoto from '../../assets/crm-lead.jpg';
import crmPhoto from '../../assets/crm.jpg';
import logisticsPhoto from '../../assets/logistics.jpg';
import logisticsPlanPhoto from '../../assets/logistics-plan.png';
import logisticsStatusPhoto from '../../assets/logistics-status.jpg';
import logisticsVehiclesPhoto from '../../assets/logistics-vehicles.jpg';
import stackhuntAddressPhoto from '../../assets/stackhunt-address.jpg';
import stackhuntMatchesPhoto from '../../assets/stackhunt-matches.jpg';
import stackhuntPhoto from '../../assets/stackhunt.jpg';

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
    'In my free time, I like to play golf and go fishing.',
  ],
};

export const BUILT = {
  title: 'Built',
  items: [
    {
      id: 'crm',
      title: 'CRM',
      body: 'A contacts tool for sales. You can see stage, activity, and who owns the account.',
      photos: [crmPhoto, crmContactPhoto, crmActivityPhoto, crmLeadPhoto],
    },
    {
      id: 'logistics',
      title: 'Logistics',
      body: 'Dispatch software for truck shipments. Legs, locations, and repair time live on one plan.',
      photos: [logisticsPhoto, logisticsPlanPhoto, logisticsVehiclesPhoto, logisticsStatusPhoto],
    },
    {
      id: 'stackhunt',
      title: 'StackHunt',
      body: 'Drop in local repos. StackHunt reads the stack in the browser, then matches public job listings and commute times.',
      photos: [stackhuntPhoto, stackhuntMatchesPhoto, stackhuntAddressPhoto],
    },
    {
      id: 'micromouse',
      title: 'MicroMouse',
      body: 'A maze-solving robot I built during my computer engineering work at WVU.',
      video: '/micromouse.webm',
    },
  ],
} as const;

export const FOCUS = [
  {
    icon: 'react',
    title: 'React',
    body: 'Next.js apps and typed UI.',
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
