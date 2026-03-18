// client/src/pages/admin/AdminDashboard.jsx
import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">System Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
          <h3 className="text-gray-500 font-medium">Total Faculty</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">17</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-500">
          <h3 className="text-gray-500 font-medium">Active Events</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
          <h3 className="text-gray-500 font-medium">Unread Messages</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">0</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;