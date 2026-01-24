import React, { useState } from 'react';
import { Calendar, Search, ChevronRight, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming'); // Changed default to 'upcoming' so you see the new event immediately
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // --- Data Section ---

  // 1. Upcoming Events Data 
  const upcomingEvents = [
   
  ];

  // 2. News Data (From your previous code)
  const newsData = [
    {
      date: '2025-12-06',
      title: '𝐈𝐧𝐚𝐮𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐭𝐡𝐞 𝐁𝐈𝐒 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐂𝐡𝐚𝐩𝐭𝐞𝐫 (𝐒𝐂-𝟏𝟏𝟐𝟖𝟑)',
      description: 'IIT Indore is 𝐝𝐞𝐥𝐢𝐠𝐡𝐭𝐞𝐝 to announce the inauguration of the 𝐁𝐮𝐫𝐞𝐚𝐮 𝐨𝐟 𝐈𝐧𝐝𝐢𝐚𝐧 𝐒𝐭𝐚𝐧𝐝𝐚𝐫𝐝𝐬 (𝐁𝐈𝐒) 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐂𝐡𝐚𝐩𝐭𝐞𝐫 (𝐒𝐂-𝟏𝟏𝟐𝟖𝟑) in the Department of Civil Engineering. The launch featured an insightful workshop on 𝐒𝐭𝐚𝐧𝐝𝐚𝐫𝐝𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐂𝐢𝐯𝐢𝐥 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐟𝐨𝐫 𝐑𝐞𝐬𝐢𝐥𝐢𝐞𝐧𝐭 𝐈𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞.',
      category: 'Seminar',
      image: '/assets/Events/BIS_Inaugration.jpeg',
      link: 'https://www.linkedin.com/posts/ced-outreach-iit-indore-a51575390_civilengineering-bis-bureauofindianstandards-activity-7402743045588279296-oVRU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4ENpUBAjdryz1Wdz50rJf3Sm4YnBT4nM8',
    },
    {
      date: '2025-12-01',
      title: 'One-Week Short Term Training Programme',
      description: 'One-Week Short Term Training Programme on Advances in Resilient Infrastructure & Sustainable Initiatives under Climate Change (01-05 Dec 2025) at IIT Indore',
      category: 'Seminar',
      image: '/assets/Events/linkedin_post.png', 
      link: 'https://www.linkedin.com/posts/prof-manish-kumar-goyal-8062b86_sttp-ugcPost-7393564039991402497-_AJd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4ENpUBAjdryz1Wdz50rJf3Sm4YnBT4nM8',
    },
    {
      date: '2025-11-26',
      title: 'ANRF Financial Assistance for International Symposium',
      description: 'Mr. Vikas Rawat receives financial assistance from ANRF for participating in the International Symposium on Land Reclamation in Singapore.',
      category: 'Achievement',
      image: '/assets/ce/Civil_front_jpg.jpg' 
    },
    {
      date: '2025-11-03',
      title: '𝐀 𝐓𝐞𝐜𝐡𝐧𝐢𝐜𝐚𝐥 𝐕𝐢𝐬𝐢𝐭 𝐭𝐨 𝐈𝐧𝐝𝐨𝐫𝐞 𝐀𝐢𝐫𝐩𝐨𝐫𝐭 ✈️',
      description: 'As part of the course 𝐂𝐄 𝟔𝟓𝟑 – 𝐓𝐞𝐜𝐡𝐧𝐢𝐜𝐚𝐥 𝐒𝐢𝐭𝐞 𝐕𝐢𝐬𝐢𝐭 𝐈𝐦𝐦𝐞𝐫𝐬𝐢𝐨𝐧 𝐏𝐫𝐨𝐠𝐫𝐚𝐦, the 𝐌.𝐓𝐞𝐜𝐡. 𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬 in Water, Climate, and Sustainability visited the ATC Office at Devi Ahilyabai Holkar International Airport.',
      category: 'Field Visit',
      image: '/assets/Events/Site_visit_ATCIndore.jpeg', 
      link: 'https://www.linkedin.com/posts/ced-outreach-iit-indore-a51575390_civilengineering-iitindore-waterclimatesustainability-activity-7391437916901781504-MkWJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4ENpUBAjdryz1Wdz50rJf3Sm4YnBT4nM8'
    },
    {
      date: '2025-02-10',
      title: 'Prestigious Humboldt Fellowship Awarded',
      description: 'Ms. Minu Treesa Abraham, PhD Student under Prof. Neelima Satyam, selected for the prestigious Humboldt fellowship for Postdocs.',
      category: 'Award',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    },
    {
      date: '2024-03-15', 
      title: 'Himalayan Glaciology Research Featured in Mongabay',
      description: 'Research on western Himalayan glaciers reacting to climate change by Dr. Mohd Farooq Azam\'s team featured in Mongabay magazine.',
      category: 'Research',
      image: '/assets/ce/Civil_front_jpg.jpg' 
    },
    {
      date: '2024-02-20',
      title: 'Research Featured in Media: Soil and Rocks of MP',
      description: 'Research work of Dr. Lalit Borana and his group on "Soil and Rocks of Madhyapradesh" has been featured in Hindi and English Media.',
      category: 'Research',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    },
    {
      date: '2023-11-15',
      title: 'Prof. Biswajeet Pradhan Listed as Highly Cited Researcher',
      description: 'Adjunct Professor Prof. Biswajeet Pradhan listed as one of the highly Cited Researchers announced by Clarivate Analytics.',
      category: 'Award',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    },
    {
      date: '2023-10-24',
      title: 'PhD Admission Advertisement',
      description: 'Last Date of Online Application: October 24, 2023.',
      category: 'Admission',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    },
     {
      date: '2023-09-01',
      title: 'Appointment to NEAT Expert Committee',
      description: 'Prof. Sandeep Chaudhary appointed as an Independent Expert Committee member for the National Educational Alliance for Technology (NEAT).',
      category: 'Appointment',
      image: '/assets/ce/Civil_front_jpg.jpg' 
    },
    {
      date: '2020-12-15',
      title: 'Editor’s Choice Papers Award-2020',
      description: 'Mr. M. Johnson Singh received the prestigious Editor’s Choice Papers Award from the International Journal of Geosynthetics and Ground Engineering.',
      category: 'Award',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    },
    {
      date: '2020-07-10',
      title: 'Ph.D. Openings in Transportation Engineering',
      description: 'Immediate openings for Ph.D. in Transportation Engineering Specialization. Application Deadline: 10 July 2020.',
      category: 'Admission',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    },
    {
      date: '2020-01-20',
      title: 'Executive Member of Indian Society of Engineering Geology',
      description: 'Dr. Neelima Satyam elected as Executive member of Indian Society of Engineering Geology (ISEG) for the term 2020-2021.',
      category: 'Appointment',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    },
    {
      date: '2019-12-15',
      title: 'Best Poster Award at International Conference',
      description: 'Mr. Vikas Poonia awarded the best poster award in International Conference of "Recent Advance in Life Science" held at Indore.',
      category: 'Award',
      image: '/assets/ce/Civil_front_jpg.jpg'  
    }
  ];

  const pastEvents = [
     {
      date: '2026-01-22',
      title: 'REIMAGINING CONSTRUCTION PARADIGMS: STEEL FOR THE NEXT GENERATION',
      description: 
      `The Indian Institute of Technology Indore (IITI), in association with the Institute for Steel Development and Growth (INSDAG), is pleased to invite students, researchers, faculty members, and industry professionals to a one-day Technical Seminar on:

🔹 REIMAGINING CONSTRUCTION PARADIGMS: STEEL FOR THE NEXT GENERATION

`,

      time: '09:00 AM - 05:00 PM',
      venue: '1D-105, IIT Indore Campus',
      category: 'Seminar',
      // Note: Make sure to save the image you uploaded as 'steel_seminar.jpeg' in your assets folder
      image: '/assets/Events/steel.jpg', 
      registrationLink: 'https://docs.google.com/forms/d/1oTXpXYolZUIVl8vKsj0q_HRgBIjvkn-NXKQ5Nc4qKCQ/edit?ts=69390ad1&pli=1' 
    }
  ]; 

  // --- Logic Section ---

  // Sort news by date (Newest first)
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const categories = ['All', 'Achievement', 'Award', 'Research', 'Admission', 'Appointment', 'Seminar', 'Field Visit'];

  const filterEvents = (events) => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (event.category && event.category.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  const ImageModal = () => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedImage(null)}
    >
      <img
        src={selectedImage}
        alt="Preview"
        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
        );
  };
  return (
    <div className="bg-white pt-0">
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Events & Activities</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay connected with our academic events, workshops, conferences, and departmental activities
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events by title, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
             <button
              onClick={() => setActiveTab('news')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'news'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              News & Updates
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'upcoming'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'past'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* News & Updates Tab */}
          {activeTab === 'news' && (
            <div>
              {filterEvents(sortedNews).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-8">
                  {filterEvents(sortedNews).map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                        onClick={() => setSelectedImage(item.image)}
                      />

                        <div className="absolute top-2 right-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm border border-blue-200">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center mb-3 text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                          <span className="font-medium">{formatDate(item.date)}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 hover:text-amber-600 font-medium text-sm flex items-center transition-colors"
                          >
                            <span>Read Full Story</span>
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Upcoming Events Tab */}
          {activeTab === 'upcoming' && (
            <div>
              {filterEvents(upcomingEvents).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filterEvents(upcomingEvents).map((event, index) => (
                   <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row"
                    >

                         {/* Event Image */}
                         <div className="relative md:w-1/2 aspect-[210/297] bg-gray-100 flex items-center justify-center">

                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-contain cursor-pointer"
                            onClick={() => setSelectedImage(event.image)}
                          />

                            <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium shadow-sm">
                                    {event.category}
                                </span>
                            </div>
                        </div>

                        {/* Event Details */}
                        <div className="p-6 md:w-1/2 flex flex-col">
                            <div className="flex items-center text-blue-800 font-semibold mb-2">
                                <Calendar className="h-5 w-5 mr-2" />
                                <span>{formatDate(event.date)}</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                            
                            <div className="space-y-2 mb-4 text-gray-600">
                                <div className="flex items-start">
                                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <span>{event.venue}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed border-t pt-4 border-gray-100">
                                {event.description}
                            </p>

                            <div className="mt-auto">
                                <a 
                                    href={event.registrationLink}
                                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition-colors shadow-sm"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

               {/* Past Events Tab */}
              {activeTab === 'past' && (
                <div>
                  {filterEvents(pastEvents).length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">No past events recorded recently.</p>
                    </div>
                  ) : (
                    <div className="grid lg:grid-cols-2 gap-8">
                      {filterEvents(pastEvents).map((event, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                        >
                          {/* Event Image */}
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                              onClick={() => setSelectedImage(event.image)}
                            />

                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-sm font-medium shadow-sm">
                                {event.category}
                              </span>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center text-blue-800 font-semibold mb-2">
                              <Calendar className="h-5 w-5 mr-2" />
                              <span>{formatDate(event.date)}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {event.title}
                            </h3>

                            <div className="space-y-2 mb-4 text-gray-600">
                              <div className="flex items-start">
                                <Clock className="h-5 w-5 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                                <span>{event.venue}</span>
                              </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed border-t pt-4 border-gray-100">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

        </div>
      </section>

      <ImageModal />
    </div>
  );
};

export default Events;