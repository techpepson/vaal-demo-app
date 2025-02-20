import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, data } = location.state || {};

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleViewProperties = () => {
    navigate('/properties');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-8" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Application Submitted Successfully!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {type === 'purchase'
            ? 'Your purchase application has been received. Our team will review it and contact you soon.'
            : 'Your rental application has been received. Our team will review it and contact you soon.'}
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4">Application Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Name</p>
              <p className="font-medium">{`${data?.firstName} ${data?.lastName}`}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Email</p>
              <p className="font-medium">{data?.email}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Phone</p>
              <p className="font-medium">{data?.phone}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                {type === 'purchase' ? 'Desired Closing Date' : 'Desired Move-in Date'}
              </p>
              <p className="font-medium">
                {type === 'purchase' ? data?.desiredClosingDate : data?.desiredMoveInDate}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleBackToHome}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Back to Home
          </button>
          <button
            onClick={handleViewProperties}
            className="px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700"
          >
            View More Properties
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmationPage; 