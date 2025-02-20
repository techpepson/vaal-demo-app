import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '@googlemaps/js-api-loader';

const PropertyMap = ({ properties }) => {
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const markersRef = useRef([]);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 5.6037, lng: -0.1870 }, // Accra coordinates
        zoom: 12,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#000000" }],
          },
          // Add more custom styles as needed
        ],
      });

      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add markers for each property
      properties.forEach(property => {
        const marker = new google.maps.Marker({
          position: property.coordinates || { lat: 5.6037, lng: -0.1870 }, // Use property coordinates or default
          map,
          title: property.title,
          animation: google.maps.Animation.DROP,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-semibold">${property.title}</h3>
              <p class="text-gray-600">${property.location}</p>
              <p class="text-primary-600 font-bold">$${property.price.toLocaleString()}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          navigate(`/property-detail/${property.id}`, { state: { property } });
        });

        marker.addListener('mouseover', () => {
          infoWindow.open(map, marker);
        });

        marker.addListener('mouseout', () => {
          infoWindow.close();
        });

        markersRef.current.push(marker);
      });
    });
  }, [properties, navigate]);

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg">
      <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400">Loading map...</p>
      </div>
    </div>
  );
};

export default PropertyMap; 