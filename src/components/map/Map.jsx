import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../../config/index'

const Map = ({data}) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter =  {
    lat: Number(data.lat),
    lng: Number(data.lng)
  }

  return (
    <LoadScript googleMapsApiKey={config.keyGoogleMap}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;