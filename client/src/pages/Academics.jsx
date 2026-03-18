import React from 'react';
import { GraduationCap, BookOpen, Clock, Users, Award, ChevronRight } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      title: <a href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/9NVdg9JRdMxVbWQmnp0vHGM10r2lwjBN8Oy4aSP6.pdf" target="_blank">B.Tech in Civil Engineering</a>,
      duration: '4 Years',
      // CHANGED: Intake updated to 53 Students
      intake: 'Intake: 53',
      description: 'Comprehensive undergraduate program covering all major areas of civil engineering with strong emphasis on practical learning and industry exposure.',
      highlights: [
        'Strong foundation in mathematics, physics, and engineering sciences',
        'Hands-on laboratory experience in all core subjects',
        'Industry internships and live projects',
        'Professional development and communication skills'
      ],
      courses: ['Engineering Mechanics', 'Structural Analysis', 'RCC and Steel Design', 'Geotechnical Engineering', 'Transportation Systems Engineering', 'Water Resources Engineering']
    },
    {
      title: <a href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/7xAINJWsbYbISP5Lk9PSY2VJU5daoGrnm2lbjilf.pdf" target="_blank">M.Tech in Structural Engineering</a>,
      duration: '2 Years',
      intake: 'Intake: 10 (TA Category)',
      description: 'Advanced program focusing on design, analysis, and behavior of structures with emphasis on modern computational methods and sustainable construction.',
      highlights: [
        'Advanced structural analysis and design',
        'Research-oriented curriculum',
        'Access to state-of-the-art laboratories',
        'Thesis work with industry collaboration'
      ],
      courses: ['Advanced Structural Analysis', 'Earthquake Engineering', 'Bridge Engineering', 'High-rise Building Design', 'Finite Element Methods', 'Steel and Concrete Structures']
    },
    {
      title: <a href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/7xAINJWsbYbISP5Lk9PSY2VJU5daoGrnm2lbjilf.pdf" target="_blank">M.Tech in Water, Climate & Sustainability</a>,
      duration: '2 Years',
      intake: 'Intake: 10 (TA Category)',
      description: 'Interdisciplinary program focusing on water resources, climate resilience, and sustainable environmental systems to address emerging global challenges.',
      highlights: [
        'Advanced hydrology and climate modelling',
        'Sustainable water resource management',
        'Hands-on training with environmental simulation tools',
        'Research and field-based projects in climate resilience'
      ],
      courses: [ 'Advanced Hydrology','Water Resources Systems Engineering','Climate Change Impact Assessment','Environmental Data Analytics','Sustainable Water Infrastructure','Hydraulic Modelling & Simulation']
    },
    {
      title: 'M.Tech in Transportation Systems Engineering (Upcoming)',
      duration: '2 Years',
      intake: 'Intake: 10 (TA Category)',
      description: 'Program dedicated to planning, design, and optimization of modern transportation networks with a focus on smart mobility and sustainable infrastructure.',
      highlights: [
      'Advanced traffic engineering and transport planning',
      'Exposure to intelligent transportation systems (ITS)',
      'Laboratory and software training in transport simulation',
      'Industry-linked projects on mobility and infrastructure'
      ],
      courses: [ 'Traffic Engineering & Management','Transportation Planning','Pavement Design & Materials','Public Transport Systems','Intelligent Transportation Systems (ITS)','Transport Modelling & Simulation']
    },
    {
      title: 'M.Tech in Geotechnical Engineering (Upcoming)',
      duration: '2 Years',
      intake: 'Intake: 10 (TA Category)',
      description: 'Specialized program in soil mechanics, foundation engineering, and geoenvironmental engineering with modern testing and analysis techniques.',
      highlights: [
        'Comprehensive soil and rock mechanics',
        'Foundation design for complex structures',
        'Geoenvironmental engineering applications',
        'Field investigation techniques'
      ],
      courses: ['Advanced Soil Mechanics', 'Foundation Engineering', 'Slope Stability', 'Ground Improvement', 'Rock Mechanics', 'Geosynthetics']
    },
    {
      title: <a href="https://academic.iiti.ac.in/app/storage/app/coursecurriculum/7xAINJWsbYbISP5Lk9PSY2VJU5daoGrnm2lbjilf.pdf" target="_blank">Ph.D. in Civil Engineering</a>,
      duration: '3-6 Years',
      // CHANGED: Intake removed
      description: 'Research-intensive doctoral program aimed at producing independent researchers and academics in various specializations of civil engineering.',
      highlights: [
        'Independent research under expert supervision',
        'Interdisciplinary research opportunities',
        'Teaching assistantship opportunities',
        'International collaboration programs'
      ],
      courses: ['Research Methodology', 'Advanced Mathematics', 'Specialized Courses', 'Dissertation Research', 'Seminar Presentations', 'Professional Development']
    }
  ];

  const curriculum = {
    btech: {
      semester1: ['Basic Electrical Engineering', 'Engineering Mechanics', 'Basics of Physics', 'Physics Lab- I', 'Calculus', 'Language and Composition','Makerspace','Computer Programming','Computer Programming Lab'],
      semester2: ['Biosciences ', 'Linear Algebra', 'Differential Equations-I', 'Environmental Studies', 'Fundamentals of Economics', 'Chemistry','Chemistry Lab','Flexible Elective','Flexible Elective (HSS)'],
      semester3: ['Complex Analysis','Differential Equations-II', 'Strength of Materials', 'Fluid Mechanics', 'Surveying', 'Building Materials', 'Surveying','Department Elective I'],
      semester4: ['Numerical Methods', 'Structural Analysis-I', 'Soil Mechanics-I', 'Engineering Geology', 'Environmental Engineering', 'Department Elective II','Institute Elective I'],
      semester5: ['Structural Analysis-II', 'Soil Mechanics-II', 'Transportation Engineering ', 'Design of Reinforced Concrete Structures', 'Department Elective III', 'Institute Elective II '],
      semester6: ['Design of steel structures', 'Engineering Hydrology', 'Computer Aided Design Lab', 'Introduction to Finite Element Methods', 'Department Elective IV', 'Department Elective IV','Institute Elective III'],
      semester7: ['B Tech Project (BTP)','Internship'],
      semester8: ['Water Resources Engineering', 'Design of Structures-III', 'Transportation Engineering-II', 'Foundation Engineering', 'Department Elective V', 'Institute Elective IV','Institute Elective V']
    }
  };

  const facilities = [
    'Computational Laboratory',
    'Engineering Geology Laboratory',
    'Environmental Engineering Laboratory',
    'Fluid Mechanics Laboratory',
    'Geotechnical Engineering Laboratory- 01',
    'Geotechnical Engineering Laboratory- 02',
    'Geodesy & Surveying Laboratory',
    'Hydraulics and Hydrology Laboratory',
    'Materials Engineering Laboratory',
    'Solid Mechanics Laboratory',
    'Transportation Engineering Laboratory',
    'Structure Engineering Laboratory',
    // 'Brick Manufacturing Laboratory',
    // 'Impact Loading Laboratory',
    // 'NDS Laboratory',
    // 'Glacier Laboratory'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive education programs designed to shape the next generation of civil engineers
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From undergraduate to doctoral levels, we offer comprehensive programs that combine theoretical knowledge with practical application
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="text-sm">{program.duration}</span>
                            </div>
                            {/* CHANGED: Conditional rendering for intake */}
                            {program.intake && (
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                <span className="text-sm">{program.intake}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-amber-500" />
                            Program Highlights
                          </h4>
                          <ul className="space-y-2">
                            {program.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <BookOpen className="h-5 w-5 mr-2 text-amber-500" />
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {program.courses.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B.Tech Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">B.Tech Curriculum Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed semester-wise breakdown of the undergraduate program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(curriculum.btech).map(([semester, courses]) => (
              <div
                key={semester}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-4 capitalize">
                  {semester.replace('semester', 'Semester ')}
                </h3>
                <ul className="space-y-2">
                  {courses.map((course, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Laboratory Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art laboratories supporting hands-on learning and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-200"
              >
                <div className="flex items-center">
                  <div className="bg-blue-800 text-white p-2 rounded-lg mr-4">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{facility}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards a rewarding career in civil engineering. 
              Learn about our admission process and requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Admission Guidelines
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;