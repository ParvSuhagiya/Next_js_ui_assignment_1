const departmentData = [
  {
    id: 1,
    departmentId: 1,
    department: "Business Administration",
    specializationCount: 4,
    studentCount: 2,
    name: "Marketing",
    code: "BA-SPEC-01",
    description:
      "Focusing on brand building, consumer behaviour, digital campaigns, and market research.",
    academicLead: "Prof. Naina Kapoor",
    primaryCoreLab: "Marketing Lab 112",
    curriculumCycle: "2025–2026 Revised",
    students: [
      1, 4
    ] , 
  },
  {
    id: 2,
    departmentId: 1,
    department: "Business Administration",
    specializationCount: 4,
    studentCount: 2,
    name: "Finance",
    code: "BA-SPEC-02",
    description:
      "Focusing on corporate finance, investment analysis, risk management, and financial markets.",
    academicLead: "Prof. Suresh Rao",
    primaryCoreLab: "Finance Lab 204",
    curriculumCycle: "2025–2026 Revised",
    students: [
      1
    ] , 
  },
  {
    id: 3,
    departmentId: 1,
    department: "Business Administration",
    specializationCount: 4,
    studentCount: 2,
    name: "Human Resources",
    code: "BA-SPEC-03",
    description:
      "Focusing on talent management, organizational behaviour, hiring practices, and workplace policy.",
    academicLead: "Prof. Anita Desai",
    primaryCoreLab: "HR Studio 105",
    curriculumCycle: "2025–2026 Revised",
    students: [
      4
    ] , 
  },
  {
    id: 4,
    departmentId: 1,
    department: "Business Administration",
    specializationCount: 4,
    studentCount: 2,
    name: "Operations Management",
    code: "BA-SPEC-04",
    description:
      "Focusing on supply chains, logistics planning, process improvement, and business analytics.",
    academicLead: "Prof. Vikram Sethi",
    primaryCoreLab: "Operations Lab 301",
    curriculumCycle: "2025–2026 Revised",
    students: [
      1, 4
    ] , 
  },
  {
    id: 5,
    departmentId: 2,
    department: "Electrical Engineering",
    specializationCount: 4,
    studentCount: 2,
    name: "Power Systems",
    code: "EE-SPEC-01",
    description:
      "Focusing on power generation, transmission, smart grids, and energy distribution networks.",
    academicLead: "Prof. Kiran Bhatt",
    primaryCoreLab: "Power Lab 140",
    curriculumCycle: "2025–2026 Revised",
    students: [
      2, 6
    ] , 
  },
  {
    id: 6,
    departmentId: 2,
    department: "Electrical Engineering",
    specializationCount: 4,
    studentCount: 2,
    name: "Embedded Systems",
    code: "EE-SPEC-02",
    description:
      "Focusing on microcontrollers, firmware design, sensors, and real time hardware control.",
    academicLead: "Prof. Rajesh Menon",
    primaryCoreLab: "Embedded Lab 218",
    curriculumCycle: "2025–2026 Revised",
    students: [
      2
    ] , 
  },
  {
    id: 7,
    departmentId: 2,
    department: "Electrical Engineering",
    specializationCount: 4,
    studentCount: 2,
    name: "Control Systems",
    code: "EE-SPEC-03",
    description:
      "Focusing on feedback control, automation, industrial drives, and system modelling.",
    academicLead: "Prof. Smita Joshi",
    primaryCoreLab: "Control Lab 122",
    curriculumCycle: "2025–2026 Revised",
    students: [
      2, 6
    ] , 
  },
  {
    id: 8,
    departmentId: 2,
    department: "Electrical Engineering",
    specializationCount: 4,
    studentCount: 2,
    name: "Signal Processing",
    code: "EE-SPEC-04",
    description:
      "Focusing on digital filters, communication signals, image processing, and audio systems.",
    academicLead: "Prof. Pranav Kulshrestha",
    primaryCoreLab: "Signals Lab 310",
    curriculumCycle: "2025–2026 Revised",
    students: [
      6
    ] , 
  },
  {
    id: 9,
    departmentId: 3,
    department: "Biotechnology",
    specializationCount: 4,
    studentCount: 2,
    name: "Genetic Engineering",
    code: "BT-SPEC-01",
    description:
      "Focusing on gene editing, recombinant DNA, molecular cloning, and genetic analysis.",
    academicLead: "Prof. Lakshmi Narayan",
    primaryCoreLab: "Genetics Lab 101",
    curriculumCycle: "2025–2026 Revised",
    students: [
      3, 7
    ] , 
  },
  {
    id: 10,
    departmentId: 3,
    department: "Biotechnology",
    specializationCount: 4,
    studentCount: 2,
    name: "Bioinformatics",
    code: "BT-SPEC-02",
    description:
      "Focusing on sequence analysis, biological databases, computational modelling, and data tools.",
    academicLead: "Prof. Harish Pillai",
    primaryCoreLab: "Bioinformatics Lab 215",
    curriculumCycle: "2025–2026 Revised",
    students: [
      7
    ] , 
  },
  {
    id: 11,
    departmentId: 3,
    department: "Biotechnology",
    specializationCount: 4,
    studentCount: 2,
    name: "Industrial Biotechnology",
    code: "BT-SPEC-03",
    description:
      "Focusing on fermentation, bioreactors, enzyme production, and large scale bioprocessing.",
    academicLead: "Prof. Fatima Sheikh",
    primaryCoreLab: "Bioprocess Lab 128",
    curriculumCycle: "2025–2026 Revised",
    students: [
      3
    ] , 
  },
  {
    id: 12,
    departmentId: 3,
    department: "Biotechnology",
    specializationCount: 4,
    studentCount: 2,
    name: "Microbiology",
    code: "BT-SPEC-04",
    description:
      "Focusing on bacteria, viruses, culture techniques, and applied microbial research.",
    academicLead: "Prof. Gopal Verma",
    primaryCoreLab: "Microbiology Lab 109",
    curriculumCycle: "2025–2026 Revised",
    students: [
      3, 7
    ] , 
  },
  {
    id: 13,
    departmentId: 4,
    department: "Architecture",
    specializationCount: 4,
    studentCount: 2,
    name: "Urban Design",
    code: "AR-SPEC-01",
    description:
      "Focusing on city planning, public spaces, transport layouts, and community focused development.",
    academicLead: "Prof. Meenal Gokhale",
    primaryCoreLab: "Design Studio 401",
    curriculumCycle: "2025–2026 Revised",
    students: [
      5, 8
    ] , 
  },
  {
    id: 14,
    departmentId: 4,
    department: "Architecture",
    specializationCount: 4,
    studentCount: 2,
    name: "Interior Design",
    code: "AR-SPEC-02",
    description:
      "Focusing on spatial planning, furniture design, lighting, and material selection for interiors.",
    academicLead: "Prof. Rohini Dutta",
    primaryCoreLab: "Interior Studio 220",
    curriculumCycle: "2025–2026 Revised",
    students: [
      5
    ] , 
  },
  {
    id: 15,
    departmentId: 4,
    department: "Architecture",
    specializationCount: 4,
    studentCount: 2,
    name: "Landscape Architecture",
    code: "AR-SPEC-03",
    description:
      "Focusing on gardens, open spaces, ecology, and outdoor site planning.",
    academicLead: "Prof. Ashok Tendulkar",
    primaryCoreLab: "Landscape Studio 115",
    curriculumCycle: "2025–2026 Revised",
    students: [
      8
    ] , 
  },
  {
    id: 16,
    departmentId: 4,
    department: "Architecture",
    specializationCount: 4,
    studentCount: 2,
    name: "Sustainable Design",
    code: "AR-SPEC-04",
    description:
      "Focusing on green buildings, energy efficient design, recycled materials, and climate responsive planning.",
    academicLead: "Prof. Neelam Saxena",
    primaryCoreLab: "Sustainable Lab 305",
    curriculumCycle: "2025–2026 Revised",
    students: [
      5, 8
    ] , 
  },
];

export default departmentData;