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
const UserMapProduct = () => {
  const position = [43.537, -8.18];
  return (
    <MapContainer
      center={[43.537, -8.18077]}
      zoom={12}
      style={{ height: '300px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>un ciudadano narones</Popup>
      </Marker>
    </MapContainer>
  );
};
export default UserMapProduct;
