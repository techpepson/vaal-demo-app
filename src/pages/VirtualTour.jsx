import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import VirtualTourViewer from '../components/property/VirtualTourViewer';

const VirtualTour = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // These would normally come from your API/database
  const virtualTourImages = [
    'https://pannellum.org/images/cerro-toco-0.jpg',
    'https://pannellum.org/images/alma.jpg',
    'https://pannellum.org/images/multires/0/f0/0/0.jpg'
  ];

  useEffect(() => {
    // Simulate loading the virtual tour data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? virtualTourImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === virtualTourImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleBackToProperty = () => {
    navigate(`/property-detail/${id}`, { state: { property } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Navigation header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBackToProperty}
            className="flex items-center text-gray-600 hover:text-primary-600"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Property
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <span className="text-gray-600">
              {currentImageIndex + 1} / {virtualTourImages.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Virtual Tour Viewer */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="h-[600px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
            </div>
          ) : (
            <VirtualTourViewer
              images={virtualTourImages}
              currentImageIndex={currentImageIndex}
            />
          )}
        </div>

        {/* Property Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Living Room</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Spacious living area with natural lighting and modern furnishings.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Kitchen</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Modern kitchen with high-end appliances and granite countertops.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Master Bedroom</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Large master bedroom with ensuite bathroom and walk-in closet.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VirtualTour; 