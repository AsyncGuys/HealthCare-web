import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import hospitalsData from '../components/Main/hospitalsData'; // Assuming you have the hospital data in a separate file

const Map = () => {
  const mapContainerRef = useRef(null);
  const latitude = 51.5074; // Latitude of the center point
  const longitude = -0.1278; // Longitude of the center point
  const zoomLevel = 10; // Zoom level for the map

  useEffect(() => {
    // Initialize Leaflet map
    const map = L.map(mapContainerRef.current).setView([latitude, longitude], zoomLevel);

    // Add the tile layer for the map (you can change the tile URL to your preference)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);

    // Loop through the hospitals data and add markers to the map
    hospitalsData.forEach((hospital) => {
      L.marker([hospital.latitude, hospital.longitude])
        .addTo(map)
        .bindPopup(hospital.name);
    });

    // Clean up when component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};

export default Map;
