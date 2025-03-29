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
    imageSize: { width: 190, height: 30 },
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
    imageSize: { width: 170, height: 30 },
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
    role: 'Customer Support % Campus Ambassador',
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