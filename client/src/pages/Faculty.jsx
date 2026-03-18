import React, { useState } from 'react';
import { Mail, Phone, Award, BookOpen, Users, Search, ChevronRight, Briefcase, Menu, X } from 'lucide-react';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDomain, setActiveDomain] = useState('All'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  const faculty = [
    {
      name: 'Dr. Rajesh Kumar Sharma',
      designation: 'Professor & Head of Department',
      specialization: 'Structural Engineering',
      education: 'Ph.D. (IIT Delhi), M.Tech (IIT Bombay), B.Tech (NIT Kurukshetra)',
      experience: '25 years',
      email: 'rajesh.sharma@iiti.ac.in',
      phone: '+91-731-2438-701',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Earthquake Engineering', 'Structural Dynamics', 'Reinforced Concrete Structures'],
      publications: 85,
      projects: 12
    },
    {
      name: 'Dr. Priya Menon',
      designation: 'Professor',
      specialization: 'Geotechnical Engineering',
      education: 'Ph.D. (IISc Bangalore), M.Tech (IIT Madras), B.Tech (NIT Calicut)',
      experience: '22 years',
      email: 'priya.menon@iiti.ac.in',
      phone: '+91-731-2438-702',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Soil Dynamics', 'Foundation Engineering', 'Ground Improvement'],
      publications: 72,
      projects: 8
    },
    {
      name: 'Dr. Amit Singh',
      designation: 'Associate Professor',
      specialization: 'Transportation Engineering',
      education: 'Ph.D. (IIT Kharagpur), M.Tech (IIT Delhi), B.Tech (MNIT Jaipur)',
      experience: '18 years',
      email: 'amit.singh@iiti.ac.in',
      phone: '+91-731-2438-703',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Traffic Engineering', 'Pavement Design', 'Intelligent Transportation Systems'],
      publications: 64,
      projects: 10
    },
    {
      name: 'Dr. Sneha Patel',
      designation: 'Associate Professor',
      specialization: 'Water Resources Engineering',
      education: 'Ph.D. (IIT Roorkee), M.Tech (IIT Bombay), B.Tech (SVNIT Surat)',
      experience: '16 years',
      email: 'sneha.patel@iiti.ac.in',
      phone: '+91-731-2438-704',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Hydrology', 'Water Quality Management', 'Groundwater Modeling'],
      publications: 56,
      projects: 7
    },
    {
      name: 'Dr. Vikram Agarwal',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Dr. Meera Joshi',
      designation: 'Assistant Professor',
      specialization: 'Construction Management',
      education: 'Ph.D. (IIT Bombay), M.Tech (VNIT Nagpur), B.Tech (COEP Pune)',
      experience: '12 years',
      email: 'meera.joshi@iiti.ac.in',
      phone: '+91-731-2438-706',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Project Management', 'Sustainable Construction', 'Building Information Modeling'],
      publications: 42,
      projects: 5
    },
    {
      name: 'Dr. Rahul Verma',
      designation: 'Assistant Professor',
      specialization: 'Structural Engineering',
      education: 'Ph.D. (IIT Madras), M.Tech (IIT Roorkee), B.Tech (MNNIT Allahabad)',
      experience: '10 years',
      email: 'rahul.verma@iiti.ac.in',
      phone: '+91-731-2438-707',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Steel Structures', 'Composite Materials', 'Structural Health Monitoring'],
      publications: 38,
      projects: 4
    },
    {
      name: 'Dr. Kavita Rao',
      designation: 'Assistant Professor',
      specialization: 'Geotechnical Engineering',
      education: 'Ph.D. (IIT Kharagpur), M.Tech (NIT Surathkal), B.Tech (NITK Surathkal)',
      experience: '8 years',
      email: 'kavita.rao@iiti.ac.in',
      phone: '+91-731-2438-708',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Rock Mechanics', 'Slope Stability', 'Geosynthetics'],
      publications: 32,
      projects: 3
    }
  ];

  const specializations = ['All', 'Structural Engineering', 'Geotechnical Engineering', 'Transportation Engineering', 'Water Resources Engineering', 'Environmental Engineering', 'Construction Management'];
  
  // Function to handle domain click on mobile
  const handleDomainClick = (spec) => {
    setActiveDomain(spec);
    setIsMobileMenuOpen(false); // Close menu after selection
  };
  
  // Filter faculty based on search term AND active domain
  const filteredFaculty = faculty.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.research.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDomain = activeDomain === 'All' || member.specialization === activeDomain;
    
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Dynamic and Enhanced */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Our Distinguished Faculty</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Meet our experts who are leaders, researchers, and mentors shaping the future of Civil Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Sidebar and Faculty Grid */}
      <section className="py-20 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Filter Header & Search */}
          <div className="lg:hidden mb-6 sticky top-20 z-10 bg-white p-4 rounded-xl shadow-lg border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-extrabold text-gray-900">
                    <span className="text-amber-600">{activeDomain}</span> Faculty
                </h3>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 bg-blue-800 text-white rounded-lg shadow-md hover:bg-amber-500 transition-colors"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            
            {/* Mobile Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                    type="text"
                    placeholder="Search name or research area..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            {/* Mobile Specialization Menu (Collapsible) */}
            <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <h4 className="text-sm font-bold text-gray-700 mb-2 mt-2 border-t pt-2">Filter by Specialization:</h4>
                <div className="grid grid-cols-2 gap-2">
                    {specializations.map(spec => (
                        <button
                            key={spec}
                            onClick={() => handleDomainClick(spec)}
                            className={`w-full text-center text-sm p-2 rounded-lg font-semibold transition-all duration-200 ${
                                activeDomain === spec
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                            }`}
                        >
                            {spec}
                        </button>
                    ))}
                </div>
            </div>
          </div>


          <div className="grid lg:grid-cols-4 gap-10">
            
            {/* 1. Desktop Specialization Sidebar (Sticky) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-4 p-6 bg-white rounded-xl shadow-2xl border-l-4 border-amber-500">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 border-b-2 pb-2">Specializations</h3>
                
                {specializations.map(spec => (
                  <button
                    key={spec}
                    onClick={() => setActiveDomain(spec)}
                    className={`w-full text-left flex items-center p-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-x-1 ${
                      activeDomain === spec
                        ? 'bg-blue-800 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronRight className={`h-5 w-5 mr-3 ${activeDomain === spec ? 'text-amber-300' : 'text-blue-600'}`} />
                    <span>{spec}</span>
                    {spec === 'All' && (<span className="ml-auto text-xs bg-white/30 text-white px-2 py-0.5 rounded-full">{faculty.length}</span>)}
                  </button>
                ))}
                
                {/* Desktop Search Bar integrated below the links */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search name/research..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

              </div>
            </div>

            {/* 2. Faculty Grid */}
            <div className="lg:col-span-3">
              <h2 className="hidden lg:block text-3xl font-extrabold text-gray-900 mb-8">
                {activeDomain === 'All' ? 'All Faculty Members' : activeDomain + ' Experts'}
                <span className="ml-4 text-xl text-gray-500 font-medium">({filteredFaculty.length} Found)</span>
              </h2>

              {filteredFaculty.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                  <p className="text-gray-500 text-lg">No faculty members found in the selected domain or matching your search criteria.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredFaculty.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-xl transition-all duration-300 p-6 border-t-8 border-amber-500/0 hover:border-amber-500 transform hover:-translate-y-1 group"
                    >
                      <div className="flex items-start space-x-6">
                        {/* Photo and Designation */}
                        <div className="flex-shrink-0 text-center">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-800 transition-colors duration-300 shadow-md"
                            />
                            <span className="inline-block px-2 py-0.5 mt-2 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                                {member.specialization.split(' ')[0]}
                            </span>
                        </div>
                        
                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-extrabold text-gray-900 mb-1">{member.name}</h3>
                          <p className="text-amber-600 font-semibold mb-2 text-sm">{member.designation}</p>

                          {/* Contact */}
                          <div className="space-y-1 text-sm text-gray-700 mb-4 border-b pb-3 border-gray-100">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-blue-600" />
                              <a href={`mailto:${member.email}`} className="hover:text-blue-800 transition-colors">{member.email}</a>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-blue-600" />
                              <span>{member.phone}</span>
                            </div>
                          </div>
                          
                          {/* Research Areas and Stats */}
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center">
                                <BookOpen className='h-4 w-4 mr-2 text-amber-500'/>
                                Key Research Areas
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {member.research.slice(0, 2).map((area, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {area}
                                </span>
                              ))}
                              {member.research.length > 2 && (
                                <span className="px-3 py-1 bg-gray-200 text-gray-500 text-xs rounded-full">
                                  +{member.research.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats Block */}
                      <div className="flex justify-between text-center mt-6 pt-4 border-t border-gray-100">
                        <div className='flex items-center text-sm font-medium text-gray-600'>
                            <Briefcase className='h-4 w-4 mr-2 text-green-600'/>
                            <span>{member.experience} Exp.</span>
                        </div>
                        <div className='flex items-center text-sm font-medium text-gray-600'>
                            <Award className='h-4 w-4 mr-2 text-blue-600'/>
                            <span>{member.publications} Pubs.</span>
                        </div>
                        <div className='flex items-center text-sm font-medium text-gray-600'>
                            <Users className='h-4 w-4 mr-2 text-amber-600'/>
                            <span>{member.projects} Projects</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Department Stats - High Contrast (UI maintained) */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Faculty Excellence</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our faculty's collective achievements and contributions to the field
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">25+</div>
              <div className="text-blue-100 font-semibold">Faculty Members</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">500+</div>
              <div className="text-blue-100 font-semibold">Research Papers</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">50+</div>
              <div className="text-blue-100 font-semibold">Active Projects</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">15+</div>
              <div className="text-blue-100 font-semibold">Years Average Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;