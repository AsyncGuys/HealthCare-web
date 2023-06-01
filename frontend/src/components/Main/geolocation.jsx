import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_endpoint = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "2ac877763578b464144d68af13528b19";

const Map = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`;

    axios.get(finalAPIEndPoint)
      .then((response) => {
        setResponseData(response.data);
      });
  }, [latitude, longitude]);

  return (
    <div className='text-4xl font-bold text-center'>
      <h1>{responseData.name}</h1>
    </div>
  );
}

export default Map;
