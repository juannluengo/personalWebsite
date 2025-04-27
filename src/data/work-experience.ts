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
    image: getImagePath('/images/companies/amazonLogo.png'),
    imageSize: { width: 100, height: 16 },
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.',
    responsibilities: [
      'Led cross-functional teams to deliver project milestones',
      'Managed project timelines and resources',
      'Collaborated with stakeholders to define project requirements'
    ],
    achievements: [
      'Successfully delivered project ahead of schedule',
      'Improved process efficiency by 15%'
    ],
    technologies: ['AWS', 'Jira', 'Confluence', 'Agile']
  },
  {
    id: 'company-2',
    company: 'Arup',
    role: 'Software Developer Intern',
    period: 'Jul 2023 - Sep 2023',
    image: getImagePath('/images/companies/arupLogo.png'),
    imageSize: { width: 80, height: 16 },
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.',
    responsibilities: [
      'Developed and maintained web applications',
      'Collaborated with design team to implement UI/UX improvements',
      'Participated in code reviews and quality assurance'
    ],
    achievements: [
      'Reduced application load time by 30%',
      'Implemented new features used by over 100 employees'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB']
  },
  {
    id: 'company-3',
    company: 'FTX',
    role: 'Customer Support & Campus Ambassador',
    period: 'May 2021 - Nov 2022',
    image: getImagePath('/images/companies/ftxLogo.png'),
    imageSize: { width: 400, height: 30 },
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.',
    responsibilities: [
      'Provided technical support to users',
      'Represented the company at campus events',
      'Created educational content about cryptocurrency'
    ],
    achievements: [
      'Increased campus adoption by 25%',
      'Recognized as top campus ambassador'
    ],
    technologies: ['Cryptocurrency', 'Customer Service', 'Marketing']
  },
  {
    id: 'company-4',
    company: 'IMA Groupe',
    role: 'Stagiaire Direction International',
    period: 'Jul 2022 - Sep 2022',
    image: getImagePath('/images/companies/imaLogo.png'),
    imageSize: { width: 450, height: 30 },
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.',
    responsibilities: [
      'Assisted with international business development',
      'Conducted market research for expansion opportunities',
      'Prepared reports and presentations for executive team'
    ],
    achievements: [
      'Identified new market opportunities in 3 countries',
      'Streamlined reporting process saving 5 hours per week'
    ],
    technologies: ['Market Research', 'Business Development', 'International Relations']
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