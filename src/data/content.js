export const personal = {
  name: 'Tommy Iverson Johnson',
  title: 'Backend Software Engineer & Medical Informatics Officer',
  tagline: 'Building reliable backend systems and health information platforms across Liberia',
  location: 'Harper City, Maryland County, Liberia',
  email: 'johnsoniverson@gmail.com',
  phone: '+231 886 137 029',
  phoneAlt: '+231 778 892 288',
  linkedin: 'https://www.linkedin.com/in/tommyiversonjohnson/',
  github: 'https://github.com/tommyiversonj',
}

export const about = {
  summary:
    "I'm a Backend Software Engineer and Medical Informatics Officer with extensive experience implementing and scaling OpenMRS-based health information systems across Liberian health facilities. I design APIs, optimize workflows, and improve data quality for digital health deployments serving over 150,000 patients. ALX-trained in Python, PostgreSQL, and REST API development, I focus on practical, data-driven solutions that hold up in the field.",
  personalTouch:
    "Outside of work, I enjoy mentoring aspiring health technologists and experimenting in the kitchen.",
}

export const skills = [
  {
    category: 'Languages & Data',
    items: ['Python', 'JavaScript', 'SQL', 'PostgreSQL'],
  },
  {
    category: 'Backend & APIs',
    items: ['REST API Development', 'Django REST Framework', 'System & Workflow Configuration'],
  },
  {
    category: 'Health Informatics',
    items: ['OpenMRS', 'DHIS2', 'eLMIS'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git/GitHub', 'Linux', 'JIRA'],
  },
  {
    category: 'AI & Analytics',
    items: ['AI-Assisted Solutions', 'Data Analysis', 'Visualization & Reporting'],
  },
]

export const softSkills = [
  'Collaboration',
  'Problem-Solving',
  'Capacity Building',
  'Technical Training',
]

export const experience = [
  {
    role: 'Medical Informatics Officer',
    org: 'Partners In Health',
    location: 'Harper, Maryland County',
    dates: 'Sep 2023 – Present',
    highlights: [
      'Led OpenMRS deployment across 2 health facilities serving over 150,000 patients, improving system adoption and clinical data accuracy.',
      'Configured clinical workflows and user roles to streamline patient data management and reporting.',
      'Developed reusable scripts and contributed to OpenMRS GitHub repositories to enhance functionality and performance.',
      'Partnered with PIH Liberia and Boston teams to enhance OpenMRS system performance, reporting, and interoperability.',
    ],
  },
  {
    role: 'Medical Informatics Technical Analyst',
    org: 'Partners In Health Family Medicine',
    location: 'Harper, Maryland County',
    dates: 'Sep 2020 – Sep 2023',
    highlights: [
      'Led health informatics system design and optimization initiatives to improve data capture and reporting efficiency.',
      'Trained and mentored 40+ staff in data entry standards, workflow optimization, and use of digital health systems.',
      'Collaborated with national and international PIH teams on the design and rollout of new OpenMRS modules and forms.',
      'Contributed to informatics research and continuous improvement efforts to strengthen digital health systems and reporting accuracy.',
    ],
  },
  {
    role: 'Data Manager',
    org: 'Ministry of Health, Liberia',
    location: 'Harper, Maryland County',
    dates: 'Sep 2018 – Aug 2020',
    highlights: [
      'Managed M&E databases and ensured accurate HMIS/eLMIS data entry and validation across health facilities.',
      'Led data collection, verification, and reporting using DHIS2, ensuring data integrity and timely submission.',
      'Trained facility staff on data management procedures and supported data security and confidentiality improvements.',
      'Collaborated with the HMIS Director to optimize reporting workflows and improve national data quality standards.',
    ],
  },
]

export const projects = [
  {
    title: 'OpenMRS Config – PIH Liberia',
    description:
      'Maven-based OpenMRS configuration package for PIH Liberia. Defines custom EMR forms and clinical workflows deployed via the OpenMRS SDK, plus install/watch scripts for local development against the PIH EMR platform.',
    tech: ['Java', 'Maven', 'OpenMRS SDK', 'Shell'],
    github: 'https://github.com/tommyiversonj/openmrs-config-pihliberia',
  },
  {
    title: 'Inventory & Sales Management API',
    description:
      'ALX backend capstone project: a Django REST Framework API for tracking products, stock levels, purchases, and sales in real time. Includes token authentication, role-based permissions, atomic stock transactions, and filtering/search/ordering across endpoints.',
    tech: ['Python', 'Django REST Framework', 'PostgreSQL'],
    github: 'https://github.com/tommyiversonj/alx_be_captsone_project',
  },
  {
    title: 'Mental Health EMR Rollout',
    description:
      'Implemented a Mental Health EMR at J.J. Dossen Hospital and Pleebo Health Center, achieving 100% digital mental health data capture and replacing paper-based recordkeeping for clinical teams.',
    tech: ['OpenMRS', 'Clinical Workflow Design'],
    caseStudy: true,
  },
  {
    title: 'eLMIS & DHIS2 Data Systems',
    description:
      'Managed national eLMIS and DHIS2 systems for logistics and health reporting, improving reporting accuracy and supply chain visibility across facilities.',
    tech: ['DHIS2', 'eLMIS', 'Data Management'],
    caseStudy: true,
  },
]

export const education = [
  {
    degree: 'B.Sc. in Computer Science Engineering',
    school: 'William V.S. Tubman University, Liberia',
    dates: 'Nov 2020',
  },
  {
    degree: 'Diploma in Leadership & Management in Health',
    school: 'University of Washington (Online)',
    dates: 'Apr – Jun 2019',
  },
  {
    degree: 'Certificate in Backend Web Development',
    school: 'ALX Software Engineering Program (Online)',
    dates: 'Sep 2025',
  },
  {
    degree: 'Data Engineering Program (In Progress)',
    school: 'ALX Africa (Online)',
    dates: 'In Progress',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
