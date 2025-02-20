import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserCircleIcon,
  CogIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Simulated auth state - replace with your actual auth logic
  const isAuthenticated = true;
  const isAdmin = true;

  const navigationLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Properties', path: '/properties', icon: BuildingOfficeIcon },
    { name: 'Buy', path: '/buy-property', icon: ChartBarIcon },
    { name: 'Rent', path: '/rent-property', icon: ChartBarIcon },
    { name: 'Sell', path: '/sell-property', icon: ChartBarIcon },
  ];

  const userMenuItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: ChartBarIcon,
      show: isAuthenticated 
    },
    { 
      name: 'Admin Panel', 
      path: '/admin', 
      icon: ShieldCheckIcon,
      show: isAdmin 
    },
    { 
      name: 'Property Management', 
      path: '/property-management', 
      icon: BuildingOfficeIcon,
      show: isAuthenticated 
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: CogIcon,
      show: isAuthenticated 
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://vaal.com.gh/wp-content/uploads/2023/06/VAAL-LOGO.svg"
              alt="Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Vaal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            {/* User Menu */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <UserCircleIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Account
                </span>
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    {userMenuItems
                      .filter(item => item.show)
                      .map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <item.icon className="h-5 w-5 mr-2" />
                          {item.name}
                        </Link>
                    ))}
                    <button
                      onClick={() => {
                        // Handle logout
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Sign out
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <link.icon className="h-5 w-5 mr-2" />
                  {link.name}
                </div>
              </Link>
            ))}
            {userMenuItems
              .filter(item => item.show)
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.name}
                  </div>
                </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 