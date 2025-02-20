import { motion } from 'framer-motion';
import PropertyCard from '../components/property/PropertyCard';
import SearchBar from '../components/search/SearchBar';

const Home = () => {
  // Mock data - replace with API call
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "123 Main St, New York, NY",
      price: 750000,
      type: "Apartment",
      beds: 2,
      baths: 2,
      sqft: 1200,
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500"
    },
    {
      id: 2,
      title: "Luxury Beachfront Villa",
      location: "456 Ocean Dr, Miami, FL",
      price: 2500000,
      type: "House",
      beds: 4,
      baths: 3,
      sqft: 3500,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500"
    },
    {
      id: 3,
      title: "Contemporary City View Penthouse",
      location: "789 Skyline Ave, Los Angeles, CA",
      price: 1850000,
      type: "Penthouse",
      beds: 3,
      baths: 2.5,
      sqft: 2200,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
    },
    {
      id: 4,
      title: "Suburban Family Home",
      location: "321 Oak St, Austin, TX",
      price: 950000,
      type: "House",
      beds: 4,
      baths: 3,
      sqft: 2800,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500"
    },
    {
      id: 5,
      title: "Modern Glass House",
      location: "567 Pine Rd, Seattle, WA",
      price: 1650000,
      type: "House",
      beds: 3,
      baths: 2,
      sqft: 2400,
      imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500"
    },
    {
      id: 6,
      title: "Downtown Loft",
      location: "890 Market St, San Francisco, CA",
      price: 1200000,
      type: "Apartment",
      beds: 2,
      baths: 2,
      sqft: 1800,
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to Vaal Properties
      </h1>

      <SearchBar />

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home; 