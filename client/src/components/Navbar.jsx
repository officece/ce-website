import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react'; // Removed GraduationCap

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'People', href: '/people' },
    { name: 'Specializations', href: '/specializations' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Simple client-side search - in a real app, this would be more sophisticated
      const searchResults = document.body.innerText.toLowerCase().includes(searchTerm.toLowerCase());
      if (searchResults) {
        alert(`Found content related to: ${searchTerm}`);
      } else {
        alert(`No results found for: ${searchTerm}`);
      }
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* UPDATED: Replaced Hat Icon with Image */}
            <img 
              src="/assets/ce/logo.png" 
              alt="IIT Indore Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-blue-800">IIT Indore</h1>
              <p className="text-sm text-gray-600 -mt-1">Civil Engineering</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="bg-transparent border-none outline-none text-sm w-32 sm:w-48"
                    autoFocus
                  />
                  <button
                    onClick={handleSearch}
                    className="text-blue-600 hover:text-blue-800 ml-2"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-blue-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;