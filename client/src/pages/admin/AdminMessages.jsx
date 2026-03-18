// client/src/pages/admin/AdminMessages.jsx
import React, { useState, useEffect } from 'react';
import { customFetch } from '../../utils/api';
import { Loader2, Mail, MailOpen, Trash2, CheckCircle, Clock, Inbox, AlertCircle } from 'lucide-react';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const loadMessages = async () => {
    setIsLoading(true);
    try {
      const data = await customFetch('/messages');
      setMessages(data);
    } catch (err) {
      alert('Failed to load messages: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { loadMessages(); }, []);

  const handleMarkAsRead = async (id, currentStatus) => {
    if (currentStatus) return; // Already read
    try {
      await customFetch(`/messages/${id}/read`, { method: 'PUT' });
      setMessages(messages.map(msg => msg.id === id ? { ...msg, isRead: true } : msg));
    } catch (err) {
      alert('Failed to mark as read: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message permanently?')) return;
    try {
      await customFetch(`/messages/${id}`, { method: 'DELETE' });
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    }
  };

  const toggleExpand = (id, isRead) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      handleMarkAsRead(id, isRead); // Automatically mark as read when opened
    }
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center">
            Inbox
            {unreadCount > 0 && (
              <span className="ml-3 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
                {unreadCount} New
              </span>
            )}
          </h1>
          <p className="text-slate-500 mt-1.5 text-sm md:text-base flex items-center">
            <Inbox className="h-4 w-4 mr-1.5 text-blue-600" />
            Manage inquiries from the public contact form.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-72 space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
            <p className="text-slate-500 font-medium animate-pulse">Checking inbox...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <CheckCircle className="h-16 w-16 mb-4 text-emerald-400" />
            <p className="text-xl font-bold text-slate-600">Inbox Zero!</p>
            <p className="text-sm mt-1">You are all caught up.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {messages.map((msg) => (
              <div key={msg.id} className={`transition-colors duration-200 ${!msg.isRead ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                {/* Header Row (Clickable) */}
                <div 
                  onClick={() => toggleExpand(msg.id, msg.isRead)}
                  className="px-6 py-4 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center flex-1 min-w-0 pr-4">
                    {!msg.isRead ? (
                      <Mail className="h-5 w-5 text-blue-600 mr-4 flex-shrink-0" />
                    ) : (
                      <MailOpen className="h-5 w-5 text-slate-400 mr-4 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-bold truncate ${!msg.isRead ? 'text-slate-900' : 'text-slate-600'}`}>
                          {msg.name} <span className="text-slate-400 font-normal">&lt;{msg.email}&gt;</span>
                        </span>
                        <span className="text-xs text-slate-400 whitespace-nowrap ml-4 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded font-semibold mr-2 border border-slate-200">
                          {msg.category}
                        </span>
                        <span className={`text-sm truncate ${!msg.isRead ? 'font-bold text-slate-800' : 'text-slate-500'}`}>
                          {msg.subject}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Message Body */}
                {expandedId === msg.id && (
                  <div className="px-6 pb-6 pt-2 pl-14 bg-slate-50/50 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-slate-700 whitespace-pre-wrap leading-relaxed text-sm">
                        {msg.message}
                      </p>
                      
                      <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                        <a 
                          href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                          className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Reply via Email
                        </a>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleDelete(msg.id); }}
                          className="flex items-center text-sm font-bold text-red-600 hover:text-red-800 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1.5" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;