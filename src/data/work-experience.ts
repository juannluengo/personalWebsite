export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  image: string;
  description: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 'company-1',
    company: 'Company Name 1',
    role: 'Senior Position',
    period: '2021 - Present',
    image: '/images/companies/company1-placeholder.jpg',
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-2',
    company: 'Company Name 2',
    role: 'Mid-level Position',
    period: '2018 - 2021',
    image: '/images/companies/company2-placeholder.jpg',
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-3',
    company: 'Company Name 3',
    role: 'Junior Position',
    period: '2016 - 2018',
    image: '/images/companies/company3-placeholder.jpg',
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-4',
    company: 'Company Name 4',
    role: 'Internship',
    period: '2015 - 2016',
    image: '/images/companies/company4-placeholder.jpg',
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-5',
    company: 'Company Name 5',
    role: 'Part-time Role',
    period: '2014 - 2015',
    image: '/images/companies/company5-placeholder.jpg',
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  }
]; 