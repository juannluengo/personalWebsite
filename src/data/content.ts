export interface ContentItem {
  id: string;
  title: string;
  image: string;
  link: string;
  subtitle?: string;
  imageSize?: { width: number; height: number };
}

export interface FeaturedTab {
  id: string;
  label: string;
}

// Skills items for the content slider
export const skillsItems: ContentItem[] = [
  {
    id: 'skill-1',
    title: 'React',
    image: '/images/projects/project1-placeholder.jpg',
    link: '/skills/react'
  },
  {
    id: 'skill-2',
    title: 'Node.js',
    image: '/images/projects/project2-placeholder.jpg',
    link: '/skills/nodejs'
  },
  {
    id: 'skill-3',
    title: 'TypeScript',
    image: '/images/projects/project3-placeholder.jpg',
    link: '/skills/typescript'
  },
  {
    id: 'skill-4',
    title: 'Next.js',
    image: '/images/projects/project4-placeholder.jpg',
    link: '/skills/nextjs'
  },
  {
    id: 'skill-5',
    title: 'TailwindCSS',
    image: '/images/projects/project5-placeholder.jpg',
    link: '/skills/tailwindcss'
  },
  {
    id: 'skill-6',
    title: 'GraphQL',
    image: '/images/projects/side-project1-placeholder.jpg',
    link: '/skills/graphql'
  },
  {
    id: 'skill-7',
    title: 'AWS',
    image: '/images/projects/side-project2-placeholder.jpg',
    link: '/skills/aws'
  },
  {
    id: 'skill-8',
    title: 'Docker',
    image: '/images/projects/side-project3-placeholder.jpg',
    link: '/skills/docker'
  }
];

// Work experience items for content slider
export const experienceItems: ContentItem[] = [
  {
    id: 'exp-1',
    title: 'Amazon',
    subtitle: 'Project Management Intern • Feb 2025 - Present',
    image: '/images/companies/amazonLogo.png',
    link: '/experience/amazon',
    imageSize: { width: 90, height: 30 }
  },
  {
    id: 'exp-2',
    title: 'Arup',
    subtitle: 'Software Developer Intern • Jul 2023 - Sep 2023',
    image: '/images/companies/arupLogo.png',
    link: '/experience/arup',
    imageSize: { width: 90, height: 30 }
  },
  {
    id: 'exp-3',
    title: 'FTX',
    subtitle: 'Customer Support & Campus Ambassador • May 2021 - Nov 2022',
    image: '/images/companies/ftxLogo.png',
    link: '/experience/ftx',
    imageSize: { width: 150, height: 50 }
  },
  {
    id: 'exp-4',
    title: 'IMA',
    subtitle: 'Stagiaire Direction International • Jul 2022 - Sep 2022',
    image: '/images/companies/imaLogo.png',
    link: '/experience/ima',
    imageSize: { width: 150, height: 50 }
  }
];

// Featured content tabs data
export const featuredTabs: FeaturedTab[] = [
  {
    id: 'featured-1',
    label: 'Featured Work'
  },
  {
    id: 'featured-2',
    label: 'About Me'
  },
  {
    id: 'featured-3',
    label: 'Contact'
  }
]; 