import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  MapIcon,
  ViewColumnsIcon
} from '@heroicons/react/24/outline';
import PropertyCard from '../components/property/PropertyCard';
import PropertyMap from '../components/property/PropertyMap';

const PropertyListing = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: ''
  });

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "East Legon, Accra",
      price: 850000,
      type: "House",
      beds: 4,
      baths: 3,
      sqft: 3200,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
    },
    // Add more properties...
  ]);

  const [showAITools, setShowAITools] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProperty = () => {
    navigate('/sell-property');
  };

  const handlePropertyManagement = () => {
    navigate('/property-management');
  };

  const handleAIGenerate = async (type) => {
    setIsGenerating(true);
    try {
      // Simulate AI generation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      switch(type) {
        case 'title':
          // Update property title with AI-generated one
          if (selectedProperty) {
            const newTitle = "AI Generated: Stunning Contemporary Haven with Mountain Views";
            setProperties(prev => prev.map(p => 
              p.id === selectedProperty.id ? {...p, title: newTitle} : p
            ));
          }
          break;
        case 'description':
          // Add AI-generated description
          break;
        case 'images':
          // Suggest similar images
          break;
        case 'tags':
          // Generate relevant tags
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('AI Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Property Listings
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={handleAddProperty}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Add Property
          </button>
          <button
            onClick={handlePropertyManagement}
            className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700"
          >
            Manage Properties
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2 relative">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          >
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>

          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          />

          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          />

          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex-1 p-2 rounded-lg ${
                viewMode === 'grid' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <ViewColumnsIcon className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex-1 p-2 rounded-lg ${
                viewMode === 'map' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <MapIcon className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Property Grid/Map View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="h-[600px] rounded-lg overflow-hidden">
          <PropertyMap properties={properties} />
        </div>
      )}
    </motion.div>
  );
};

export default PropertyListing; 