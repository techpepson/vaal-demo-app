import { Link } from 'react-router-dom';
import {
  FaceSmileIcon,
  ChatBubbleLeftIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const quickLinks = [
    { name: 'Properties', href: '/properties' },
    { name: 'Market Analysis', href: '/market-analysis' },
    { name: 'Virtual Tours', href: '/virtual-tour/1' },
    { name: 'Mortgage Calculator', href: '/mortgage-calculator' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  const contact = {
    address: 'Airport City, Accra, Ghana',
    phone: '+1 (555) 123-4567',
    email: 'contact@vaal.com'
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaceSmileIcon },
    { name: 'Twitter', href: '#', icon: ChatBubbleLeftIcon },
    { name: 'Instagram', href: '#', icon: GlobeAltIcon },
    { name: 'LinkedIn', href: '#', icon: UserGroupIcon }
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Vaal Properties
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Find your dream home with our AI-powered real estate platform.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-600"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>{contact.address}</p>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Subscribe to Our Newsletter
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Vaal Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 