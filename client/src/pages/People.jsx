import React, { useState } from 'react';
import { Mail, Phone, Award, BookOpen, Users, Search, GraduationCap, Building, User, Link as LinkIcon, Download, MapPin, ExternalLink } from 'lucide-react';

const People = () => {
  const [activeTab, setActiveTab] = useState('regularFaculty');
  const [searchTerm, setSearchTerm] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('All');

  // --- Faculty Data ---
  const regularFaculty = [
    {
      name: 'Dr. Gourab Sil',
      designation: 'Assistant Professor & Head of Department',
      specialization: 'Transportation Systems Engineering',
      education: '',
      experience: '',
      email: 'hodce@iiti.ac.in , gourabsil@iiti.ac.in',
      phone: '0731-660 3360 , +91 8268364346',
      room: '405, POD 1D',
      image: '/assets/faculty_pics/Gourab.jpg',
      research: [
        'Performance Based Geometric Design of Highways',
        'Safety of Roadway Infrastructure',
        'Effects of Highway Infrastructure on Driver Behavior',
        'Applications of Statistical Analysis in Transportation Engineering',
        'Traffic Engineering',
      ],
      publications: 0,
      projects: 0,
      url: "https://gourabsil.profiles.iiti.ac.in/",
    },
    {
      name: 'Dr. Sandeep Chaudhary',
      designation: 'Professor (HAG)',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'schaudhary@iiti.ac.in',
      phone: '0731-660 3256/3469 , +91 9414475375 , +91 9549654195',
      room: '403, POD 1D',
      image: '/assets/faculty_pics/Sandeep.jpeg',
      research: [
        'Structural Engineering',
        'Sustainable Construction Practices',
        'Composite Bridges',
        'Novel Bricks and Blocks',
        'Microstructure and Durability of Concrete',
        'Advanced Characterisation Techniques',
      ],
      publications: 0,
      projects: 0,
      url: "https://sustainableconstructionlab.com/",
    },
    {
      name: 'Dr. Neelima Satyam D',
      designation: 'Professor (Institute Chair Professor)',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'neelima.satyam@iiti.ac.in',
      phone: '0731-660 3290 , +91 9440488034',
      room: '418, POD 1D',
      image: '/assets/faculty_pics/neelime.jpeg',
      research: [
        'Geotechnical Earthquake Engineering',
        'Dynamic Soil Structure Interaction Analysis',
        'Liquefaction Hazard and Mitigation',
        'Environmental Geotechnics',
        'Landslide Research',
        'Rock Mechanics and Underground Structures',
      ],
      publications: 0,
      projects: 0,
      url: "https://people.iiti.ac.in/~neelima.satyam/"
    },
    {
      name: 'Dr. Manish Kumar Goyal',
      designation: 'Professor (Chair Professor- BIS Standardization)',
      specialization: 'Water Resources Engineering',
      education: '',
      experience: '',
      email: 'mkgoyal@iiti.ac.in',
      phone: '0731-660 3288',
      room: '209, POD 1A',
      image: '/assets/faculty_pics/mkgoyal.jpg',
      research: [
        'Resilience of River Basins and Hydrological Modeling',
        'Hydro-climatology and Statistical Downscaling',
        'Irrigation Management and Crop Modeling Applications',
        'Multivariate Statistical Analysis, Machine Learning Models and Data Mining',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/mkg1/home"
    },
    // --- ADDED NEW FACULTY MEMBER ---
    {
      name: 'Dr. Mohd. Farooq Azam',
      designation: 'Associate Professor',
      specialization: 'Water Resources Engineering',
      education: 'Ph.D. (University of Grenoble, France)',
      experience: '',
      email: 'farooqazam@iiti.ac.in',
      phone: '0731-660 3289 , +91 84760 85786',
      room: '310, POD 1D',
      image: '/assets/faculty_pics/Photo-Farooq.jpg', // Placeholder path
      research: [
        'Hydro-Meteorological monitoring',
        'Glacier Mass and Dynamic studies',
        'Energy Balance of Glacier and Snow Cover',
        'Hydrological modelling of Himalayan Watersheds',
        'Climate Change impacts on Himalayan Water Resources',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/mohdfarooqazam/home"
    },
    // --------------------------------
    {
      name: 'Dr. Lalit Borana',
      designation: 'Associate Professor',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'lalitborana@iiti.ac.in',
      phone: '0731-660 3332',
      room: '407, POD 1D',
      image: '/assets/faculty_pics/Lalit_Borana.jpg',
      research: [
        'Unsaturated Soil Mechanics',
        'Geotechnical health monitoring',
        'Soil-Structure Interaction',
        'Soft Soil and Creep',
        'Ground Improvement Technics',
        'Environmental Geotechnics',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/site/lalitborana/"
    },
    {
      name: 'Dr. Abhishek Rajput',
      designation: 'Associate Professor',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'abhishekrajput@iiti.ac.in',
      phone: '0731-660 3310',
      room: '616, POD 1D',
      image: '/assets/faculty_pics/abhishekrajput.jpg',
      research: [
        'Behavior of concrete and metals under projectile impact and blast loading',
        'Finite element modelling and simulations',
        'Large deformations of concrete at low, medium and high strain rates',
        'Structural crash-worthiness',
        'Influence of corrosion on the mechanical properties of structural steel',
      ],
      publications: 0,
      projects: 0,
      url: "https://people.iiti.ac.in/~abhishekrajput/"
    },
    {
      name: 'Dr. Kaustav Bakshi',
      designation: 'Assistant Professor , DUGC',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'kaustav.bakshi@iiti.ac.in',
      phone: '0731-660 3233',
      room: '314, POD 1D',
      image: '/assets/faculty_pics/Kaustav.png',
      research: [
        'Static and dynamic studies on laminated composite shell roofs',
        'First and progressive ply failure studies',
        'Finite element method; Geometric nonlinearity',
        'Hygrothermal analysis of laminated composites',
        'Shear deformations in laminated composites',
        'Nonlinear buckling analysis',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/kaustavbakshi/home"
    },
    {
      name: 'Dr. Guru Prakash',
      designation: 'Assistant Professor',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'guruprakash@iiti.ac.in',
      phone: '0731-660 3215',
      room: '313, POD 1D',
      image: '/assets/faculty_pics/GuruFinal.jpg',
      research: [
        'Stochastic degradation modeling using condition monitoring data',
        'Bayesian reliability assessment',
        'Damage detection and prognosis',
        'Fatigue reliability',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/guruprakash/home?authuser=0"
    },
    {
      name: 'Dr. Priyansh Singh',
      designation: 'Assistant Professor',
      specialization: 'Transportation Systems Engineering',
      education: '',
      experience: '',
      email: 'priyansh@iiti.ac.in',
      phone: '0731-660 3362',
      room: '311, POD 1D',
      image: '/assets/faculty_pics/Priyansh.jpg',
      research: [
        'Pavement Materials Characterization and Modeling',
        'Pavement Design, Construction and Evaluation',
        'Pavement Recycling',
        'Innovative Materials and Technologies in Pavement Engineering',
        'Rheology',
        'Maintenance and Rehabilitation of Pavements',
      ],
      publications: 0,
      projects: 0,
      url: "https://priyanshsingh.com/"
    },
    {
      name: 'Dr. Ashootosh Mandpe',
      designation: 'Assistant Professor',
      specialization: 'Environmental Engineering',
      education: '',
      experience: '',
      email: 'as_mandpe@iiti.ac.in',
      phone: '0731-660 3257',
      room: '316, POD 1D',
      image: '/assets/faculty_pics/Ashootosh Passport_Dark Background.JPG',
      research: [
        'Bio-valorization of solid wastes',
        'Municipal landfill remediation through biomining approaches',
        'Advanced wastewater treatment technologies',
        'Circular economy practices',
        'Lifecycle and Social lifecycle assessment of environmental systems',
        'Geospatial technologies for integrated waste management',
        'Remediation of persistent organic pollutants',
      ],
      publications: 0,
      projects: 0,
      url: "https://ashootoshmandpe.profiles.iiti.ac.in/"
    },
    {
      name: 'Dr. Priyank J. Sharma',
      designation: 'Assistant Professor , DPGC',
      specialization: 'Water Resources Engineering',
      education: '',
      experience: '',
      email: 'priyanksharma@iiti.ac.in',
      phone: '0731-660 3382',
      room: '422, POD-1D',
      image: '/assets/faculty_pics/Dr. Priyank J Sharma.jpg',
      research: [
        'Hydroclimatology and Climate Extremes',
        'Climate Change Impact on Water Resources',
        'Hydroinformatics',
        'Improving Hydrologic Predictions using AI/ML',
        'Hydrological and Flood Modelling',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/priyank2306"
    },
    {
      name: 'Dr. Mayur Shirish Jain',
      designation: 'Assistant Professor',
      specialization: 'Environmental Engineering',
      education: '',
      experience: '',
      email: 'mayur.jain@iiti.ac.in',
      phone: '0731-660 3384',
      room: '605, POD 1A',
      image: '/assets/faculty_pics/M S JAIN.jpg',
      research: [
        'Rapid Composting Techniques',
        'Kinetic modelling of Bio-waste degradation',
        'Circular economy in environmental engineering',
        'Soil Revitalization via waste utilization',
        'C&D Waste quantification and environmental risks',
        'Techno-economic and sustainability assessment',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/mayur-shirish-jain"
    },
    {
      name: 'Dr. Akshay Pratap Singh',
      designation: 'Assistant Professor',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'apsingh@iiti.ac.in',
      phone: '0731-660 5171 , +91-9454208610',
      room: 'Lab Complex Room No. 18',
      image: '/assets/faculty_pics/Dr. Akshay Photo.JPG',
      research: [
        'Numerical Modeling in Geomechanics',
        'Analysis of Slopes, Retaining walls, Sheet Piles, Shallow Foundations, Pile Foundations',
        'Lower and Upper Bound Methods in Limit Analysis',
        'Geotechnical Earthquake Engineering',
        'Liquefaction',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/apsingh/bio?authuser=0"
    },
    {
      name: 'Dr. Baadiga Ramu',
      designation: 'Assistant Professor',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'baadigaramu@iiti.ac.in',
      phone: '0731-660 5170 , +91-7675015763',
      room: 'Lab Complex Room No. 16',
      image: '/assets/faculty_pics/Dr Baadiga Ramu.jpg',
      research: [
        'Geosynthetic Engineering',
        'Pavement Geotechnics',
        'Ground Improvement',
        'Geotechnical Engineering',
        'AI-ML for Geotechnical Engineering',
        'Nature Inspired Geotechnics',
      ],
      publications: 0,
      projects: 0,
      url: "https://sites.google.com/view/ramubaadiga/"
    },
    {
      name: 'Dr. Ravinder',
      designation: 'Assistant Professor',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'ravinder@iiti.ac.in',
      phone: '0731-660 5279',
      room: 'Lab Complex Room No. 17',
      image: '/assets/faculty_pics/ravinder.png',
      research: [
        'Structural Health Monitoring',
        'Ballistic Impact and Fracture Simulations',
        'Finite Element Modelling and Simulations',
        'Generative Structural Design Using ML',
        'System Identification',
        'ML/AI for Structural Engineering',
      ],
      publications: 0,
      projects: 0,
      url: "https://ravinderbhattoo.github.io/"
    },
    {
      name: 'Dr. Pushpa Choudhary',
      designation: 'Assistant Professor',
      specialization: 'Transportation Systems Engineering',
      education: '',
      experience: '',
      email: 'pushpa@iiti.ac.in',
      phone: '0731-660 5172',
      room: '402, POD-1C',
      image: '/assets/faculty_pics/Pushpa.jpg',
      research: [
        'Human factors in road safety',
        'Vulnerable road users\' behaviour and safety',
        'Intelligent transportation systems',
        'Naturalistic and VR studies',
        'Risk assessment and statistical modelling',
      ],
      publications: 0,
      projects: 0,
      url: "https://choudharypushpa.github.io/HumanFRSTLab/pages/team/faculty/pushpa.html"
    },
  ];

  const specializations = ['All', ...new Set(regularFaculty.map(f => f.specialization))];

  // --- Staff Data ---
  const staff = [
    {
      name: 'Ms. Rinki Seth',
      designation: 'Senior Assistant',
      department: 'Administration',
      experience: '',
      email: 'ceoffice@iiti.ac.in  ,   rinki@iiti.ac.in',
      phone: '0731-660 3477',
      image: '/assets/staff pics/Rinki.jpg',
      responsibilities: [],
    },
    {
      name: 'Ms. Divya Bangar',
      designation: 'Junior Superintendent',
      department: 'Administration',
      experience: '',
      email: 'ceoffice@iiti.ac.in  ,   divya@iiti.ac.in',
      phone: '0731-660 3477',
      image: '/assets/staff pics/Divya.jpeg',
      responsibilities: [],
    },
    {
      name: 'Mr. Amit Jadhav',
      designation: 'Junior Technical Superintendent',
      department: 'Laboratory Management',
      experience: '',
      email: 'jadhavamit@iiti.ac.in',
      phone: '0731-660 3411',
      image: '/assets/staff pics/Amit.jpg',
      responsibilities: [],
    },
    {
      name: 'Mr. Ajay Malviya',
      designation: 'Junior Assistant (Lab)',
      department: 'Laboratory Management',
      experience: '',
      email: 'amalviya@iiti.ac.in',
      phone: '0731-660 3412',
      image: '/assets/staff pics/Ajay.jpg',
      responsibilities: [],
    },
    {
      name: 'Mr. Pankaj Sankhla',
      designation: 'Junior Assistant (Lab)',
      department: 'Laboratory Management',
      experience: '',
      email: 'sankhlapankaj@iiti.ac.in',
      phone: '0731-660 5590',
      image: '/assets/staff pics/Pankaj.jpg',
      responsibilities: [],
    },
    {
      name: 'Mr. Ghanshyam Kachneriya',
      designation: 'Junior Assistant (Lab)',
      department: 'Laboratory Management',
      experience: '',
      email: 'gkachneriya@iiti.ac.in',
      phone: '0731-660 5591',
      image: '/assets/staff pics/Ghanshyam.jpg',
      responsibilities: [],
    },
    {
      name: 'Mr. Awadhesh Verma',
      designation: 'Office Attendant',
      department: 'Administration',
      experience: '',
      email: 'avadeshv@iiti.ac.in',
      phone: '',
      image: '/assets/staff pics/Awadhesh.jpg',
      responsibilities: [],
    },
  ];

  // --- Student Data ---
  const phdStudents = [
    { name: 'Aadarsh Singh', image: '/assets/stu_images/phd/Aadarsh Singh.jpg', email: 'phd2401104002@iiti.ac.in' },
    { name: 'Achala Singh', image: '/assets/stu_images/phd/Achala Singh (PhD).jpg', email: 'phd2201104002@iiti.ac.in' },
    { name: 'Ajay Kumar Mishra', image: '/assets/stu_images/phd/Ajay Kumar Mishra.jpg', email: 'phd2501104001@iiti.ac.in' },
    { name: 'Akash Paradkar', image: '/assets/stu_images/phd/Akash Paradkar(PhD).jpg', email: 'phd2401104001@iiti.ac.in' },
    { name: 'Akshay', image: '/assets/stu_images/phd/Akshay.jpg', email: 'phd2301204011@iiti.ac.in' },
    { name: 'Alok Sharma', image: '/assets/stu_images/phd/Alok Sharma (PhD).jpg', email: 'phd2401104003@iiti.ac.in' },
    { name: 'Anish Chandra', image: '/assets/stu_images/phd/Anish Chandra.jpg', email: 'phd2401204001@iiti.ac.in' },
    { name: 'Ankit Kumar Kumawat', image: '/assets/stu_images/phd/Ankit Kumar Kumawat.jpg', email: 'phd2301104003@iiti.ac.in' },
    { name: 'Anshul', image: '/assets/stu_images/phd/Anshul.jpg', email: 'phd2101204010@iiti.ac.in' },
    { name: 'Arpita', image: '/assets/stu_images/phd/Arpita.jpg', email: 'phd2301104003@iiti.ac.in' },
    { name: 'Ashish Giri', image: '/assets/stu_images/phd/Ashish Giri.jpg', email: 'phd2201204001@iiti.ac.in' },
    { name: 'Ashok Kumar', image: '/assets/stu_images/phd/Ashok Kumar.jpg', email: 'phd2501104002@iiti.ac.in' },
    // { name: '', image: '/assets/stu_images/phd/ASTHA SHARMA (PhD).jpg', email: 'phd2101204001@iiti.ac.in' },
    { name: 'ASTHA SHARMA', image: '/assets/stu_images/phd/astha.jpg', email: 'phd2301204008@iiti.ac.in' },
    { name: 'Bodhanam S Praveen', image: '/assets/stu_images/phd/Bodhanam.jpg', email: 'phd2401104005@iiti.ac.in' },
    { name: 'Deepak Mishra', image: '/assets/stu_images/phd/Deepak Mishra (PhD).jpg', email: 'phd2301104004@iiti.ac.in' },
    { name: 'Denis Jangeed', image: '/assets/stu_images/phd/Denis Jangeed.jpg', email: 'phd2501104016@iiti.ac.in' },
    { name: 'Devendra Dohare', image: '/assets/stu_images/phd/Devendra Dohare.jpg', email: 'phd2501104003@iiti.ac.in' },
    { name: 'Gaurav Pandey', image: '/assets/stu_images/phd/Gaurav Pandey.jpg', email: 'phd2501104005@iiti.ac.in' },
    { name: 'Gaurav Sharma', image: '/assets/stu_images/phd/Gaurav Sharma(PhD).jpg', email: 'phd2301204001@iiti.ac.in' },
    { name: 'Gaurav Yadav', image: '/assets/stu_images/phd/Gaurav Yadav.jpg', email: 'phd2401204005@iiti.ac.in' },
    { name: 'Ghulam Hussain', image: '/assets/stu_images/phd/Ghulam Hussain (PhD).jpg', email: 'phd2401104007@iiti.ac.in' },
    { name: 'Gourav Agrawal', image: '/assets/stu_images/phd/Gourav Agrawal (PhD).jpg', email: 'phd2401104006@iiti.ac.in' },
    { name: 'Govind Kumar Bharti', image: '/assets/stu_images/phd/Govind Kumar Bharti.jpg', email: 'phd2501104004@iiti.ac.in' },
    { name: 'Gyanesh', image: '/assets/stu_images/phd/Gyanesh.jpg', email: 'phd2101104007@iiti.ac.in' },
    { name: 'Harshvardhan Solanki', image: '/assets/stu_images/phd/Harshvardhan Solanki (PhD).jpg', email: 'phd2301104009@iiti.ac.in' },
    { name: 'Himanshu', image: '/assets/stu_images/phd/Himanshu.jpg', email: 'phd2301104004@iiti.ac.in' },
    { name: 'Himanshu Kaushik', image: '/assets/stu_images/phd/Himanshu Kaushik.jpg', email: 'phd2101104002@iiti.ac.in' },
    { name: 'Himanshu Soni', image: '/assets/stu_images/phd/Himanshu Soni.jpg', email: 'phd2501104006@iiti.ac.in' },
    { name: 'Hussain', image: '/assets/stu_images/phd/Hussain.jpg', email: 'phd2301204005@iiti.ac.in' },
    { name: 'Jatin Garhekar', image: '/assets/stu_images/phd/Jatin Garhekar (PhD).jpg', email: 'phd2401104009@iiti.ac.in' },
    { name: 'Jitendra Wamanrao Mathankar', image: '/assets/stu_images/phd/Jitendra Mathankar (PhD).jpg', email: 'phd2401104022@iiti.ac.in' },
    { name: 'Kajol Kankane', image: '/assets/stu_images/phd/Kajol Kankane (PhD).jpg', email: 'phd2201104007@iiti.ac.in' },
    { name: 'Kameshwar Singh Nim', image: '/assets/stu_images/phd/Kameshwar Singh Nim.jpg', email: 'phd2301104005@iiti.ac.in' },
    { name: 'Karnati', image: '/assets/stu_images/phd/Karnati.jpg', email: 'phd2201104005@iiti.ac.in' },
    { name: 'Kuldeep', image: '/assets/stu_images/phd/Kuldeep.jpg', email: 'phd2301204003@iiti.ac.in' },
    { name: 'Kunal', image: '/assets/stu_images/phd/Kunal.jpg', email: 'phd2101204011@iiti.ac.in' },
    { name: 'Kushal Jagdish Patil', image: '/assets/stu_images/phd/Kushal Patil.jpg', email: 'phd2401104010@iiti.ac.in' },
    { name: 'Mahaveer Singh Dangi ', image: '/assets/stu_images/phd/Mahaveer Singh Dangi (PhD).jpg', email: 'phd2401104011@iiti.ac.in' },
    { name: 'Manish Yadav ', image: '/assets/stu_images/phd/Manish Yadav (PhD).jpg', email: 'phd2201204003@iiti.ac.in' },
    { name: 'Mayank Upadhyay', image: '/assets/stu_images/phd/Mayank Upadhyay.jpg', email: 'phd2401104012@iiti.ac.in' },
    { name: 'Md Arif Hussain', image: '/assets/stu_images/phd/Md Arif Hussain.jpg', email: 'phd2001104001@iiti.ac.in' },
    { name: 'Meghna', image: '/assets/stu_images/phd/Meghna.jpg', email: 'phd2101104006@iiti.ac.in' },
    { name: 'Minu', image: '/assets/stu_images/phd/Minu.jpg', email: 'phd2101204004@iiti.ac.in' },
    { name: 'Mohd', image: '/assets/stu_images/phd/Mohd.jpg', email: 'phd2101104002@iiti.ac.in' },
    { name: 'Mohd Atif', image: '/assets/stu_images/phd/Mohd Atif.jpg', email: 'phd2001104002@iiti.ac.in' },
    { name: 'Moirangthem', image: '/assets/stu_images/phd/Moirangthem.jpg', email: 'phd2101204009@iiti.ac.in' },
    { name: 'KMonika', image: '/assets/stu_images/phd/Monika.jpg', email: 'phd2301204009@iiti.ac.in' },
    { name: 'MUKUL', image: '/assets/stu_images/phd/MUKUL.jpg', email: 'phd2301104005@iiti.ac.in' },
    { name: 'Naveen Kumar', image: '/assets/stu_images/phd/Naveen Kumar (PhD).jpg', email: 'phd2001104002@iiti.ac.in' },
    { name: 'Nikhil Kumar Pandey', image: '/assets/stu_images/phd/Nikhil Pandey (PhD).jpg', email: 'phd2301104002@iiti.ac.in' },
    { name: 'Nikhil', image: '/assets/stu_images/phd/Nikhil.jpg', email: 'phd2201104004@iiti.ac.in' },
    { name: 'Nitin', image: '/assets/stu_images/phd/Nitin.jpg', email: 'phd2101104001@iiti.ac.in' },
    { name: 'Parul', image: '/assets/stu_images/phd/Parul.jpg', email: 'phd2101204006@iiti.ac.in' },
    { name: 'Pradip Kailas Gopal', image: '/assets/stu_images/phd/Pradip Kailas Gopal.jpg', email: 'phd2401204006@iiti.ac.in' },
    { name: 'Priyank Agrawal', image: '/assets/stu_images/phd/Priyank Agrawal.jpg', email: 'phd2501104008@iiti.ac.in' },
    { name: 'Revanth', image: '/assets/stu_images/phd/Revanth.jpg', email: 'phd2301104008@iiti.ac.in' },
    { name: 'Rohit Vyas', image: '/assets/stu_images/phd/Rohit Vyas(PhD).jpg', email: 'phd2401104014@iiti.ac.in' },
    { name: 'Rosa', image: '/assets/stu_images/phd/Rosa.jpg', email: 'phd2101204002@iiti.ac.in' },
    { name: 'Sachin', image: '/assets/stu_images/phd/Sachin.jpg', email: 'phd2101204005@iiti.ac.in' },
    { name: 'Sanchit', image: '/assets/stu_images/phd/Sanchit.jpg', email: 'phd2301104002@iiti.ac.in' },
    { name: 'Sarvjeet Singh', image: '/assets/stu_images/phd/Sarvjeet Singh (PhD).jpg', email: 'phd2401104015@iiti.ac.in' },
    { name: 'Sayak Chakravorty', image: '/assets/stu_images/phd/Sayak Chakravorty (PhD).jpg', email: 'phd2301104006@iiti.ac.in' },
    { name: 'Shashank Agrawal', image: '/assets/stu_images/phd/Shashank Agrawal.jpg', email: 'phd2401204003@iiti.ac.in' },
    { name: 'Shivam Singh', image: '/assets/stu_images/phd/Shivam.jpg', email: 'phd2401204008@iiti.ac.in' },
    { name: 'Shivukumar', image: '/assets/stu_images/phd/Shivukumar.jpg', email: 'phd2101204007@iiti.ac.in' },
    { name: 'Shreya Dixit', image: '/assets/stu_images/phd/Shreya Dixit.jpg', email: 'phd2401204004@iiti.ac.in' },
    { name: 'Shubham Ramesh More', image: '/assets/stu_images/phd/Shubham More (PhD).jpg', email: 'phd2401104018@iiti.ac.in' },
    { name: 'Shuddhashil Ghosh', image: '/assets/stu_images/phd/Shuddhashil.jpg', email: 'phd2001104003@iiti.ac.in' },
    { name: 'Smriti', image: '/assets/stu_images/phd/Smriti.jpg', email: 'phd2301104006@iiti.ac.in' },
    { name: 'Srinidhi', image: '/assets/stu_images/phd/Srinidhi.jpg', email: 'phd2201104002@iiti.ac.in' },
    { name: 'Sugato Panda', image: '/assets/stu_images/phd/Sugato Panda (PhD).jpg', email: 'phd2201104004@iiti.ac.in' },
    { name: 'Sumedh Kishor Limaye', image: '/assets/stu_images/phd/Sumedh Kishor Limaye (PhD).jpg', email: 'phd2301104007@iiti.ac.in' },
    { name: 'Tarun Kumar Narnaure', image: '/assets/stu_images/phd/Tarun Kumar Narnaure.jpg', email: 'phd2401104016@iiti.ac.in' },
    { name: 'Uday Chand Saket', image: '/assets/stu_images/phd/SAKET.jpg', email: 'phd2501104011@iiti.ac.in' },
    { name: 'Upasana Ratre', image: '/assets/stu_images/phd/Upasana Ratre.jpg', email: 'phd2501104010@iiti.ac.in' },
    { name: 'Utkarsh Baranwal', image: '/assets/stu_images/phd/Utkarsh Baranwal (PhD).jpg', email: 'phd2201204006@iiti.ac.in' },
    { name: 'Veena N Bhajantri', image: '/assets/stu_images/phd/Veena N Bhajantri (PhD).jpg', email: 'phd2301204004@iiti.ac.in' },
    { name: 'Venkatesh', image: '/assets/stu_images/phd/Venkatesh.jpg', email: 'phd2301204010@iiti.ac.in' },
    { name: 'Vijay', image: '/assets/stu_images/phd/Vijay.jpg', email: 'phd2101204003@iiti.ac.in' },
    { name: 'Vikas', image: '/assets/stu_images/phd/Vikas.jpg', email: 'phd2201104003@iiti.ac.in' },
    { name: 'Vikas Rawat', image: '/assets/stu_images/phd/Vikas Rawat(PhD).jpg', email: 'phd2301104008@iiti.ac.in' },
    { name: 'Vikas Sudam Gore', image: '/assets/stu_images/phd/Vikas Sudam Gore (PhD).jpg', email: 'phd2401104017@iiti.ac.in' },
    { name: 'Vinay Kumar Sharma', image: '/assets/stu_images/phd/VINAY SHARMA (PhD).jpg', email: 'phd2201104001@iiti.ac.in' },
    { name: 'Vishal Gautam', image: '/assets/stu_images/phd/Vishal Gautam.jpg', email: 'phd2501104012@iiti.ac.in' },
    { name: 'Vivek', image: '/assets/stu_images/phd/Vivek.jpg', email: 'phd2301204001@iiti.ac.in' },
    { name: 'Waqar', image: '/assets/stu_images/phd/Waqar.jpg', email: 'phd2301204007@iiti.ac.in' },
    { name: 'Yogendra Bihare', image: '/assets/stu_images/phd/Yogendra Bihare.jpg', email: 'phd2501104013@iiti.ac.in' },
];  
  const mtechStudents = [
    { year: '2025 Batch', link: '/assets/student_lists/M.tech Student List 2025.pdf' },
    { year: '2024 Batch', link: '/assets/student_lists/M.tech Student List 2024.pdf' },
  ];

  const btechStudents = [
    { year: '2025 Batch', link: '/assets/student_lists/B.tech Student List 2025.pdf' },
    { year: '2024 Batch', link: '/assets/student_lists/B.tech Student List 2024.pdf' },
    { year: '2023 Batch', link: '/assets/student_lists/B.tech Student List 2023.pdf' },
    { year: '2022 Batch', link: '/assets/student_lists/B.tech Student List 2022.pdf' },
    { year: '2021 Batch', link: '/assets/student_lists/B.tech Student List 2021.pdf' },
  ];

  const tabs = [
    { id: 'regularFaculty', label: 'Faculty', icon: Award, count: regularFaculty.length },
    { id: 'staff', label: 'Staff', icon: Building, count: staff.length },
    { id: 'phd', label: 'Ph.D. Students', icon: GraduationCap, count: phdStudents.length },
    { id: 'mtech', label: 'M.Tech Students', icon: BookOpen, count: mtechStudents.length },
    { id: 'btech', label: 'B.Tech Students', icon: User, count: btechStudents.length }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'regularFaculty': return regularFaculty;
      case 'staff': return staff;
      case 'phd': return phdStudents;
      case 'mtech': return mtechStudents;
      case 'btech': return btechStudents;
      default: return regularFaculty;
    }
  };

  const filterData = (data) => {
    if (activeTab === 'mtech' || activeTab === 'btech') {
      return data;
    }

    if (activeTab === 'phd') {
      return data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeTab === 'staff') {
      return data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (person.designation && person.designation.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (activeTab === 'regularFaculty') {
      const specializationFiltered = data.filter(person =>
        specializationFilter === 'All' || person.specialization === specializationFilter
      );

      return specializationFiltered.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (person.specialization && person.specialization.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (person.designation && person.designation.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return data;
  };

  const renderFacultyCard = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      <div className="p-6">
        <div className="flex items-start space-x-5">
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-amber-200 transition-colors duration-300"
          />
          <div className="flex-1">
            <a href={member.url} target='__blank'><h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3></a>
            <p className="text-blue-800 font-semibold text-sm mb-3">{member.designation}</p>
            <p className="text-gray-600 text-xs font-medium mb-1">
              <span className="font-bold">Specialization:</span> {member.specialization}
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-blue-600" />
            <a href={`mailto:${member.email}`} className="hover:text-blue-800 transition-colors">{member.email}</a>
          </div>
          {member.phone && (
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-blue-600" />
              <span>{member.phone}</span>
            </div>
          )}
          {member.room && (
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-blue-600" />
              <span>{member.room}</span>
            </div>
          )}
          <div className="pt-2">
            <h4 className="text-xs font-semibold text-gray-800 mb-1">Research Interests:</h4>
            <ul className="list-disc list-inside space-y-1">
              {member.research.slice(0, 10).map((item, i) => (
                <li key={i} className="text-xs text-gray-600 truncate">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStaffCard = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        <div className="text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
          />
          <a href={member.url} target="_blank" rel="noopener noreferrer">

            <h3 className="text-lg font-semibold text-gray-800 hover:underline">
              {member.name}
            </h3>

          </a>
          <p className="text-green-800 font-semibold text-sm mb-3">{member.designation}</p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-green-600" />
            <a href={`mailto:${member.email}`} className="hover:text-green-800 transition-colors">{member.email}</a>
          </div>
          {member.phone && (
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-green-600" />
              <span>{member.phone}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderPhdStudentCard = (student, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-4">
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3 className="text-md font-bold text-gray-900 text-center truncate">{student.name}</h3>
        {/* Added Email Link Below Name */}
        <a href={`mailto:${student.email}`} className="text-xs text-blue-600 block text-center hover:underline truncate mt-1">
          {student.email}
        </a>
      </div>
    </div>
  );

  const renderStudentYearCard = (studentYear, index) => {
    // Define exact class strings so Tailwind can detect them
    const styleConfig = {
      mtech: {
        IconComponent: BookOpen,
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-700',
        btnBg: 'bg-indigo-600',
        btnHover: 'hover:bg-indigo-700'
      },
      btech: {
        IconComponent: User,
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-700',
        btnBg: 'bg-teal-600',
        btnHover: 'hover:bg-teal-700'
      },
      default: {
        IconComponent: LinkIcon,
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-700',
        btnBg: 'bg-gray-600',
        btnHover: 'hover:bg-gray-700'
      }
    };

    const styles = styleConfig[activeTab] || styleConfig.default;
    const { IconComponent } = styles;

    return (
      <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="p-6">
          <div className="text-center">
            <div className={`p-4 ${styles.iconBg} rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4`}>
              <IconComponent className={`h-10 w-10 ${styles.iconColor}`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{studentYear.year}</h3>
            <p className="text-gray-600 text-sm mb-4">List of Students</p>
            <a
              href={studentYear.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 ${styles.btnBg} text-white text-sm font-medium rounded-lg ${styles.btnHover} transition-colors`}
            >
              View
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const currentData = getCurrentData();
  const filteredData = filterData(currentData);

  const renderGrid = () => {
    if (filteredData.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No people found matching your criteria.</p>
        </div>
      );
    }

    if (activeTab === 'phd') {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredData.map((person, index) => renderPhdStudentCard(person, index))}
        </div>
      );
    }

    if (activeTab === 'mtech' || activeTab === 'btech') {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((person, index) => renderStudentYearCard(person, index))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((person, index) => {
          if (activeTab === 'regularFaculty') {
            return renderFacultyCard(person, index);
          } else if (activeTab === 'staff') {
            return renderStaffCard(person, index);
          }
          return null;
        })}
      </div>
    );
  };

  const getPlaceholderText = () => {
    switch (activeTab) {
      case 'regularFaculty':
        return 'Search faculty by name...';
      case 'staff':
        return 'Search staff by name or designation...';
      case 'phd':
        return 'Search Ph.D. students by name...';
      default:
        return 'Search...';
    }
  };


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our People</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated faculty, staff, and students who make up our vibrant academic community
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={getPlaceholderText()}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={activeTab === 'mtech' || activeTab === 'btech'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm('');
                  setSpecializationFilter('All');
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-blue-800 border border-gray-20E'
                  }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-white text-blue-800' : 'bg-gray-200 text-gray-600'
                  }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {activeTab === 'regularFaculty' && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {specializations.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSpecializationFilter(spec)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${specializationFilter === spec
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  {spec}
                </button>
              ))}

            </div>
          )}

          {renderGrid()}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Community</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A diverse and dynamic community of learners, researchers, and professionals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{regularFaculty.length}</div>
              <div className="text-blue-100 font-medium">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{staff.length}</div>
              <div className="text-blue-100 font-medium">Staff Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{phdStudents.length}</div>
              <div className="text-blue-100 font-medium">Ph.D. Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{mtechStudents.length}</div>
              <div className="text-blue-100 font-medium">M.Tech Lists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{btechStudents.length}</div>
              <div className="text-blue-100 font-medium">B.Tech Lists</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;