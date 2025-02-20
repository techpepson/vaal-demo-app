import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock data - replace with API call
  const bookings = {
    upcoming: [
      {
        id: 1,
        property: "Modern Downtown Apartment",
        date: "2024-02-20",
        time: "14:00",
        location: "123 Main St, New York, NY",
        status: "confirmed",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        id: 2,
        property: "Luxury Beachfront Villa",
        date: "2024-02-22",
        time: "10:30",
        location: "456 Ocean Dr, Miami, FL",
        status: "pending",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ],
    past: [
      {
        id: 3,
        property: "Urban Loft",
        date: "2024-02-10",
        time: "15:00",
        location: "789 Park Ave, Chicago, IL",
        status: "completed",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'completed':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Property Viewings
      </h1>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'upcoming'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          }`}
        >
          Upcoming Viewings
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'past'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          }`}
        >
          Past Viewings
        </button>
      </div>

      <div className="grid gap-6">
        {bookings[activeTab].map((booking) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={booking.imageUrl}
                  alt={booking.property}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {booking.property}
                </h3>
                
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    <span>{new Date(booking.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span>{booking.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPinIcon className="w-5 h-5 mr-2" />
                    <span>{booking.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`capitalize ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
                {booking.status === 'confirmed' && (
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                )}
                {booking.status === 'pending' && (
                  <div className="w-5 h-5 rounded-full border-2 border-yellow-600 border-t-transparent animate-spin" />
                )}
              </div>
            </div>
            
            {activeTab === 'upcoming' && (
              <div className="mt-4 flex justify-end space-x-4">
                <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg dark:hover:bg-red-900/20">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  Reschedule
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Bookings; 