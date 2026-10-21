const students = [
  {
    id: 1,
    initials: "MI",
    studentId: "STU-2041",
    name: "Meera Iyer",
    status: "Active Student",
    department: "Business Administration",
    studyYear: "3rd Year (Junior)",
    email: "meera.iyer@gmail.com",
    enrolled: "Fall 2023",
    about:
      "Curious business student who likes brand strategy, consumer behaviour, and running small campus marketing projects. Wants to start her own label one day.",
    academicDetails: {
      department: "Business Administration",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "BA-301",
        name: "Marketing Management",
        category: "Marketing",
      },
      {
        code: "BA-302",
        name: "Corporate Finance",
        category: "Finance",
      },
      {
        code: "BA-303",
        name: "Organizational Behaviour",
        category: "People",
      },
    ],
  },
  {
    id: 2,
    initials: "AN",
    studentId: "STU-2042",
    name: "Arjun Nair",
    status: "Active Student",
    department: "Electrical Engineering",
    studyYear: "4th Year (Senior)",
    email: "arjun.nair@gmail.com",
    enrolled: "Fall 2022",
    about:
      "Final year electrical student interested in smart grids and power distribution. Spends most weekends in the lab fixing old motors and inverters.",
    academicDetails: {
      department: "Electrical Engineering",
      currentStanding: "Excellent Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "EE-401",
        name: "Power Systems Analysis",
        category: "Power",
      },
      {
        code: "EE-402",
        name: "Microcontrollers & Embedded Design",
        category: "Embedded",
      },
      {
        code: "EE-403",
        name: "Control Systems",
        category: "Control",
      },
    ],
  },
  {
    id: 3,
    initials: "SQ",
    studentId: "STU-2043",
    name: "Sana Qureshi",
    status: "Active Student",
    department: "Biotechnology",
    studyYear: "2nd Year (Sophomore)",
    email: "sana.qureshi@gmail.com",
    enrolled: "Fall 2024",
    about:
      "Second year biotech student fascinated by microbes, fermentation, and lab research. Likes reading research papers and helping juniors with practicals.",
    academicDetails: {
      department: "Biotechnology",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "BT-201",
        name: "Cell Biology",
        category: "Biology",
      },
      {
        code: "BT-202",
        name: "Biochemistry",
        category: "Chemistry",
      },
      {
        code: "BT-203",
        name: "Microbiology",
        category: "Microbes",
      },
    ],
  },
  {
    id: 4,
    initials: "DM",
    studentId: "STU-2044",
    name: "Dev Malhotra",
    status: "Exchange Student",
    department: "Business Administration",
    studyYear: "3rd Year (Junior)",
    email: "dev.malhotra@gmail.com",
    enrolled: "Fall 2023",
    about:
      "Business student focused on analytics and supply chains. Currently on an exchange semester and enjoys turning messy spreadsheets into clear decisions.",
    academicDetails: {
      department: "Business Administration",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "BA-301",
        name: "Business Analytics",
        category: "Analytics",
      },
      {
        code: "BA-302",
        name: "Operations Management",
        category: "Operations",
      },
      {
        code: "BA-303",
        name: "Business Law",
        category: "Law",
      },
    ],
  },
  {
    id: 5,
    initials: "IB",
    studentId: "STU-2045",
    name: "Ishita Bose",
    status: "Active Student",
    department: "Architecture",
    studyYear: "3rd Year (Junior)",
    email: "ishita.bose@gmail.com",
    enrolled: "Fall 2023",
    about:
      "Architecture student who loves sketching old buildings and designing small community spaces. Interested in heritage conservation and public design.",
    academicDetails: {
      department: "Architecture",
      currentStanding: "Excellent Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "AR-301",
        name: "Architectural Design Studio",
        category: "Studio",
      },
      {
        code: "AR-302",
        name: "Building Materials",
        category: "Materials",
      },
      {
        code: "AR-303",
        name: "Urban Planning",
        category: "Planning",
      },
    ],
  },
  {
    id: 6,
    initials: "FA",
    studentId: "STU-2046",
    name: "Farhan Ali",
    status: "Active Student",
    department: "Electrical Engineering",
    studyYear: "4th Year (Senior)",
    email: "farhan.ali@gmail.com",
    enrolled: "Fall 2022",
    about:
      "Electrical student working on solar charging projects and signal processing. Likes building small prototypes and competing in hardware hackathons.",
    academicDetails: {
      department: "Electrical Engineering",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "EE-401",
        name: "Digital Signal Processing",
        category: "Signals",
      },
      {
        code: "EE-402",
        name: "Power Electronics",
        category: "Electronics",
      },
      {
        code: "EE-403",
        name: "Renewable Energy Systems",
        category: "Energy",
      },
    ],
  },
  {
    id: 7,
    initials: "TD",
    studentId: "STU-2047",
    name: "Tanvi Deshmukh",
    status: "Active Student",
    department: "Biotechnology",
    studyYear: "3rd Year (Junior)",
    email: "tanvi.deshmukh@gmail.com",
    enrolled: "Fall 2023",
    about:
      "Biotech student interested in genetics and computational biology. Enjoys combining lab results with simple data analysis scripts.",
    academicDetails: {
      department: "Biotechnology",
      currentStanding: "Excellent Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "BT-301",
        name: "Genetic Engineering",
        category: "Genetics",
      },
      {
        code: "BT-302",
        name: "Bioinformatics",
        category: "Computation",
      },
      {
        code: "BT-303",
        name: "Immunology",
        category: "Immunity",
      },
    ],
  },
  {
    id: 8,
    initials: "RK",
    studentId: "STU-2048",
    name: "Rohan Kulkarni",
    status: "Active Student",
    department: "Architecture",
    studyYear: "4th Year (Senior)",
    email: "rohan.kulkarni@gmail.com",
    enrolled: "Fall 2022",
    about:
      "Senior architecture student focused on green buildings and landscape planning. Likes model making and long site visits.",
    academicDetails: {
      department: "Architecture",
      currentStanding: "Good Academic Standing",
    },
    enrolledSubjects: [
      {
        code: "AR-401",
        name: "Sustainable Architecture",
        category: "Sustainability",
      },
      {
        code: "AR-402",
        name: "Landscape Design",
        category: "Landscape",
      },
      {
        code: "AR-403",
        name: "Building Services",
        category: "Services",
      },
    ],
  },
];



export default students ; 
