// client/src/pages/admin/AdminFaculty.jsx
import React, { useState, useEffect } from 'react';
import { customFetch } from '../../utils/api';
import { Plus, Trash2, X, Loader2 } from 'lucide-react';

const AdminFaculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    specialization: 'Structural Engineering',
    email: '',
    phone: '',
    room: ''
  });

  // Fetch Faculty on Component Mount
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

  useEffect(() => {
    loadFaculty();
  }, []);

  // Handle Input Changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit New Faculty
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await customFetch('/faculty', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      setIsModalOpen(false);
      setFormData({ name: '', designation: '', specialization: 'Structural Engineering', email: '', phone: '', room: '' });
      loadFaculty(); // Reload the table
    } catch (err) {
      alert('Failed to add faculty: ' + err.message);
    }
  };

  // Delete Faculty
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to remove this faculty member?')) return;
    try {
      await customFetch(`/faculty/${id}`, {
        method: 'DELETE'
      });
      loadFaculty(); // Reload the table
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Faculty Manager</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center shadow-md transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Faculty
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-blue-800" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name & Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Specialization</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {faculty.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.designation}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {member.specialization}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{member.email}</div>
                      <div>{member.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => handleDelete(member.id)}
                        className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Faculty"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {faculty.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                      No faculty members found. Click 'Add Faculty' to create one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add New Faculty Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-100">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900">Add New Faculty Member</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Dr. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                  <input type="text" name="designation" required value={formData.designation} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Assistant Professor" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                  <select name="specialization" value={formData.specialization} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="Structural Engineering">Structural Engineering</option>
                    <option value="Geotechnical Engineering">Geotechnical Engineering</option>
                    <option value="Transportation Systems Engineering">Transportation Engineering</option>
                    <option value="Water Resources Engineering">Water Resources Engineering</option>
                    <option value="Environmental Engineering">Environmental Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Office Room</label>
                  <input type="text" name="room" value={formData.room} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 405, POD 1D" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="faculty@iiti.ac.in" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91..." />
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-8">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors shadow-sm">
                  Save Faculty Member
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