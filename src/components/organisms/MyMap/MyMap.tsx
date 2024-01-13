import React, { ReactNode } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FiVideo } from 'react-icons/fi';
import './MyMap.css';
import 'primeicons/primeicons.css';
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

interface MyMapProps {
  children?: ReactNode;
}

export const MyMap = ({ children }: MyMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOLE_API_KEY,
  });

  return isLoaded ? (
    <div className="section-map" style={{ borderRadius: '20%' }}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={{ disableDefaultUI: true }}></GoogleMap>
      <div className="overlay">
        <i className="pi pi-arrows-alt arrow-alt"></i>
      </div>
    </div>
  ) : (
    <></>
  );
};
