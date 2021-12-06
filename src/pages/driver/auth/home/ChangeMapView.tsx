import { useMap } from 'react-leaflet';

function ChangeMapView(props: { center: any }) {
  const map = useMap();
  map.setView(props.center);
  return null;
}

export default ChangeMapView;
