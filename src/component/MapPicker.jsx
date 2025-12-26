import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function LocationMarker({ onSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      // Reverse Geocoding (FREE)
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();

      onSelect({
        lat,
        lng,
        address: data.display_name,
      });
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function MapPicker({ onLocationSelect }) {
  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={6}
      className="h-80 w-full rounded-2xl"
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onSelect={onLocationSelect} />
    </MapContainer>
  );
}
