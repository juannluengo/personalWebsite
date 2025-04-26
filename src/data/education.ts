export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  dates: string;
  description?: string;
  skills?: string[];
  logo?: string; // Optional: path to logo image in /public
}

export const educationHistory: EducationItem[] = [
  {
    id: 'tue',
    institution: 'Eindhoven University of Technology (TU/e)',
    degree: "Master's degree, Ingeniería informática",
    dates: 'Sep 2023 - Jul 2024',
    description: 'Erasmus Program with courses from the Master in Computer Science and Master of Industrial Engineering.',
    skills: ['Distributed Systems', 'LaTeX', 'Price Optimization', 'Big Data', 'Logistics Management', 'Cyber-Physical Systems', 'Nginx'],
    // logo: '/images/logos/tue.png' // Add logo path if available
  },
  {
    id: 'upm-cs',
    institution: 'Universidad Politécnica de Madrid (UPM)',
    degree: 'Bachelor of Engineering in Computer Science',
    dates: '2020 - 2025',
    skills: ['C', 'Bash', 'Java', 'Algoritmos', 'SQL', 'Cálculo', 'Estructuras de datos', 'Arquitectura de sistemas'],
    // logo: '/images/logos/upm.png' // Add logo path if available
  },
  {
    id: 'upm-bba',
    institution: 'Universidad Politécnica de Madrid (UPM)',
    degree: 'Bachelor of Business Administration - BBA',
    dates: '2020 - 2025',
    description: 'Direction and Management of Information Technologies in Business',
    skills: ['Macroeconomía', 'Análisis de negocio', 'Contabilidad', 'Power BI', 'Análisis financiero'],
    // logo: '/images/logos/upm.png' // Add logo path if available
  },
  {
    id: 'sek',
    institution: 'SEK International Schools',
    degree: 'Bachillerato de Ciencias y Tecnología',
    dates: '2018 - 2020',
    description: 'Successfully completed the national and international system (PAI) simultaneously. Focused on the branch of technological science during the last two high school courses.',
    // logo: '/images/logos/sek.png' // Add logo path if available
  },
];
