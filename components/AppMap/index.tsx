import React, { useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from 'react-leaflet';

function MyComponent() {
  const map = useMapEvent('click', () => {
    map.setCenter([10.0, 5.0]);
  });
  return null;
}

const AppMap = () => {
  return (
    <MapContainer
      center={[10.0, 5.0]}
      zoom={2}
      style={{ width: 300, height: 300 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MyComponent />
    </MapContainer>
  );
};

export default AppMap;
