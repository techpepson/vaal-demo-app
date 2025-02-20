import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CalendarIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const PropertyInquiry = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    inquiryType: 'viewing'
  });

  const [aiSuggestions, setAiSuggestions] = useState({
    questions: [],
    schedule: null,
    response: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateAIResponse = async () => {
    setIsGenerating(true);
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setAiSuggestions({
        questions: [
          "What's your preferred move-in date?",
          "Are you interested in the property's smart home features?",
          "Would you like information about nearby schools and amenities?",
          "Are you looking for long-term or short-term occupancy?"
        ],
        schedule: {
          suggestedDates: [
            "2024-03-15 10:00 AM",
            "2024-03-16 2:00 PM",
            "2024-03-17 11:00 AM"
          ],
          agentAvailability: "Available for immediate viewing"
        },
        response: `Thank you for your interest in ${property?.title}! Based on your inquiry, I recommend scheduling a viewing during morning hours when natural light is optimal. I'll also prepare detailed information about:
        - Recent property upgrades
        - Neighborhood statistics
        - Financing options
        - Similar properties in the area`
      });
      
      setShowAIResponse(true);
    } catch (error) {
      console.error('AI Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process form submission
    navigate('/confirmation', {
      state: {
        type: 'inquiry',
        message: 'Your inquiry has been submitted successfully!',
        details: {
          propertyTitle: property?.title,
          inquiryType: inquiryForm.inquiryType,
          scheduledDate: inquiryForm.preferredDate,
          scheduledTime: inquiryForm.preferredTime
        }
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {/* Property Summary */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Inquiry for {property?.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {property?.location} | ${property?.price?.toLocaleString()}
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inquiry Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={inquiryForm.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={inquiryForm.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={inquiryForm.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={inquiryForm.inquiryType}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                    >
                      <option value="viewing">Schedule Viewing</option>
                      <option value="information">Request Information</option>
                      <option value="offer">Make an Offer</option>
                      <option value="availability">Check Availability</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={inquiryForm.preferredDate}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={inquiryForm.preferredTime}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={inquiryForm.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                    >
                      Submit Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={generateAIResponse}
                      disabled={isGenerating}
                      className="px-4 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 disabled:opacity-50"
                    >
                      <SparklesIcon className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>

              {/* AI Suggestions */}
              <div className="space-y-6">
                {isGenerating ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
                  </div>
                ) : showAIResponse && (
                  <>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">
                        AI-Suggested Questions
                      </h3>
                      <ul className="space-y-2">
                        {aiSuggestions.questions.map((question, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">
                        Suggested Schedule
                      </h3>
                      <div className="space-y-2">
                        {aiSuggestions.schedule?.suggestedDates.map((date, index) => (
                          <div
                            key={index}
                            className="flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <CalendarIcon className="w-5 h-5 mr-2" />
                            {date}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">
                        AI Response
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {aiSuggestions.response}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyInquiry; 