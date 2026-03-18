// client/src/pages/People.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Award, BookOpen, Users, Search, GraduationCap, Building, User, MapPin, Loader2 } from 'lucide-react';
import { customFetch } from '../utils/api';

const People = () => {
  const [activeTab, setActiveTab] = useState('regularFaculty');
  const [searchTerm, setSearchTerm] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('All');
  
  // Dynamic State
  const [facultyList, setFacultyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Live Data
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const data = await customFetch('/faculty');
        setFacultyList(data);
      } catch (err) {
        console.error('Error fetching faculty:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  // Filter Logic
  const filteredFaculty = facultyList.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpec = specializationFilter === 'All' || f.specialization === specializationFilter;
    return matchesSearch && matchesSpec;
  });

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our People</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A diverse and dynamic community of learners, researchers, and professionals
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{facultyList.length}</div>
              <div className="text-blue-100 font-medium">Faculty Members</div>
            </div>
            {/* Keeping placeholders for staff/students until we build those tables */}
            <div className="text-center"><div className="text-4xl font-bold text-amber-500 mb-2">12+</div><div className="text-blue-100 font-medium">Staff Members</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-amber-500 mb-2">45+</div><div className="text-blue-100 font-medium">Ph.D. Students</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-amber-500 mb-2">120+</div><div className="text-blue-100 font-medium">UG/PG Students</div></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <button className="px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap bg-blue-800 text-white shadow-md">
                Faculty Directory
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <select 
                value={specializationFilter}
                onChange={(e) => setSpecializationFilter(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white shadow-sm"
              >
                <option value="All">All Specializations</option>
                <option value="Structural Engineering">Structural Engineering</option>
                <option value="Transportation Systems Engineering">Transportation Engineering</option>
                <option value="Geotechnical Engineering">Geotechnical Engineering</option>
                <option value="Water Resources Engineering">Water Resources Engineering</option>
                <option value="Environmental Engineering">Environmental Engineering</option>
              </select>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search faculty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Faculty Grid */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-blue-800 mb-4" />
              <p className="text-gray-500 font-medium">Syncing with directory...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((faculty, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
                  <div className="p-6 flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">{faculty.name}</h3>
                        <p className="text-amber-600 font-medium text-sm mt-1">{faculty.designation}</p>
                      </div>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-4 border border-blue-100">
                      {faculty.specialization}
                    </span>

                    <div className="space-y-2 text-sm text-gray-600 mt-4">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-3 text-gray-400" />
                        <a href={`mailto:${faculty.email}`} className="hover:text-blue-600 transition-colors truncate">{faculty.email}</a>
                      </div>
                      {faculty.phone && (
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-3 text-gray-400" />
                          <span>{faculty.phone}</span>
                        </div>
                      )}
                      {faculty.room && (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                          <span>{faculty.room}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {filteredFaculty.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No faculty members found matching your search.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default People;