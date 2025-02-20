import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HomeIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

const PropertyDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");

  const property = location.state?.property || {
    id,
    title: "Luxury Villa",
    location: "East Legon, Accra",
    price: 850000,
    type: "House",
    beds: 4,
    baths: 3,
    sqft: 3200,
    description:
      "This stunning luxury villa offers modern living at its finest...",
    features: [
      "Swimming Pool",
      "Garden",
      "Security System",
      "Garage",
      "Air Conditioning",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      // Add more images
    ],
    agent: {
      name: "John Doe",
      phone: "+233 20 123 4567",
      email: "john@vaal.com",
    },
  };

  const startVirtualTour = () => {
    navigate(`/virtual-tour/${id}`, { state: { property } });
  };

  const handleAction = (action) => {
    if (action === 'buy') {
      navigate('/buy-property', { state: { property } });
    } else if (action === 'rent') {
      navigate('/rent-property', { state: { property } });
    }
  };

  const handleInquiry = () => {
    navigate('/property-inquiry', { state: { property } });
  };

  const handleManagement = () => {
    navigate(`/property-management/${id}`, { state: { property } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4">
          {property.images.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${property.title} ${index + 2}`}
              className="w-full h-44 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Property Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {property.title}
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
            <MapPinIcon className="w-5 h-5 mr-2" />
            {property.location}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
              <p className="text-xl font-bold text-primary-600">
                ${property.price.toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {property.type}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Size</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {property.sqft} sq.ft
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p>{property.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="grid grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <HomeIcon className="w-5 h-5 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Agent Info */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-gray-600" />
                <span>{property.agent.name}</span>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="w-5 h-5 mr-2 text-gray-600" />
                <span>{property.agent.phone}</span>
              </div>
              <div className="flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-gray-600" />
                <span>{property.agent.email}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => handleAction('buy')}
              className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Buy Now
            </button>
            <button
              onClick={() => handleAction('rent')}
              className="w-full py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700"
            >
              Rent Now
            </button>
            <button
              onClick={handleInquiry}
              className="w-full py-3 flex items-center justify-center bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              Make an Inquiry
            </button>
            <button
              onClick={startVirtualTour}
              className="w-full py-3 flex items-center justify-center bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200"
            >
              <VideoCameraIcon className="w-5 h-5 mr-2" />
              Start Virtual Tour
            </button>
            {property.isManaged && (
              <button
                onClick={handleManagement}
                className="w-full py-3 flex items-center justify-center bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Property Management
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetail;
