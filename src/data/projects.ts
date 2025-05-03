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
    id: 'project-coming-soon-1',
    title: 'Coming Soon',
    image: '/images/projects/ComingSoon.png',
    description: 'An exciting new project that will be revealed soon. Stay tuned for updates!',
    technologiesUsed: ['Confidential'],
    status: 'Coming Soon'
  },
  {
    id: 'project-coming-soon-2',
    title: 'Coming Soon',
    image: '/images/projects/ComingSoon.png',
    description: 'Another innovative project currently in development. More details will be shared when ready.',
    technologiesUsed: ['Confidential'],
    status: 'Coming Soon'
  },
  {
    id: 'points',
    title: 'Points',
    image: '/images/projects/PointsAppIcon.png',
    description: 'An Apple Watch app initially developed for measuring padel points, which evolved to support tracking for various sports. The app provides real-time scoring and statistics for players who want to keep track of their performance.',
    technologiesUsed: ['Swift', 'WatchKit', 'iOS Development', 'SwiftUI'],
    status: 'Released',
    link: 'https://github.com/juannluengo/sportCountTracker.git'
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
    technologiesUsed: ['Swift', 'SwiftUI', 'Core ML']
  },
  {
    id: 'side-project-2',
    title: 'Side Project Two',
    image: '/images/projects/side-project2-placeholder.jpg',
    status: 'Completed',
    description: 'Description of your side project. These could be experiments, hobby projects, or work in progress.',
    technologiesUsed: ['Python', 'TensorFlow', 'Scikit-learn']
  },
  {
    id: 'side-project-3',
    title: 'Side Project Three',
    image: '/images/projects/side-project3-placeholder.jpg',
    status: 'On Hold',
    description: 'Description of your side project. These could be experiments, hobby projects, or work in progress.',
    technologiesUsed: ['Unity', 'C#', 'Blender']
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