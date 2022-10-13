import L from 'leaflet';
import marker from '../../src/marker.svg';
const iconPerson = new L.Icon({
    iconUrl: marker,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 35),
    className: 'leaflet-div-icon',
});

export { iconPerson };