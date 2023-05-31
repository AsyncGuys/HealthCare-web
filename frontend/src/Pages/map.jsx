import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import hospitalsData from '../components/Main/hospitalsData'; 

const Map = () => {
  const mapContainerRef = useRef(null);
  const latitude = 28.6741; 
  const longitude =   77.1339;  
  const zoomLevel = 10; // Zoom level for the map

  useEffect(() => {

    const map = L.map(mapContainerRef.current).setView([latitude, longitude], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);


    hospitalsData.forEach((hospital) => {
      L.marker([hospital.latitude, hospital.longitude])
        .addTo(map)
        .bindPopup(hospital.name);
    });

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
