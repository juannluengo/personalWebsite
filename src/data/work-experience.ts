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
      '',
      ''
    ],
    technologies: ['Market Research', 'Agile', 'CRM', 'French']
  }
];

export const nonTechExperiences: WorkExperience[] = [
  {
    id: 'non-tech-1',
    company: 'La Bodeguilla Del Gato',
    role: 'Waiter',
    period: 'Jun 2021 - Aug 2021',
    image: getImagePath('/images/companies/default-logo.png'),
    description: 'Worked as a waiter during summer to gain customer service experience and earn extra income.',
    responsibilities: [
      'Provided excellent customer service to restaurant patrons',
      'Managed orders and coordinated with kitchen staff',
      'Handled cash transactions and maintained cleanliness standards'
    ]
  },
  {
    id: 'non-tech-2',
    company: 'NH Hotels',
    role: 'Hotel Cleaner',
    period: 'Jul 2020 - Sep 2020',
    image: getImagePath('/images/companies/default-logo.png'),
    description: 'Summer job focusing on maintaining high cleanliness standards in a hotel environment.',
    responsibilities: [
      'Ensured rooms and common areas were properly cleaned and sanitized',
      'Managed cleaning supplies inventory',
      'Responded promptly to guest requests and concerns'
    ]
  },
  {
    id: 'non-tech-3',
    company: 'Academia Cervantes',
    role: 'Computer Science Teacher',
    period: 'Sep 2019 - Jun 2020',
    image: getImagePath('/images/companies/default-logo.png'),
    description: 'Taught basic computer science concepts to elementary and middle school students.',
    responsibilities: [
      'Developed curriculum and lesson plans for introductory programming',
      'Guided students through hands-on projects using Scratch and basic HTML',
      'Provided individual assistance to students requiring extra help'
    ],
    technologies: ['Scratch', 'HTML/CSS', 'Basic JavaScript']
  },
  {
    id: 'non-tech-4',
    company: 'DHL',
    role: 'Warehouse Associate',
    period: 'Dec 2018 - Feb 2019',
    image: getImagePath('/images/companies/default-logo.png'),
    description: 'Seasonal position handling warehouse operations during holiday rush period.',
    responsibilities: [
      'Processed incoming and outgoing packages',
      'Organized inventory and maintained warehouse organization',
      'Assisted with loading and unloading delivery vehicles'
    ]
  },
  {
    id: 'non-tech-5',
    company: 'Madrid Community',
    role: 'COVID Masks Provider',
    period: 'Apr 2020 - Jun 2020',
    image: getImagePath('/images/companies/default-logo.png'),
    description: 'Volunteer position during the COVID-19 pandemic for Madrid\'s Community election.',
    responsibilities: [
      'Distributed masks and other PPE to polling stations and voters',
      'Ensured compliance with COVID-19 safety protocols',
      'Assisted in organizing sanitization schedules and procedures'
    ],
    achievements: [
      'Helped ensure safe voting conditions during a critical election period',
      'Coordinated with multiple polling stations to optimize PPE distribution'
    ]
  }
];