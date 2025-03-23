export interface Project {
  id: string;
  title: string;
  image: string;
  description?: string;
  technologiesUsed?: string[];
  link?: string;
  status?: string;
}

// Personal projects data
export const personalProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    image: '/images/projects/project1-placeholder.jpg',
    description: 'Description of your first project. Explain what problem it solves, what technologies you used, and what your role was in developing it.',
    technologiesUsed: ['React', 'Node.js', 'MongoDB'],
    link: 'https://project1.example.com'
  },
  {
    id: 'project-2',
    title: 'Project Two',
    image: '/images/projects/project2-placeholder.jpg',
    description: 'Description of your second project. Explain what problem it solves, what technologies you used, and what your role was in developing it.',
    technologiesUsed: ['Vue.js', 'Firebase', 'TailwindCSS'],
    link: 'https://project2.example.com'
  },
  {
    id: 'project-3',
    title: 'Project Three',
    image: '/images/projects/project3-placeholder.jpg',
    description: 'Description of your third project. Explain what problem it solves, what technologies you used, and what your role was in developing it.',
    technologiesUsed: ['Angular', 'Express', 'PostgreSQL'],
    link: 'https://project3.example.com'
  },
  {
    id: 'project-4',
    title: 'Project Four',
    image: '/images/projects/project4-placeholder.jpg',
    description: 'Description of your fourth project. Explain what problem it solves, what technologies you used, and what your role was in developing it.',
    technologiesUsed: ['Next.js', 'Supabase', 'Framer Motion'],
    link: 'https://project4.example.com'
  },
  {
    id: 'project-5',
    title: 'Project Five',
    image: '/images/projects/project5-placeholder.jpg',
    description: 'Description of your fifth project. Explain what problem it solves, what technologies you used, and what your role was in developing it.',
    technologiesUsed: ['TypeScript', 'GraphQL', 'Material UI'],
    link: 'https://project5.example.com'
  }
];

// Side projects data
export const sideProjects: Project[] = [
  {
    id: 'side-project-1',
    title: 'Side Project One',
    image: '/images/projects/side-project1-placeholder.jpg',
    status: 'In Progress',
    description: 'Description of your side project. These could be experiments, hobby projects, or work in progress.',
    technologiesUsed: ['Swift', 'SwiftUI', 'Core ML'],
    link: 'https://sideproject1.example.com'
  },
  {
    id: 'side-project-2',
    title: 'Side Project Two',
    image: '/images/projects/side-project2-placeholder.jpg',
    status: 'Completed',
    description: 'Description of your side project. These could be experiments, hobby projects, or work in progress.',
    technologiesUsed: ['Python', 'TensorFlow', 'Scikit-learn'],
    link: 'https://sideproject2.example.com'
  },
  {
    id: 'side-project-3',
    title: 'Side Project Three',
    image: '/images/projects/side-project3-placeholder.jpg',
    status: 'On Hold',
    description: 'Description of your side project. These could be experiments, hobby projects, or work in progress.',
    technologiesUsed: ['Unity', 'C#', 'Blender'],
    link: 'https://sideproject3.example.com'
  },
  {
    id: 'side-project-4',
    title: 'Side Project Four',
    image: '/images/projects/side-project4-placeholder.jpg',
    status: 'New',
    description: 'Description of your side project. These could be experiments, hobby projects, or work in progress.',
    technologiesUsed: ['Rust', 'WebAssembly', 'Three.js'],
    link: 'https://sideproject4.example.com'
  },
  {
    id: 'side-project-5',
    title: 'Side Project Five',
    image: '/images/projects/side-project5-placeholder.jpg',
    status: 'Completed',
    description: 'Description of your side project. These could be experiments, hobby projects, or work in progress.',
    technologiesUsed: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://sideproject5.example.com'
  }
];

// Achievements data
export const achievements: Project[] = [
  {
    id: 'achievement-1',
    title: 'Achievement or Publication One',
    image: '/images/achievements/achievement1-placeholder.jpg',
    description: 'Description of your achievement, certification, publication, or recognition.',
    link: 'https://achievement1.example.com'
  },
  {
    id: 'achievement-2',
    title: 'Achievement or Publication Two',
    image: '/images/achievements/achievement2-placeholder.jpg',
    description: 'Description of your achievement, certification, publication, or recognition.',
    link: 'https://achievement2.example.com'
  },
  {
    id: 'achievement-3',
    title: 'Achievement or Publication Three',
    image: '/images/achievements/achievement3-placeholder.jpg',
    description: 'Description of your achievement, certification, publication, or recognition.',
    link: 'https://achievement3.example.com'
  },
  {
    id: 'achievement-4',
    title: 'Achievement or Publication Four',
    image: '/images/achievements/achievement4-placeholder.jpg',
    description: 'Description of your achievement, certification, publication, or recognition.',
    link: 'https://achievement4.example.com'
  },
  {
    id: 'achievement-5',
    title: 'Achievement or Publication Five',
    image: '/images/achievements/achievement5-placeholder.jpg',
    description: 'Description of your achievement, certification, publication, or recognition.',
    link: 'https://achievement5.example.com'
  }
]; 