// client/src/pages/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { customFetch } from '../../utils/api';
import { Users, Calendar, Inbox, Loader2, Activity, ArrowRight, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    faculty: 0,
    events: 0,
    unreadMessages: 0,
    totalMessages: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      setIsLoading(true);
      try {
        // Fetch all data simultaneously for maximum speed
        const [facultyData, eventsData, messagesData] = await Promise.all([
          customFetch('/faculty'),
          customFetch('/events'),
          customFetch('/messages')
        ]);

        setStats({
          faculty: facultyData.length,
          events: eventsData.length,
          unreadMessages: messagesData.filter(m => !m.isRead).length,
          totalMessages: messagesData.length
        });
      } catch (err) {
        console.error('Failed to load dashboard stats:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center">
            <Activity className="h-8 w-8 mr-3 text-blue-600" />
            System Overview
          </h1>
          <p className="text-slate-500 mt-1.5 text-sm md:text-base">
            Real-time metrics and quick actions for the Civil Engineering portal.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-64 space-y-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
          <p className="text-slate-500 font-medium animate-pulse">Syncing systems...</p>
        </div>
      ) : (
        <>
          {/* Main Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Faculty Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-24 w-24 text-blue-600 transform translate-x-4 -translate-y-4" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-slate-500 font-semibold">Total Faculty</h3>
                </div>
                <div className="flex items-end space-x-2">
                  <p className="text-4xl font-extrabold text-slate-900 mt-2">{stats.faculty}</p>
                  <span className="text-sm font-medium text-emerald-500 mb-1 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" /> Active
                  </span>
                </div>
              </div>
            </div>

            {/* Events Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-24 w-24 text-amber-500 transform translate-x-4 -translate-y-4" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-slate-500 font-semibold">Published Posts</h3>
                </div>
                <div className="flex items-end space-x-2">
                  <p className="text-4xl font-extrabold text-slate-900 mt-2">{stats.events}</p>
                  <span className="text-sm font-medium text-slate-400 mb-1">News & Events</span>
                </div>
              </div>
            </div>

            {/* Messages Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-300">
                <Inbox className="h-24 w-24 text-red-500 transform translate-x-4 -translate-y-4" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${stats.unreadMessages > 0 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-600'}`}>
                    <Inbox className="h-5 w-5" />
                  </div>
                  <h3 className="text-slate-500 font-semibold">Unread Messages</h3>
                </div>
                <div className="flex items-end space-x-2">
                  <p className="text-4xl font-extrabold text-slate-900 mt-2">{stats.unreadMessages}</p>
                  <span className="text-sm font-medium text-slate-400 mb-1">out of {stats.totalMessages} total</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Actions Panel */}
          <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/admin/events" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-sm transition-all group">
              <div className="flex items-center">
                <div className="bg-amber-50 p-2 rounded-lg mr-3 group-hover:bg-amber-100 transition-colors">
                  <Calendar className="h-5 w-5 text-amber-600" />
                </div>
                <span className="font-semibold text-slate-700">Draft New Event</span>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transform group-hover:translate-x-1 transition-all" />
            </Link>

            <Link to="/admin/faculty" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-sm transition-all group">
              <div className="flex items-center">
                <div className="bg-blue-50 p-2 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-semibold text-slate-700">Add Faculty Member</span>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
            </Link>

            <Link to="/admin/messages" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-red-400 hover:shadow-sm transition-all group">
              <div className="flex items-center">
                <div className="bg-red-50 p-2 rounded-lg mr-3 group-hover:bg-red-100 transition-colors">
                  <Inbox className="h-5 w-5 text-red-600" />
                </div>
                <span className="font-semibold text-slate-700">Check Inbox</span>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;