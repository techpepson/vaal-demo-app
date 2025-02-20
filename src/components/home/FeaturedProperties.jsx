import { motion } from 'framer-motion';
import PropertyCard from '../property/PropertyCard';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse",
      location: "Manhattan, NY",
      price: 4500000,
      type: "Penthouse",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Beachfront Villa",
      location: "Miami Beach, FL",
      price: 6200000,
      type: "Villa",
      beds: 5,
      baths: 4,
      sqft: 4500,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Modern Downtown Loft",
      location: "San Francisco, CA",
      price: 2100000,
      type: "Loft",
      beds: 2,
      baths: 2,
      sqft: 1800,
      imageUrl: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties; 