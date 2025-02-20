import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useSearchParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Invoice from '../components/payment/Invoice';
import { CheckCircleIcon, PrinterIcon } from '@heroicons/react/24/outline';

const stripePromise = loadStripe('your_publishable_key');

const Payment = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const [paymentStep, setPaymentStep] = useState('review'); // review, payment, confirmation
  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    // Simulate fetching payment data
    setPaymentData({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 000-0000",
      property: {
        id: id,
        title: "Modern Downtown Apartment",
        location: "123 Main St, New York, NY",
        type: "Apartment",
        price: 750000,
        rentPrice: 3500
      },
      downPayment: type === 'buy' ? 150000 : 7000,
      moveInDate: "2024-03-01"
    });
  }, [id, type]);

  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setPaymentStep('confirmation');
    setLoading(false);
  };

  if (!paymentData) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {paymentStep === 'review' && (
        <>
          <Invoice data={paymentData} type={type} />
          <div className="max-w-4xl mx-auto mt-8">
            <button
              onClick={() => setPaymentStep('payment')}
              className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}

      {paymentStep === 'payment' && (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Payment Details
          </h2>
          {/* Add Stripe Elements here */}
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            {loading ? 'Processing...' : 'Complete Payment'}
          </button>
        </div>
      )}

      {paymentStep === 'confirmation' && (
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Your payment has been processed successfully. You will receive a confirmation email shortly.
          </p>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <PrinterIcon className="w-5 h-5 mr-2" />
            Print Receipt
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Payment; 