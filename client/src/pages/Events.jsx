// client/src/pages/Events.jsx
import React, { useState, useEffect } from 'react';
import { Calendar, Search, MapPin, Clock, Loader2, Globe } from 'lucide-react';
import { customFetch } from '../utils/api';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dynamic State
  const [eventsList, setEventsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Live Data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await customFetch('/events');
        setEventsList(data);
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Filter Logic: Separate into News vs standard Events
  const upcomingEvents = eventsList.filter(e => !e.isNews);
  const newsData = eventsList.filter(e => e.isNews);

  // Apply Search
  const filterBySearch = (items) => {
    return items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const displayData = activeTab === 'upcoming' ? filterBySearch(upcomingEvents) : filterBySearch(newsData);

  return (
    <div className="pt-0">
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">News & Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest happenings, seminars, and achievements in the Department.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200 w-full md:w-auto">
              <button 
                onClick={() => setActiveTab('upcoming')}
                className={`flex-1 md:px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  activeTab === 'upcoming' ? 'bg-amber-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Department Events
              </button>
              <button 
                onClick={() => setActiveTab('news')}
                className={`flex-1 md:px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  activeTab === 'news' ? 'bg-amber-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                News & Announcements
              </button>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'upcoming' ? 'events' : 'news'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none shadow-sm"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-amber-500 mb-4" />
              <p className="text-gray-500 font-medium">Fetching updates...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayData.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold border border-blue-100">
                        {item.category}
                      </span>
                      {item.isNews && (
                        <span className="flex items-center text-xs font-bold text-amber-600">
                          <Globe className="h-3 w-3 mr-1" /> Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                    
                    <div className="space-y-2 mb-6 text-sm text-gray-600 font-medium bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center text-blue-800">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      {item.time && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" /> {item.time}
                        </div>
                      )}
                      {item.venue && (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" /> {item.venue}
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6">
                      {item.description}
                    </p>

                    {item.registrationLink && (
                      <a 
                        href={item.registrationLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        More Information
                      </a>
                    )}
                  </div>
                </div>
              ))}
              
              {displayData.length === 0 && (
                <div className="col-span-full text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xl text-gray-500 font-medium">No {activeTab === 'upcoming' ? 'events' : 'news'} found at the moment.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;