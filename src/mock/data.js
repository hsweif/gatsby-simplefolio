import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hsuan-Wei Fan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Hsuan-Wei Fan',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'B.E in Computer Science, Tsinghua University, Beijing, with a minor in Internet Finance and Entrepreneurship.',
  paragraphTwo:
    'Interested in human-computer interaction research, especially for virtual/augmented reality, and brain-computer interface. I hope to pursue Ph.D. degree in relevant fields.',
  paragraphThree:
    'Making efforts to step closer to a better world with innovative and accessible technology.',
  resume: 'https://drive.google.com/file/d/16m31zamIoB6VwVsXQhxovgtFjhrXvxrP/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'oralcam.jpg',
    title: 'OralCam',
    info:
      'Best paper honorable mention in ACM SIGCHI 2020. Mentored by Xiang Anthony Chen in UCLA HCI Research.',
    info2:
      'OralCam is a mobile health research that aims to contribute to the issue of ignorance to oral health due to lack of resource by enabling people to self-exam common oral symptoms with smartphones.',
    url: 'https://dl.acm.org/doi/abs/10.1145/3313831.3376238',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to contact me if you need more information. Nice to meet you!',
  btn: 'Mail to me',
  email: 'f.hsuanwei@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hsweif',
    },

    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@f.hsuanwei',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100003713956403',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/hweiphotography/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
