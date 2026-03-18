import React from 'react';
import { MapPin, Users, Calendar, Award, Wrench, Computer, FlaskConical, Building } from 'lucide-react';

const Facilities = () => {
  const laboratories = [
    {
      name: 'Structural Engineering Laboratory',
      area: '500 sq.m',
      capacity: '30 students',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Universal Testing Machine (2000 kN capacity)',
        'Compression Testing Machine (3000 kN)',
        'Shake Table for Seismic Testing',
        'Non-destructive Testing Equipment',
        'Data Acquisition Systems',
        'Loading Frames and Actuators'
      ],
      description: 'State-of-the-art facility for testing concrete, steel, and composite materials under various loading conditions.',
      coordinator: 'Dr. Rajesh Kumar Sharma'
    },
    {
      name: 'Geotechnical Engineering Laboratory',
      area: '400 sq.m',
      capacity: '25 students',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Triaxial Testing System',
        'Direct Shear Testing Apparatus',
        'Consolidation Testing Equipment',
        'Standard Penetration Test Equipment',
        'Permeability Testing Setup',
        'Compaction Testing Equipment'
      ],
      description: 'Comprehensive facility for soil mechanics testing and geotechnical characterization.',
      coordinator: 'Dr. Priya Menon'
    },
    {
      name: 'Transportation Engineering Laboratory',
      area: '350 sq.m',
      capacity: '25 students',
      image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Marshall Stability Testing Apparatus',
        'Los Angeles Abrasion Testing Machine',
        'Aggregate Impact Testing Equipment',
        'Bitumen Testing Equipment',
        'Pavement Core Drilling Machine',
        'Traffic Simulation Software'
      ],
      description: 'Advanced facility for highway materials testing and pavement engineering research.',
      coordinator: 'Dr. Amit Singh'
    },
    {
      name: 'Environmental Engineering Laboratory',
      area: '300 sq.m',
      capacity: '20 students',
      image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'UV-Visible Spectrophotometer',
        'BOD Incubator',
        'pH Meters and Conductivity Meters',
        'Turbidity Meters',
        'Dissolved Oxygen Meters',
        'Air Quality Monitoring Equipment'
      ],
      description: 'Well-equipped laboratory for water quality analysis and environmental monitoring.',
      coordinator: 'Dr. Vikram Agarwal'
    },
    {
      name: 'Water Resources Engineering Laboratory',
      area: '400 sq.m',
      capacity: '30 students',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Hydraulic Bench',
        'Flume Systems',
        'Pipe Flow Apparatus',
        'Pumps and Flow Measurement Devices',
        'Water Level Recorders',
        'Rainfall Simulators'
      ],
      description: 'Modern facility for hydraulics, hydrology, and water resources engineering experiments.',
      coordinator: 'Dr. Sneha Patel'
    },
    {
      name: 'Materials Testing Laboratory',
      area: '450 sq.m',
      capacity: '35 students',
      image: 'https://images.pexels.com/photos/3865263/pexels-photo-3865263.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Concrete Mix Design Equipment',
        'Cement Testing Apparatus',
        'Aggregate Testing Equipment',
        'Steel Bar Testing Machines',
        'Durability Testing Setup',
        'Microscopy Equipment'
      ],
      description: 'Comprehensive facility for testing construction materials and quality control.',
      coordinator: 'Dr. Meera Joshi'
    }
  ];

  const computingFacilities = [
    {
      name: 'CAD Laboratory',
      software: ['AutoCAD', 'STAAD Pro', 'ETABS', 'SAP2000', 'Revit', 'ANSYS'],
      capacity: '40 workstations',
      description: 'High-performance workstations for structural analysis and design'
    },
    {
      name: 'GIS Laboratory',
      software: ['ArcGIS', 'QGIS', 'Google Earth Pro', 'Remote Sensing Software'],
      capacity: '30 workstations',
      description: 'Geographic Information Systems for transportation and water resources'
    },
    {
      name: 'Numerical Modeling Lab',
      software: ['MATLAB', 'PLAXIS', 'FLAC', 'ABAQUS', 'COMSOL'],
      capacity: '25 workstations',
      description: 'Advanced numerical analysis and finite element modeling'
    }
  ];

  const infrastructure = [
    {
      name: 'Department Building',
      features: ['Air-conditioned classrooms', 'Modern lecture halls', 'Faculty offices', 'Student common areas'],
      icon: Building
    },
    {
      name: 'Library & Information Center',
      features: ['Digital library access', 'Research databases', 'Study spaces', 'Reference materials'],
      icon: Award
    },
    {
      name: 'Conference Hall',
      features: ['200-seat capacity', 'Audio-visual equipment', 'Video conferencing', 'Smart podium'],
      icon: Users
    },
    {
      name: 'Workshop',
      features: ['Carpentry section', 'Welding equipment', 'Machine shop', 'Safety equipment'],
      icon: Wrench
    }
  ];

  const fieldStations = [
    {
      name: 'Structural Health Monitoring Station',
      location: 'Campus Building',
      purpose: 'Real-time monitoring of structural behavior and earthquake response',
      equipment: ['Accelerometers', 'Strain Gauges', 'Data Loggers', 'Wireless Sensors']
    },
    {
      name: 'Weather Monitoring Station',
      location: 'Department Rooftop',
      purpose: 'Meteorological data collection for research and academic purposes',
      equipment: ['Rain Gauge', 'Wind Speed Meters', 'Temperature Sensors', 'Data Logger']
    },
    {
      name: 'Traffic Data Collection Point',
      location: 'Campus Road',
      purpose: 'Traffic flow analysis and transportation research',
      equipment: ['Vehicle Counters', 'Speed Detection', 'Camera Systems', 'Data Processing Unit']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Department Facilities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art infrastructure supporting excellence in education and research
            </p>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Laboratories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge laboratories equipped with modern instruments and testing facilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {laboratories.map((lab, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{lab.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{lab.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Area: {lab.area}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Capacity: {lab.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <FlaskConical className="h-4 w-4 mr-2 text-amber-500" />
                      Major Equipment
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {lab.equipment.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                      {lab.equipment.length > 4 && (
                        <div className="text-sm text-blue-600 font-medium mt-1">
                          +{lab.equipment.length - 4} more equipment
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">Coordinator:</span>
                      <span className="ml-1">{lab.coordinator}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Computing Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Computing Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced computing infrastructure for analysis, design, and research activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {computingFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                    <Computer className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{facility.name}</h3>
                    <p className="text-sm text-gray-600">{facility.capacity}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Software Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {facility.software.map((software, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                      >
                        {software}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure designed to support academic excellence and research innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-200"
              >
                <div className="text-center">
                  <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.name}</h3>
                  <ul className="space-y-1">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Stations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Field Monitoring Stations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time monitoring systems for research and data collection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fieldStations.map((station, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{station.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="text-sm">{station.location}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{station.purpose}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Equipment</h4>
                  <div className="flex flex-wrap gap-1">
                    {station.equipment.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Facilities Overview</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive infrastructure supporting education and research excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">6</div>
              <div className="text-blue-100 font-medium">Research Labs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">95</div>
              <div className="text-blue-100 font-medium">Workstations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">2400</div>
              <div className="text-blue-100 font-medium">sq.m Lab Space</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">15+</div>
              <div className="text-blue-100 font-medium">Software Licenses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Facilities</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Interested in seeing our facilities? Schedule a visit to explore our laboratories 
              and infrastructure firsthand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule a Tour
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;