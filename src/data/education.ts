export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  dates: string;
  description?: string;
  skills?: string[];
  logo: string;  // Path to logo image in /public
  iconImage: string; // Path to app icon image in /public
  status?: string; // Optional status like projects have
}

export const educationHistory: EducationItem[] = [
  {
    id: 'tue',
    institution: 'Eindhoven University of Technology (TU/e)',
    degree: "Master's degree, Computer Science",
    dates: '2023 - 2024',
    description: 'Erasmus Program with courses from the Master in Engineering Computer Science.',
    skills: ['Distributed Systems', 'LaTeX', 'Price Optimization', 'Big Data', 'Logistics Management', 'Cyber-Physical Systems', 'Nginx'],
    logo: '/images/universities/tue.png',
    iconImage: '/images/universities/tue.png',
    status: 'Completed'
  },
  {
    id: 'upm-cs',
    institution: 'Universidad Politécnica de Madrid (UPM)',
    degree: 'Bachelor of Engineering in Computer Science',
    dates: '2020 - 2025',
    description: 'Core computer science curriculum focusing on programming, algorithms, and systems architecture.',
    skills: ['C', 'Bash', 'Java', 'Algoritmos', 'SQL', 'Cálculo', 'Estructuras de datos', 'Arquitectura de sistemas'],
    logo: '/images/universities/UPM.png',
    iconImage: '/images/universities/UPM.png',
    status: 'Ongoing'
  },
  {
    id: 'upm-bba',
    institution: 'Universidad Politécnica de Madrid (UPM)',
    degree: 'Bachelor of Business Administration - BBA',
    dates: '2020 - 2025',
    description: 'Direction and Management of Information Technologies in Business',
    skills: ['Macroeconomía', 'Análisis de negocio', 'Contabilidad', 'Power BI', 'Análisis financiero'],
    logo: '/images/universities/UPM.png',
    iconImage: '/images/universities/UPM.png',
    status: 'Ongoing'
  },
  {
    id: 'sek',
    institution: 'SEK International Schools',
    degree: 'Science and Technology Baccalaureate',
    dates: '2018 - 2020',
    description: 'Technological sciences',
    skills: ['Oratory', 'Entrepreneurship', 'Technology', 'Languages'],
    logo: '/images/universities/SEK.png',
    iconImage: '/images/universities/SEKAppIcon.png',
    status: 'Completed'
  },
];
