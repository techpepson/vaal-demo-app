import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import PropertyCard from '../components/property/PropertyCard';

const RentBuy = () => {
  const [selectedTab, setSelectedTab] = useState('buy');

  const properties = {
    buy: [
      {
        id: 1,
        title: "Luxury Villa",
        location: "East Legon, Accra",
        price: 850000,
        type: "House",
        beds: 4,
        baths: 3,
        sqft: 3200,
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
      },
      // Add more properties...
    ],
    rent: [
      {
        id: 1,
        title: "Modern Apartment",
        location: "Airport Residential, Accra",
        price: 2500,
        type: "Apartment",
        beds: 2,
        baths: 2,
        sqft: 1200,
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500"
      },
      // Add more properties...
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Tab.Group>
        <Tab.List className="flex space-x-4 mb-8">
          <Tab
            className={({ selected }) =>
              `px-6 py-3 rounded-lg font-medium ${
                selected
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`
            }
          >
            Buy
          </Tab>
          <Tab
            className={({ selected }) =>
              `px-6 py-3 rounded-lg font-medium ${
                selected
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`
            }
          >
            Rent
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.buy.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.rent.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </motion.div>
  );
};

export default RentBuy; 