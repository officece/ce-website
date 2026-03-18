// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';


import AdminFaculty from './pages/admin/AdminFaculty';
import AdminEvents from './pages/admin/AdminEvents';
import AdminMessages from './pages/admin/AdminMessages';
// Public Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import People from './pages/People';
import Specializations from './pages/Specializations';
import Events from './pages/Events';
import Contact from './pages/Contacts';

// Admin Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

// Helper component to hide Navbar/Footer on Admin routes
const PublicLayout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) return children;

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <PublicLayout>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/people" element={<People />} />
            <Route path="/specializations" element={<Specializations />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />

            {/* ADMIN ROUTES */}
            <Route path="/admin/login" element={<AdminLogin />} />
            
            
            {/* PROTECTED ADMIN ROUTES */}
            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                {/* We will build the Faculty and Events managers next! */}
                <Route path="/admin/faculty" element={<AdminFaculty />} />
                <Route path="/admin/events" element={<AdminEvents />} />
                <Route path="/admin/messages" element={<AdminMessages />} />
                <Route path="/admin/messages" element={<div className="p-8">Inbox Coming Soon</div>} />
              </Route>
            </Route>
          </Routes>
        </PublicLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;