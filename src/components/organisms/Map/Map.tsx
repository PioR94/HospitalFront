import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FiVideo } from 'react-icons/fi';
import './Map.css';

const GOOLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 51.1589355,
  lng: 21.2338581,
};

const libraries = ['places'];

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOLE_API_KEY,
  });

  return isLoaded ? (
    <div className="section-map" style={{ width: '1000px', height: '500px' }}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={{ lat: center.lat, lng: center.lng }} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
