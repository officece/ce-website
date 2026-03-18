// client/src/pages/admin/AdminFaculty.jsx
import React, { useState, useEffect } from 'react';
import { customFetch } from '../../utils/api';
import { Plus, Trash2, X, Loader2, Edit, Users, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

const AdminFaculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const initialFormState = {
    name: '', designation: '', specialization: 'Structural Engineering', email: '', phone: '', room: ''
  };
  const [formData, setFormData] = useState(initialFormState);

  const loadFaculty = async () => {
    setIsLoading(true);
    try {
      const data = await customFetch('/faculty');
      setFaculty(data);
    } catch (err) {
      alert('Failed to load faculty: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { loadFaculty(); }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = (member) => {
    setFormData({
      name: member.name,
      designation: member.designation,
      specialization: member.specialization,
      email: member.email,
      phone: member.phone || '',
      room: member.room || ''
    });
    setEditingId(member.id);
    setIsModalOpen(true);
  };

  const handleCreateClick = () => {
    setFormData(initialFormState);
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await customFetch(`/faculty/${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(formData)
        });
      } else {
        await customFetch('/faculty', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
      }
      setIsModalOpen(false);
      setFormData(initialFormState);
      setEditingId(null);
      loadFaculty();
    } catch (err) {
      alert(`Failed to ${editingId ? 'update' : 'add'} faculty: ` + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to remove this faculty member?')) return;
    try {
      await customFetch(`/faculty/${id}`, { method: 'DELETE' });
      loadFaculty();
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    }
  };

  // Helper function for dynamic specialization badges
  const getSpecializationBadge = (spec) => {
    const styles = {
      'Structural Engineering': 'bg-blue-100 text-blue-800 border border-blue-200',
      'Geotechnical Engineering': 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      'Transportation Systems Engineering': 'bg-amber-100 text-amber-800 border border-amber-200',
      'Water Resources Engineering': 'bg-cyan-100 text-cyan-800 border border-cyan-200',
      'Environmental Engineering': 'bg-teal-100 text-teal-800 border border-teal-200',
    };
    return styles[spec] || 'bg-slate-100 text-slate-800 border border-slate-200';
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Sleek Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Faculty Directory</h1>
          <p className="text-slate-500 mt-1.5 text-sm md:text-base flex items-center">
            <Users className="h-4 w-4 mr-1.5 text-blue-600" />
            Manage departmental faculty, staff, and contact information.
          </p>
        </div>
        <button
          onClick={handleCreateClick}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl flex items-center shadow-lg shadow-blue-500/30 transition-all duration-300 font-semibold transform hover:-translate-y-0.5"
        >
          <Plus className="h-5 w-5 mr-2" /> Add Faculty
        </button>
      </div>

      {/* Advanced Data Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-72 space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
            <p className="text-slate-500 font-medium animate-pulse">Loading directory...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Name & Profile</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Specialization</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Details</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {faculty.map((member) => (
                  <tr key={member.id} className="hover:bg-slate-50/80 transition-colors duration-200 group">
                    <td className="px-6 py-5">
                      <div className="font-bold text-slate-900 text-base mb-1 group-hover:text-blue-700 transition-colors">
                        {member.name}
                      </div>
                      <div className="text-sm font-medium text-slate-500">{member.designation}</div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1.5 inline-flex text-xs font-bold rounded-lg shadow-sm ${getSpecializationBadge(member.specialization)}`}>
                        {member.specialization}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600 space-y-1.5">
                      <div className="flex items-center">
                        <Mail className="h-3.5 w-3.5 mr-2 text-slate-400" />
                        <span className="truncate max-w-[200px]" title={member.email}>{member.email}</span>
                      </div>
                      {member.phone && (
                        <div className="flex items-center">
                          <Phone className="h-3.5 w-3.5 mr-2 text-slate-400" />
                          {member.phone}
                        </div>
                      )}
                      {member.room && (
                        <div className="flex items-center text-slate-500">
                          <MapPin className="h-3.5 w-3.5 mr-2 text-slate-400" />
                          {member.room}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button onClick={() => handleEditClick(member)} className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="Edit Profile">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleDelete(member.id)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors" title="Remove Faculty">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {faculty.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <AlertCircle className="h-12 w-12 mb-3 text-slate-300" />
                        <p className="text-lg font-medium text-slate-500">No faculty members found</p>
                        <p className="text-sm">Click 'Add Faculty' to populate the directory.</p>
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
          
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800 flex items-center">
                {editingId ? <Edit className="h-5 w-5 mr-2 text-blue-600"/> : <Plus className="h-5 w-5 mr-2 text-blue-600"/>}
                {editingId ? 'Edit Faculty Profile' : 'Add New Faculty Member'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. Dr. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Designation <span className="text-red-500">*</span></label>
                  <input type="text" name="designation" required value={formData.designation} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. Assistant Professor" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Primary Specialization</label>
                  <select name="specialization" value={formData.specialization} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer">
                    <option value="Structural Engineering">Structural Engineering</option>
                    <option value="Geotechnical Engineering">Geotechnical Engineering</option>
                    <option value="Transportation Systems Engineering">Transportation Systems Engineering</option>
                    <option value="Water Resources Engineering">Water Resources Engineering</option>
                    <option value="Environmental Engineering">Environmental Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="faculty@iiti.ac.in" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="+91..." />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Office Room</label>
                  <input type="text" name="room" value={formData.room} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. 405, POD 1D" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 font-medium transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-md transition-all transform hover:-translate-y-0.5">
                  {editingId ? 'Save Profile Changes' : 'Publish Faculty Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFaculty;