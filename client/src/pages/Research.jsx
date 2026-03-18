import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Users, Calendar, Award, BookOpen, Target, Microscope } from 'lucide-react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');

  const researchAreas = [
    {
      title: 'Earthquake Engineering',
      description: 'Advanced research in seismic analysis, structural dynamics, and earthquake-resistant design',
      projects: 8,
      faculty: 4,
      icon: Target
    },
    {
      title: 'Sustainable Construction',
      description: 'Green building technologies, sustainable materials, and environmentally conscious construction practices',
      projects: 6,
      faculty: 3,
      icon: BookOpen
    },
    {
      title: 'Geotechnical Innovation',
      description: 'Soil mechanics, foundation engineering, and ground improvement techniques',
      projects: 7,
      faculty: 3,
      icon: Microscope
    },
    {
      title: 'Smart Infrastructure',
      description: 'IoT integration, structural health monitoring, and intelligent transportation systems',
      projects: 5,
      faculty: 4,
      icon: Award
    }
  ];

  const projects = [
    {
      title: 'Seismic Retrofitting of Heritage Structures',
      pi: 'Dr. Rajesh Kumar Sharma',
      status: 'Ongoing',
      funding: '₹85 Lakhs',
      agency: 'DST',
      duration: '2023-2026',
      description: 'Development of innovative retrofitting techniques for historical buildings to enhance seismic resistance while preserving architectural integrity.',
      category: 'Structural Engineering',
      collaborators: ['IIT Delhi', 'CBRI Roorkee']
    },
    {
      title: 'Smart Waste Management Systems for Smart Cities',
      pi: 'Dr. Vikram Agarwal',
      status: 'Ongoing',
      funding: '₹1.2 Crores',
      agency: 'MHRD',
      duration: '2022-2025',
      description: 'IoT-based waste collection and processing system with real-time monitoring and optimization algorithms.',
      category: 'Environmental Engineering',
      collaborators: ['CSIR-NEERI', 'Municipal Corporation']
    },
    {
      title: 'Advanced Ground Improvement Techniques',
      pi: 'Dr. Priya Menon',
      status: 'Completed',
      funding: '₹65 Lakhs',
      agency: 'CSIR',
      duration: '2020-2023',
      description: 'Investigation of bio-mediated ground improvement methods for sustainable foundation solutions.',
      category: 'Geotechnical Engineering',
      collaborators: ['IISc Bangalore', 'NIT Calicut']
    },
    {
      title: 'Highway Pavement Performance Modeling',
      pi: 'Dr. Amit Singh',
      status: 'Ongoing',
      funding: '₹75 Lakhs',
      agency: 'MoRTH',
      duration: '2023-2025',
      description: 'Development of predictive models for pavement deterioration under Indian traffic and climatic conditions.',
      category: 'Transportation Engineering',
      collaborators: ['CRRI New Delhi', 'IIT Kharagpur']
    },
    {
      title: 'Water Quality Assessment in Urban Rivers',
      pi: 'Dr. Sneha Patel',
      status: 'Ongoing',
      funding: '₹45 Lakhs',
      agency: 'UGC',
      duration: '2022-2024',
      description: 'Comprehensive study of pollution sources and water quality parameters in urban river systems.',
      category: 'Water Resources Engineering',
      collaborators: ['NEERI Nagpur', 'State Pollution Control Board']
    },
    {
      title: 'BIM Implementation in Infrastructure Projects',
      pi: 'Dr. Meera Joshi',
      status: 'Ongoing',
      funding: '₹55 Lakhs',
      agency: 'AICTE',
      duration: '2023-2025',
      description: 'Framework development for Building Information Modeling implementation in large-scale infrastructure projects.',
      category: 'Construction Management',
      collaborators: ['Larsen & Toubro', 'Tata Projects']
    }
  ];

  const publications = [
    {
      title: 'Seismic Performance Assessment of RC Buildings with Masonry Infill Walls',
      authors: ['Dr. Rajesh Kumar Sharma', 'Dr. Rahul Verma', 'A. Student'],
      journal: 'Engineering Structures',
      year: 2024,
      impact: '4.2',
      citations: 15
    },
    {
      title: 'Sustainable Concrete Production Using Industrial Waste',
      authors: ['Dr. Meera Joshi', 'Dr. Vikram Agarwal'],
      journal: 'Construction and Building Materials',
      year: 2024,
      impact: '6.4',
      citations: 28
    },
    {
      title: 'Machine Learning Applications in Geotechnical Site Characterization',
      authors: ['Dr. Priya Menon', 'Dr. Kavita Rao'],
      journal: 'Computers and Geotechnics',
      year: 2023,
      impact: '4.9',
      citations: 42
    },
    {
      title: 'Traffic Flow Optimization Using AI-Based Signal Control',
      authors: ['Dr. Amit Singh', 'Research Scholar'],
      journal: 'Transportation Research Part C',
      year: 2023,
      impact: '7.8',
      citations: 33
    }
  ];

  const labs = [
    {
      name: 'Advanced Structural Engineering Laboratory',
      head: 'Dr. Rajesh Kumar Sharma',
      area: '500 sq.m',
      equipment: ['Universal Testing Machine (2000 kN)', 'Shake Table', 'Data Acquisition Systems', 'Non-destructive Testing Equipment'],
      research: ['Seismic Testing', 'Material Characterization', 'Structural Health Monitoring'],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Geotechnical Engineering Laboratory',
      head: 'Dr. Priya Menon',
      area: '400 sq.m',
      equipment: ['Triaxial Testing System', 'Direct Shear Apparatus', 'Consolidation Testing Equipment', 'Dynamic Compaction Equipment'],
      research: ['Soil Mechanics', 'Foundation Engineering', 'Ground Improvement'],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Transportation Engineering Laboratory',
      head: 'Dr. Amit Singh',
      area: '350 sq.m',
      equipment: ['Marshall Stability Apparatus', 'Traffic Simulation Software', 'Pavement Testing Equipment', 'GPS Survey Equipment'],
      research: ['Pavement Engineering', 'Traffic Analysis', 'Transportation Planning'],
      image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Environmental Engineering Laboratory',
      head: 'Dr. Vikram Agarwal',
      area: '300 sq.m',
      equipment: ['Spectrophotometer', 'BOD Incubator', 'Water Quality Analyzers', 'Air Quality Monitoring System'],
      research: ['Water Treatment', 'Air Pollution Control', 'Waste Management'],
      image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.pi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Research Excellence</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Advancing the frontiers of civil engineering through innovative research and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our department is actively engaged in cutting-edge research across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{area.description}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      <span>{area.projects} Projects</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{area.faculty} Faculty</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['projects', 'publications', 'laboratories'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                    activeTab === tab
                      ? 'border-blue-800 text-blue-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div>
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search projects by title, category, or principal investigator..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ml-4 ${
                            project.status === 'Ongoing' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-blue-600" />
                            <span className="font-medium">PI:</span> {project.pi}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-blue-600" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-1 text-blue-600" />
                            <span className="font-medium">{project.funding}</span> ({project.agency})
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-3">{project.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                            {project.category}
                          </span>
                          {project.collaborators && (
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="font-medium mr-2">Collaborators:</span>
                              <span>{project.collaborators.join(', ')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Publications</h3>
                <p className="text-gray-600">Showcase of our faculty's latest research contributions</p>
              </div>

              <div className="grid gap-4">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{pub.title}</h4>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Authors:</span> {pub.authors.join(', ')}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium text-blue-800">{pub.journal}</span> ({pub.year})
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1 text-amber-500" />
                        <span>Impact Factor: {pub.impact}</span>
                      </div>
                      <div className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-1 text-green-600" />
                        <span>Citations: {pub.citations}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Laboratories Tab */}
          {activeTab === 'laboratories' && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Laboratories</h3>
                <p className="text-gray-600">State-of-the-art facilities supporting cutting-edge research</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {labs.map((lab, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <img
                      src={lab.image}
                      alt={lab.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{lab.name}</h4>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Users className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">Head: {lab.head}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Target className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">Area: {lab.area}</span>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Equipment</h5>
                        <div className="flex flex-wrap gap-2">
                          {lab.equipment.slice(0, 3).map((item, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                            >
                              {item}
                            </span>
                          ))}
                          {lab.equipment.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              +{lab.equipment.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Research Areas</h5>
                        <div className="flex flex-wrap gap-2">
                          {lab.research.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Research Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our research achievements and contributions to the scientific community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
              <div className="text-blue-100 font-medium">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">₹15 Cr</div>
              <div className="text-blue-100 font-medium">Research Funding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">200+</div>
              <div className="text-blue-100 font-medium">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">25+</div>
              <div className="text-blue-100 font-medium">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;