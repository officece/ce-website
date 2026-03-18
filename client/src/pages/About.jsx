import React from 'react';
import { Target, Eye, Award, Users, Calendar, BookOpen } from 'lucide-react';

const About = () => {
  const milestones = [
    // CHANGED: Specific text for IIT Indore foundation
    { year: '2009', event: 'Foundation of IIT Indore' },
    // CHANGED: Added specific entry for Civil Engineering start in 2016
    { year: '2016', event: 'Department of Civil Engineering established & First B.Tech batch admitted' },
    { year: '2020', event: 'Reached milestone of 200+ alumni' },
    { year: '2023', event: 'First M.Tech batch admitted' },
    { year: '2025', event: 'Celebrating 10+ years of excellence' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in education, research, and innovation in civil engineering.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering teamwork, partnerships, and knowledge sharing within our academic community.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering cutting-edge research and sustainable solutions for modern infrastructure challenges.'
    },
    {
      icon: BookOpen,
      title: 'Knowledge',
      description: 'Committed to advancing the frontiers of civil engineering through continuous learning and discovery.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About Our Department</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Excellence in civil engineering education, research, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Department of Civil Engineering at IIT Indore has grown rapidly to become a center for 
                academic and research excellence. We are dedicated to creating world-class engineers 
                who contribute to the sustainable development of global infrastructure.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception, we have evolved into a thriving academic community 
                with distinguished faculty, state-of-the-art facilities, and a strong network of alumni 
                working in leading organizations worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our department is committed to addressing the challenges of modern infrastructure through 
                innovative research, comprehensive education programs, and strong industry partnerships.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/ce/groupphoto2.jpeg"
                alt="Department Building"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide world-class education in civil engineering, conduct cutting-edge research 
                that addresses societal needs, and develop leaders who will shape the future of 
                sustainable infrastructure development in India and beyond.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be recognized as a premier department of civil engineering that contributes 
                significantly to technological advancement, sustainable development, and the creation 
                of innovative solutions for complex engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to education, research, and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in the development of our department
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-800 h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className={`text-right ${index % 2 !== 0 ? 'text-left' : ''}`}>
                          <span className="text-2xl font-bold text-blue-800">{milestone.year}</span>
                          <p className="text-gray-600 mt-2 leading-relaxed">{milestone.event}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Department at a Glance</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our growth and impact over the years
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              {/* CHANGED: Faculty count from 25+ to 17 */}
              <div className="text-4xl font-bold text-amber-500 mb-2">17</div>
              <div className="text-blue-100 font-medium">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
              <div className="text-blue-100 font-medium">Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">1000+</div>
              <div className="text-blue-100 font-medium">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
              <div className="text-blue-100 font-medium">Active Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;