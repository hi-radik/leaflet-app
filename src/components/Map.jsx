import { useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  LayerGroup,
} from "react-leaflet";
import PopupForMarker from "./Popup";
import TwitterInput from "./Input";


function getIcon(_iconSize) {
  return L.icon({
    iconUrl: require('../static/marker.png'),
    iconSize: [_iconSize],
  });
}

const Map = () => {
  useEffect(() => {
    let plmin = document.querySelector(".leaflet-top.leaflet-left");
    plmin.classList.remove("leaflet-left");
    plmin.classList.add("leaflet-right");

    let ukr = document.querySelector(".leaflet-bottom.leaflet-right");
    ukr.classList.add("display-none");
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true}>
      {/* <TwitterInput /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* <TwitterInput/> */}

      <Marker className="marker" position={[51.505, -0.09]} icon={getIcon(24)}>
        <PopupForMarker
          nickname="@nestle101"
          src="https://thesaurus.plus/img/synonyms/157/portray.png"
          text="Lorem
  "
        />
      </Marker>
      <Marker position={[59.505, -0.4]} className="marker" icon={getIcon(24)}>
        <PopupForMarker />
      </Marker>
    </MapContainer>
  );
};
export default Map;
