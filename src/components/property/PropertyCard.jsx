import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeartIcon, ShareIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handlePropertyClick = () => {
    navigate(`/property-detail/${property.id}`, { state: { property } });
  };

  const handleAction = (action, e) => {
    e.stopPropagation(); // Prevent triggering the card click
    navigate(`/property/${property.id}/${action}`, { state: { property } });
  };

  const handleVirtualTour = (e) => {
    e.stopPropagation();
    navigate(`/virtual-tour/${property.id}`, { state: { property } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative cursor-pointer" onClick={handlePropertyClick}>
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="p-2 bg-white/80 rounded-full hover:bg-white">
            <HeartIcon className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 bg-white/80 rounded-full hover:bg-white">
            <ShareIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/virtual-tour/${property.id}`, { state: { property } });
          }}
          className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-lg text-white hover:bg-black/70 flex items-center"
        >
          <VideoCameraIcon className="w-5 h-5 mr-1" />
          Virtual Tour
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {property.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          {property.location}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-primary-600 font-bold text-xl">
            ${property.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {property.type}
          </span>
        </div>
        
        <div className="mt-4 flex space-x-4 text-sm">
          <span className="flex items-center text-gray-500 dark:text-gray-400">
            <span className="mr-1">{property.beds}</span> Beds
          </span>
          <span className="flex items-center text-gray-500 dark:text-gray-400">
            <span className="mr-1">{property.baths}</span> Baths
          </span>
          <span className="flex items-center text-gray-500 dark:text-gray-400">
            <span className="mr-1">{property.sqft}</span> sq.ft
          </span>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
        <button
          onClick={(e) => handleAction('buy', e)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Buy Now
        </button>
        <button
          onClick={(e) => handleAction('rent', e)}
          className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700"
        >
          Rent Now
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard; 