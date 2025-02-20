import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  UserGroupIcon,
  HomeIcon,
  CurrencyDollarIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  CogIcon,
  ArrowTrendingUpIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data
  const salesData = [
    { month: 'Jan', sales: 450000, leads: 124 },
    { month: 'Feb', sales: 460000, leads: 128 },
    { month: 'Mar', sales: 475000, leads: 132 },
    { month: 'Apr', sales: 490000, leads: 145 },
    { month: 'May', sales: 510000, leads: 150 },
    { month: 'Jun', sales: 525000, leads: 148 }
  ];

  const propertyTypes = [
    { name: 'Houses', value: 45, color: '#0ea5e9' },
    { name: 'Apartments', value: 30, color: '#6366f1' },
    { name: 'Condos', value: 15, color: '#8b5cf6' },
    { name: 'Land', value: 10, color: '#ec4899' }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'New Listing',
      property: 'Modern Downtown Apartment',
      agent: 'Sarah Johnson',
      date: '2024-02-15',
      status: 'pending'
    },
    {
      id: 2,
      type: 'Sale Completed',
      property: 'Luxury Beach Villa',
      agent: 'Mike Wilson',
      date: '2024-02-14',
      status: 'completed'
    },
    // Add more activities...
  ];

  const stats = [
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: '+12%',
      icon: CurrencyDollarIcon,
      color: 'text-green-500'
    },
    {
      title: 'Active Listings',
      value: '156',
      change: '+8%',
      icon: HomeIcon,
      color: 'text-blue-500'
    },
    {
      title: 'Total Users',
      value: '2,845',
      change: '+24%',
      icon: UserGroupIcon,
      color: 'text-purple-500'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+16%',
      icon: ArrowTrendingUpIcon,
      color: 'text-pink-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back, Admin
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <CogIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Revenue Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#0ea5e9" 
                name="Sales ($)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Property Types Distribution */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Property Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyTypes}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {propertyTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b dark:border-gray-700">
                  <th className="pb-3 text-gray-600 dark:text-gray-400">Type</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400">Property</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400">Agent</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400">Date</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400">Status</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity) => (
                  <tr key={activity.id} className="border-b dark:border-gray-700">
                    <td className="py-4 text-gray-900 dark:text-white">
                      {activity.type}
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      {activity.property}
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-400">
                      {activity.agent}
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-400">
                      {activity.date}
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          activity.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-primary-600 hover:text-primary-700">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <button className="p-4 bg-primary-50 dark:bg-gray-800 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-100 transition-colors">
          <DocumentTextIcon className="w-6 h-6 text-primary-600" />
          <span className="text-primary-600 font-medium">Generate Report</span>
        </button>
        <button className="p-4 bg-primary-50 dark:bg-gray-800 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-100 transition-colors">
          <UserGroupIcon className="w-6 h-6 text-primary-600" />
          <span className="text-primary-600 font-medium">Manage Users</span>
        </button>
        <button className="p-4 bg-primary-50 dark:bg-gray-800 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-100 transition-colors">
          <HomeIcon className="w-6 h-6 text-primary-600" />
          <span className="text-primary-600 font-medium">Add Property</span>
        </button>
      </div>
    </motion.div>
  );
};

export default AdminDashboard; 