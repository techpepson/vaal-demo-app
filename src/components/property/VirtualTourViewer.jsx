import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VirtualTourViewer = ({ images, currentImageIndex = 0 }) => {
  const sceneRef = useRef(null);
  const [isAframeLoaded, setIsAframeLoaded] = useState(false);

  useEffect(() => {
    // Import A-Frame dynamically
    import("aframe")
      .then(() => {
        setIsAframeLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to load A-Frame:", error);
        setIsAframeLoaded(false);
      });
  }, []);

  useEffect(() => {
    if (isAframeLoaded && sceneRef.current) {
      // Create scene elements programmatically
      const scene = document.createElement("a-scene");
      scene.setAttribute("embedded", "");
      scene.setAttribute("loading-screen", "enabled: false");

      const sky = document.createElement("a-sky");
      sky.setAttribute("src", images[currentImageIndex]);
      sky.setAttribute("rotation", "0 -90 0");

      const camera = document.createElement("a-camera");
      camera.setAttribute("position", "0 1.6 0");
      camera.setAttribute("look-controls", "enabled: true");

      scene.appendChild(sky);
      scene.appendChild(camera);

      // Clear previous content and add new scene
      sceneRef.current.innerHTML = "";
      sceneRef.current.appendChild(scene);
    }
  }, [isAframeLoaded, images, currentImageIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[600px] rounded-lg overflow-hidden relative"
    >
      {!isAframeLoaded ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            Loading 360° viewer...
          </p>
        </div>
      ) : (
        <div ref={sceneRef} className="w-full h-full" />
      )}

      {/* Navigation thumbnails */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 p-2 rounded-lg z-10">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => {
              if (sceneRef.current) {
                const sky = sceneRef.current.querySelector("a-sky");
                if (sky) {
                  sky.setAttribute("src", images[index]);
                }
              }
            }}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 
              ${
                currentImageIndex === index
                  ? "border-primary-500"
                  : "border-transparent"
              }`}
          >
            <img
              src={img}
              alt={`View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default VirtualTourViewer;
