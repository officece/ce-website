import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, GraduationCap } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Academic Programs', href: '/academics' },
    { name: 'People', href: '/people' },
    { name: 'Specializations', href: '/specializations' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://www.linkedin.com/in/ced-outreach-iit-indore-a51575390/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ced-outreach-iit-indore-a51575390/' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.linkedin.com/in/ced-outreach-iit-indore-a51575390/' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">IIT Indore</h3>
                <p className="text-sm text-gray-300">Civil Engineering</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Building tomorrow's infrastructure today. Excellence in education, research, and innovation in civil engineering.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>403, POD 1C</p>
                  <p>Indian Institute of Technology Indore</p>
                  <p>Khandwa Road, Simrol</p>
                  <p>Indore 453552, Madhya Pradesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-sm text-gray-300">0731-660 3477</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-sm text-gray-300">ceoffice@iiti.ac.in</span>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                  Admission Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                  Faculty Portal
                </a>
              </li>
              <li>
                <a href="https://alumni.iiti.ac.in/" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                  Alumni Network
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                  Research Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} IIT Indore Civil Engineering Department. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;