import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import './Home.css';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import ChangeMapView from './ChangeMapView';
import axios from 'axios';

function Map(props: any) {
  const getAddress = props.getAddress;

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0, 0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0, 0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    if (initialPosition[0] !== 0 && initialPosition[1] !== 0) {
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      (async function () {
        console.log(initialPosition);

        const response = await axios.get(
          `https://api.tomtom.com/search/2/reverseGeocode/${initialPosition[0]},${initialPosition[1]}.json?key=GtADLOdE9xgB2hQpoFTxRlpliH7CAvAo`,
          {
            cancelToken: source.token,
          }
        );

        console.log(response);
        console.log(response.data.addresses[0].address.freeformAddress);

        getAddress(response.data.addresses[0].address.freeformAddress);
      })();

      return () => {
        source.cancel('axios request cancelled');
      };
    }
  }, [getAddress, initialPosition]);

  useEffect(() => {
    if (selectedPosition[0] !== 0 && selectedPosition[1] !== 0) {
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      (async function () {
        console.log(selectedPosition);

        const response = await axios.get(
          `https://api.tomtom.com/search/2/reverseGeocode/${selectedPosition[0]},${selectedPosition[1]}.json?key=GtADLOdE9xgB2hQpoFTxRlpliH7CAvAo`,
          {
            cancelToken: source.token,
          }
        );

        console.log(response);
        console.log(response.data.addresses[0].address.freeformAddress);

        getAddress(response.data.addresses[0].address.freeformAddress);
      })();

      return () => {
        source.cancel('axios request cancelled');
      };
    }
  }, [getAddress, selectedPosition]);

  const Markers = () => {
    useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return selectedPosition ? (
      <Marker
        key={selectedPosition[0]}
        draggable={true}
        icon={
          new Icon({
            iconUrl: markerIcon,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
        position={selectedPosition}
        interactive={false}
      />
    ) : null;
  };

  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      scrollWheelZoom={true}
      id='map'
    >
      <ChangeMapView
        center={
          selectedPosition[0] === 0 && selectedPosition[1] === 0
            ? initialPosition
            : selectedPosition
        }
      />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Markers />
    </MapContainer>
  );
}

export default Map;
