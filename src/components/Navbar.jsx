import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Home, Newspaper, Info } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CryptoTracker
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
              <Link
                to="/news"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/news') 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Newspaper className="h-4 w-4 mr-2" />
                News
              </Link>
              <Link
                to="/about"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Info className="h-4 w-4 mr-2" />
                About
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - you can expand this with state management */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-sm">
          <Link
            to="/"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') 
                ? 'bg-blue-600/20 text-blue-400' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Home className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/news"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/news') 
                ? 'bg-blue-600/20 text-blue-400' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Newspaper className="h-5 w-5 mr-3" />
            News
          </Link>
          <Link
            to="/about"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/about') 
                ? 'bg-blue-600/20 text-blue-400' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Info className="h-5 w-5 mr-3" />
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;