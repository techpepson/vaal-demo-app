import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const SimpleViewer = ({ images, activeView = 0, onViewChange }) => {
  const [currentView, setCurrentView] = useState(activeView);

  const handleViewChange = (newView) => {
    setCurrentView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="aspect-video rounded-lg overflow-hidden"
      >
        <img
          src={images[currentView]}
          alt={`View ${currentView + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
        <button
          onClick={() => handleViewChange((currentView - 1 + images.length) % images.length)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
          aria-label="Previous view"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleViewChange((currentView + 1) % images.length)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
          aria-label="Next view"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SimpleViewer; 