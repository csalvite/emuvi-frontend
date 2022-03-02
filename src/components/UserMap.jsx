import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet';

export const UserMap = () => {
  const position = [51.505, -0.09];

  return (
    <MapContainer center={[52.6376, -1.1351]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
