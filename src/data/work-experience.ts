export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  image: string;
  imageSize?: { width: number; height: number };
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
  link?: string;
}

// Helper function to get the correct image path based on environment
const getImagePath = (path: string): string => {
  return process.env.NODE_ENV === 'production'
    ? `/personalWebsite${path}`
    : path;
};

export const workExperiences: WorkExperience[] = [
  {
    id: 'company-1',
    company: 'Amazon',
    role: 'Project Manager Intern',
    period: 'Feb 2025 - Present',
    image: getImagePath('/images/companies/AmazonAppIcon.png'),
    imageSize: { width: 80, height: 80 },
    description: '',
    responsibilities: [
      'SQL query master',
      '360º camera whisperer and tour builder',
      'Expert Python reporter'
    ],
    achievements: [
      '',
      ''
    ],
    technologies: ['AWS', 'QuickSight', 'SQL', 'Articulate360']
  },
  {
    id: 'company-2',
    company: 'Arup',
    role: 'Software Developer Intern',
    period: 'Jul 2023 - Sep 2023',
    image: getImagePath('/images/companies/ArupAppIcon.png'),
    imageSize: { width: 80, height: 80 },
    description: 'Love moves mountains, or so they say. Lots of firsts in this internship. Learned a lot and meet really cool people.',
    responsibilities: [
      'Application interoperability boss',
      'Token integration wizzard. All smooth under my watch!',
      'ENS brain. Standards and documentations, my day to day.'
    ],
    achievements: [
      'You see the logout button and automatic emails? That was all me baby!',
      'Created 80\% of all ENS documentation and standards. Do not ask about this cause I suffered anough already.',
      'How do we meassure token security and smoothness? Well it works now and I did it so I guess I should put it here.'
    ],
    technologies: ['AWS', 'React.js', 'TypeScript', 'PostgreSQL', 'Git']
  },
  {
    id: 'company-3',
    company: 'FTX',
    role: 'Customer Support & Campus Ambassador',
    period: 'May 2021 - Nov 2022',
    image: getImagePath('/images/companies/FTXAppIcon.png'),
    imageSize: { width: 80, height: 80 },
    description: 'We all know how this ended... Turns out they didn\'t have a the smartest people in the industry. Learned a lot though! And they truly gave me a chance to grow. I admire that.',
    responsibilities: [
      'Great university negotiator',
      'Represented the company at campus events',
      'Client whisperer and app wizzard. No question was too hard'
    ],
    achievements: [
      '0to1 agrrements with IE and UFV universities',
      '23x spanish-speaking socials',
      '100% success rate in customer support',
      'Improved UX and KYC process (saved 3m/user)'
    ],
    technologies: ['UX/Ui', 'Customer Service', 'Marketing', 'Blockchain']
  },
  {
    id: 'company-4',
    company: 'IMA Groupe',
    role: 'Stagiaire Direction International',
    period: 'Jul 2022 - Sep 2022',
    image: getImagePath('/images/companies/IMAAppIcon.png'),
    imageSize: { width: 80, height: 80 },
    description: 'First real office job. Turns out working with french isn\'t as bad as they say.',
    responsibilities: [
      'Your assistant\'s best friend. Checked all DB information',
      'NFT program adaptation master',
      'Great introductor. Added a few potential clients.'
    ],
    achievements: [
      'Who wouldn\'t like a free NFT after winning a hackaton? I made it happen!',
      'You can savely go to latin america now. I made sure all our emergency contacts where still operating.'
    ],
    technologies: ['Market Research', 'Agile', 'CRM', 'French']
  }
];

export const nonTechExperiences: WorkExperience[] = [
  {
    id: 'non-tech-1',
    company: 'Tres Tapasbar Eindhoven',
    role: 'Waiter',
    period: 'Sep 2023 - Jun 2024',
    image: '',
    description: 'Worked as a waiter during my Erasmus to gain <s>MONEY</s> customer service experience.',
    link: 'https://www.trestapasbar.nl/',
    responsibilities: [
      'Bring food (and somemtimes even drinks!) to customers',
      'Pronounce spanish tapas names with a heavy english accent',
      'Smile a lot and nod intensely when people speak to me in Dutch'
    ],
    technologies: ['Memorization', 'Customer Obsession', 'Dutch accent'],
  },
  {
    id: 'non-tech-2',
    company: 'Hotel Mariënhage',
    role: 'Hotel Cleaner',
    period: 'Feb 2024 - Mar 2024',
    image: '',
    description: 'Worked as a hotel cleaner during my Erasmus to gain <s>MONEY</s> insight on hotel logistics. Left it cause my back hurt too much.',
    link: 'https://www.marienhage.com/',
    responsibilities: [
      'Ensured rooms were properly cleaned and sanitized',
      'They called me the King of the Vacuum Cleaner. I think that\s all you need to know',
      'Responded promptly to guest requests and concerns'
    ],
    technologies: ['Bleach', 'Sheet folding', 'Good jokes', 'Odor resistance'],
  },
  {
    id: 'non-tech-3',
    company: 'Personal Tutor',
    role: 'Computer Science Teacher',
    period: 'Sep 2021 - Mar 2022',
    image: '',
    description: 'Taught Python and Visual Basic (yes, I know. I\'m not proud either) concepts to <s>gain MONEY</s> help students achieve their maximum potential.',
    responsibilities: [
      'Introduced VB concepts and ideas while subtly asking them to switch to Python',
      'Taught Python superpowers to CS first year students',
      'Provided individual assistance to students requiring extra help (yes, the extra help was for free. Not everything is about money...)'
    ],
    technologies: ['Python', 'Visual Basic', 'Scripts', 'Macros'],
  },
  {
    id: 'non-tech-4',
    company: 'Some healthy products warehouse',
    role: 'Warehouse Associate',
    period: 'Nov 2024',
    image: '',
    description: 'It was just one day for Black Friday to <s>gain MONEY</s> help improve customer experience. But what a day!',
    responsibilities: [
      'Processed incoming and outgoing packages',
      'Organized inventory and maintained warehouse organization',
      'Judged customers orders'
    ],
    technologies: ['Problem solver', 'Packaging', 'Networking'],
  },
  {
    id: 'non-tech-5',
    company: 'Madrid Community',
    role: 'COVID Masks Provider',
    period: 'May 2021',
    image: '',
    description: 'Mask provider during the COVID-19 pandemic for Madrid\'s Community election to <s>gain MONEY</s> help improve voters safety.',
    link: 'https://www.20minutos.es/noticia/4658927/0/elecciones-madrid-2021-horario-personas-positivas-covid-votar-4-mayo/',
    responsibilities: [
      'Distributed masks to voters on one voting station',
      'Worked safely through the "Covid hour"',
      'Met lot of nice people and helped them to exercise their right to vote safely!'
    ],
    technologies: ['Safety provider', 'Customer attention', 'Resilience'],
  }
];