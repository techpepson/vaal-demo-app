import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, message, details } = location.state || {
    type: 'success',
    message: 'Operation completed successfully!',
    details: {}
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        {type === 'success' ? (
          <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-8" />
        ) : (
          <XMarkIcon className="w-20 h-20 text-red-500 mx-auto mb-8" />
        )}
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {type === 'success' ? 'Success!' : 'Error'}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {message}
        </p>

        {Object.keys(details).length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 text-left">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(details).map(([key, value]) => (
                <div key={key}>
                  <p className="text-gray-600 dark:text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Go Back
          </button>
          <button
            onClick={handleBackToHome}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Confirmation; 