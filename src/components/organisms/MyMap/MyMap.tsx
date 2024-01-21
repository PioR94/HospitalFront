import React, { ReactNode } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FiVideo } from 'react-icons/fi';
import './MyMap.css';
import 'primeicons/primeicons.css';
import { DataDr } from '../ListDoctor/ListDoctor';
import { activeIcon, defIcon } from '../../../utils/icons-map';
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
  doctors: DataDr[];
  activeDoctorId: string | null;
  onMarkerEnter: (id: string) => void;
  onMarkerLeave: () => void;
  doctorRefs: React.MutableRefObject<(HTMLLIElement | null)[]>;
}

export const MyMap = ({ children, doctors, activeDoctorId, onMarkerEnter, onMarkerLeave, doctorRefs }: MyMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOLE_API_KEY,
  });

  return isLoaded ? (
    <div className="section-map">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={{ disableDefaultUI: true }}>
        {doctors.map((doctor) => (
          <Marker
            key={doctor.idDr}
            position={{ lat: doctor.latitude, lng: doctor.longitude }}
            onClick={() => onMarkerEnter(doctor.idDr)}
            icon={activeDoctorId === doctor.idDr ? activeIcon : defIcon}
            onMouseOver={() => {
              onMarkerEnter(doctor.idDr);
              const doctorIndex = doctors.findIndex((d) => d.idDr === doctor.idDr);
              const doctorRef = doctorRefs.current[doctorIndex];
              if (doctorRef) {
                doctorRef.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }
            }}
            onMouseOut={onMarkerLeave}
          />
        ))}
      </GoogleMap>
      {children}
    </div>
  ) : (
    <></>
  );
};
