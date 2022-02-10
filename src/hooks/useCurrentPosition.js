import { useState } from 'react';

export const useCurrentPosition = () => {
  const [position, setPosition] = useState();

  // Preguntamos si nos permite acceder a su posición
  navigator.geolocation.getCurrentPosition(function (position) {
    setPosition({ lat: position.coords.latitude });
    console.log('Latitude is :', position.lat);
    setPosition({ lon: position.coords.longitude });
    console.log('Longitude is :', position.lon);
  });

  return position;
};
