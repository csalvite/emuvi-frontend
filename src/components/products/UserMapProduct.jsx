import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import './UserMapProduct.css';
import 'leaflet/dist/leaflet.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { Marker as LeafletMarker, icon } from 'leaflet';
LeafletMarker.prototype.options.icon = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const UserMapProduct = ({ lat, lng, name }) => {

  let position = [lat, lng];

   return (
     <div className='map'>
       {lat && lng ? (
        <MapContainer center={position} zoom={12} style={{ height: '14rem', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
       ) : (
         <h2>El usuario no ha permitido saber su ubicacion exacta.</h2>
       )}
    </div>
  );
};
export default UserMapProduct;
