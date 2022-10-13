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

function App() {
  return (
    <ChakraProvider>
      <div className="screen">
        {1 ? <div className="start">#OsintHero</div> : <Map />}

        <Menu />
      </div>
    </ChakraProvider>
  );
}

export default App;
