// client/src/pages/admin/AdminEvents.jsx
import React, { useState, useEffect } from 'react';
import { customFetch } from '../../utils/api';
import { Plus, Trash2, X, Loader2, Calendar as CalendarIcon, MapPin, Globe, Edit, AlertCircle, FileText } from 'lucide-react';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const initialFormState = {
    title: '', date: '', time: '', venue: '', category: 'Seminar', description: '', registrationLink: '', isNews: false
  };
  const [formData, setFormData] = useState(initialFormState);

  const loadEvents = async () => {
    setIsLoading(true);
    try {
      const data = await customFetch('/events');
      setEvents(data);
    } catch (err) {
      alert('Failed to load events: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { loadEvents(); }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleCreateClick = () => {
    setFormData(initialFormState);
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (event) => {
    const formattedDate = new Date(event.date).toISOString().split('T')[0];
    setFormData({
      title: event.title,
      date: formattedDate,
      time: event.time || '',
      venue: event.venue || '',
      category: event.category,
      description: event.description,
      registrationLink: event.registrationLink || '',
      isNews: event.isNews
    });
    setEditingId(event.id);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await customFetch(`/events/${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(formData)
        });
      } else {
        await customFetch('/events', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
      }
      setIsModalOpen(false);
      setFormData(initialFormState);
      setEditingId(null);
      loadEvents();
    } catch (err) {
      alert(`Failed to ${editingId ? 'update' : 'create'} event: ` + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event/news? This cannot be undone.')) return;
    try {
      await customFetch(`/events/${id}`, { method: 'DELETE' });
      loadEvents();
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    }
  };

  // Helper function for dynamic badge colors
  const getCategoryBadge = (category) => {
    const styles = {
      Seminar: 'bg-blue-100 text-blue-800 border border-blue-200',
      Achievement: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      Award: 'bg-purple-100 text-purple-800 border border-purple-200',
      Admission: 'bg-pink-100 text-pink-800 border border-pink-200',
      Research: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    };
    return styles[category] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Sleek Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">News & Events</h1>
          <p className="text-slate-500 mt-1.5 text-sm md:text-base flex items-center">
            <Globe className="h-4 w-4 mr-1.5 text-amber-500" />
            Manage public announcements and departmental seminars.
          </p>
        </div>
        <button 
          onClick={handleCreateClick} 
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2.5 rounded-xl flex items-center shadow-lg shadow-amber-500/30 transition-all duration-300 font-semibold transform hover:-translate-y-0.5"
        >
          <Plus className="h-5 w-5 mr-2" /> New Post
        </button>
      </div>

      {/* Advanced Data Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-72 space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-amber-500" />
            <p className="text-slate-500 font-medium animate-pulse">Syncing with database...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Announcement Details</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Schedule & Venue</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Visibility</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {events.map((event) => (
                  <tr key={event.id} className="hover:bg-slate-50/80 transition-colors duration-200 group">
                    <td className="px-6 py-5">
                      <div className="font-bold text-slate-900 text-base mb-1 group-hover:text-amber-600 transition-colors line-clamp-1">
                        {event.title}
                      </div>
                      <span className={`px-2.5 py-1 inline-flex text-xs font-bold rounded-md ${getCategoryBadge(event.category)}`}>
                        {event.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center text-slate-700 font-medium mb-1.5">
                        <CalendarIcon className="h-4 w-4 mr-2 text-slate-400" />
                        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                      {event.venue && (
                        <div className="flex items-center text-sm text-slate-500">
                          <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                          {event.venue}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-5">
                      {event.isNews ? (
                        <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-50 text-amber-700 border border-amber-200 shadow-sm">
                          <Globe className="h-3.5 w-3.5 mr-1.5" /> Homepage Marquee
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                          <FileText className="h-3.5 w-3.5 mr-1.5" /> Events Page Only
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button onClick={() => handleEditClick(event)} className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleDelete(event.id)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {events.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <AlertCircle className="h-12 w-12 mb-3 text-slate-300" />
                        <p className="text-lg font-medium text-slate-500">No events found</p>
                        <p className="text-sm">Click 'New Post' to create your first announcement.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Advanced Glassmorphism Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800 flex items-center">
                {editingId ? <Edit className="h-5 w-5 mr-2 text-amber-500"/> : <Plus className="h-5 w-5 mr-2 text-amber-500"/>}
                {editingId ? 'Edit Post Details' : 'Draft New Post'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 overflow-y-auto custom-scrollbar">
              
              {/* Highlighted Toggle */}
              <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl transform transition-transform group-hover:scale-[1.01]"></div>
                <div className="relative p-5 border border-amber-200/60 rounded-xl flex items-start space-x-4">
                  <div className="flex items-center h-6">
                    <input type="checkbox" id="isNews" name="isNews" checked={formData.isNews} onChange={handleInputChange} className="h-5 w-5 text-amber-500 focus:ring-amber-500 border-slate-300 rounded cursor-pointer transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="isNews" className="font-bold text-amber-900 cursor-pointer text-base block">Promote to Homepage Marquee?</label>
                    <p className="text-sm text-amber-700/80 mt-1">Checking this box pushes the headline directly to the scrolling news banner on the landing page.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Post Title <span className="text-red-500">*</span></label>
                  <input type="text" name="title" required value={formData.title} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="Enter an eye-catching title..." />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Date <span className="text-red-500">*</span></label>
                  <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all cursor-pointer">
                    <option value="Seminar">Seminar</option>
                    <option value="Achievement">Achievement</option>
                    <option value="Award">Award</option>
                    <option value="Admission">Admission</option>
                    <option value="Research">Research</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Time Schedule</label>
                  <input type="text" name="time" value={formData.time} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="e.g. 10:00 AM - 12:30 PM" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Location / Venue</label>
                  <input type="text" name="venue" value={formData.venue} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="e.g. POD 1D, Room 405" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Description <span className="text-red-500">*</span></label>
                  <textarea name="description" required rows="4" value={formData.description} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-y" placeholder="Write the complete details here..."></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">External Link (Optional)</label>
                  <input type="url" name="registrationLink" value={formData.registrationLink} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-blue-600" placeholder="https://forms.google.com/..." />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 font-medium transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-md transition-all transform hover:-translate-y-0.5">
                  {editingId ? 'Save Changes' : 'Publish Announcement'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;