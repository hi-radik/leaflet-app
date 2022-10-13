import "./App.css";
import Map from "./components/Map";
import { ChakraProvider } from "@chakra-ui/react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import Menu from "./components/Menu";
import { iconPerson } from "./components/icon.js";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import twitButton from "./store/twitButton";
import instButton from "./store/instButton";

function App() {
  return (
    <ChakraProvider>
      <div className="screen">
        {twitButton.value === false && instButton.value === false && (
          <div className="start">#OsintHero</div>
        )}
        {twitButton.value === true && instButton.value === false && <Map />}
        {instButton.value === true && twitButton.value === false && (
          <div style={{ width: "100%" }}>Инстаграм</div>
        )}

        <Menu />
      </div>
    </ChakraProvider>
  );
}

export default observer(App);
