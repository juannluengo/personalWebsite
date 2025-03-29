export interface ContentItem {
  id: string;
  title: string;
  image: string;
  link: string;
  subtitle?: string;
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
    subtitle: 'Senior Software Engineer • Jan 2021 - Present',
    image: '/images/companies/amazonLogo.png',
    link: '/experience/amazon'
  },
  {
    id: 'exp-2',
    title: 'FTX',
    subtitle: 'Tech Lead • Mar 2019 - Dec 2020',
    image: '/images/companies/ftxLogo.png',
    link: '/experience/ftx'
  },
  {
    id: 'exp-3',
    title: 'IMA',
    subtitle: 'Full Stack Developer • Jun 2017 - Feb 2019',
    image: '/images/companies/imaLogo.png',
    link: '/experience/ima'
  },
  {
    id: 'exp-4',
    title: 'Arup',
    subtitle: 'Software Engineer • Aug 2015 - May 2017',
    image: '/images/companies/arupLogo.png',
    link: '/experience/arup'
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