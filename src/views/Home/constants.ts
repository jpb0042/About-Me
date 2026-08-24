export const SITE = {
  name: 'Jack',
  role: 'Software engineer',
  email: 'hello@example.com',
  location: 'Placeholder city',
};

export const INTRO = {
  kicker: SITE.name,
  title: 'Placeholder headline about who you are.',
  lede:
    'Placeholder intro. A short line about what you do, where you are, and the kind of work you want people to know you for.',
};

export const ABOUT = {
  title: 'About',
  paragraphs: [
    'Placeholder bio. Swap this for a couple of sentences on where you are, what you work on, and how you got here.',
    'Another paragraph can cover interests outside of work, the tools you like, or the problems you want to spend time on.',
  ],
};

export const FOCUS = [
  {
    title: 'Engineering',
    body: 'Placeholder. Describe the kind of software you like to ship.',
  },
  {
    title: 'Product',
    body: 'Placeholder. Talk about how you think about users and craft.',
  },
  {
    title: 'Learning',
    body: 'Placeholder. Mention what you are exploring right now.',
  },
  {
    title: 'Life',
    body: 'Placeholder. A note on hobbies, people, or places that matter.',
  },
] as const;

export const PATH = [
  {
    step: '01',
    title: 'Started here',
    body: 'Placeholder. First chapter — school, first job, or how you got into this.',
  },
  {
    step: '02',
    title: 'Building now',
    body: 'Placeholder. What you spend most days on today.',
  },
  {
    step: '03',
    title: 'Next up',
    body: 'Placeholder. Where you want to go, or what you want to learn next.',
  },
] as const;

export const CONTACT = {
  title: 'Contact',
  body: 'Placeholder. Invite people to email you, or link out to work and socials later.',
};
