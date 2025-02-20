import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  HomeIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { label: 'Properties Sold', value: '10,000+', icon: HomeIcon },
    { label: 'Happy Clients', value: '15,000+', icon: UserGroupIcon },
    { label: 'Years Experience', value: '25+', icon: ChartBarIcon },
    { label: 'Cities Covered', value: '100+', icon: ShieldCheckIcon }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: '20+ years of real estate experience'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Expert in property management'
    },
    // Add more team members...
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Vaal Properties
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Revolutionizing real estate in Ghana with AI-powered solutions to help you find your perfect home.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center"
          >
            <stat.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To revolutionize the real estate industry by leveraging cutting-edge AI technology,
            making property transactions seamless, transparent, and accessible to everyone.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To become the world's most trusted real estate platform, where technology
            meets personal service to create exceptional property experiences.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-primary-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Constantly pushing boundaries with AI and technology
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Integrity
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Maintaining the highest standards of honesty and transparency
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delivering exceptional service and results
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 