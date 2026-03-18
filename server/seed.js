const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Initiating database injection sequence...');

  await prisma.faculty.create({
    data: {
      name: 'Dr. Gourab Sil',
      designation: 'Assistant Professor & Head of Department',
      specialization: 'Transportation Systems Engineering',
      email: 'hodce@iiti.ac.in , gourabsil@iiti.ac.in',
      phone: '0731-660 3360 , +91 8268364346',
      room: '405, POD 1D',
      imageUrl: '/assets/faculty_pics/Gourab.jpg',
      profileUrl: 'https://gourabsil.profiles.iiti.ac.in/',
      research: [
        'Performance Based Geometric Design of Highways',
        'Safety of Roadway Infrastructure',
        'Traffic Engineering'
      ]
    }
  });

  await prisma.faculty.create({
    data: {
      name: 'Dr. Sandeep Chaudhary',
      designation: 'Professor (HAG)',
      specialization: 'Structural Engineering',
      email: 'schaudhary@iiti.ac.in',
      phone: '0731-660 3256',
      room: '403, POD 1D',
      imageUrl: '/assets/faculty_pics/Sandeep.jpeg',
      profileUrl: 'https://sustainableconstructionlab.com/',
      research: [
        'Sustainable Construction Practices',
        'Composite Bridges',
        'Advanced Characterisation Techniques'
      ]
    }
  });

  await prisma.event.create({
    data: {
      title: '2025 International Conference at NIT Rourkela',
      date: new Date('2025-12-20'),
      description: 'Ph.D. and M. Tech. Research Scholars from our HydroInformatics Lab secured several laurels at HYDRO 2025.',
      category: 'Achievement',
      imageUrl: '/assets/Events/International conference/1.jpeg',
      isNews: true
    }
  });

  console.log('Injection complete. Database is armed and ready.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });