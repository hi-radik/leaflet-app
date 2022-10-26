import { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Pane } from "react-leaflet";
import PopupForMarker from "./Popup";
import { Spinner } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Input from "./Input";
import MapInput from "./MapInput";
import { CSSTransition } from "react-transition-group";
import { IconButton } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon, ViewIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import twitterInput from "../store/twittermap-input";
import { observer } from "mobx-react-lite";


//Имитация постов твиттер
var tweet = {
  nickname: 'rr',
  src: 'https://media.defense.gov/2014/Sep/16/2000941152/2000/2000/0/140916-F-ZZ999-001.JPG',
  tag: '#London',

  date: '22.20.2022',
  tweetRef: 'www.twitter/@rr/12'
}




function getIcon(_iconSize) {
  return L.icon({
    iconUrl: require("../static/marker.png"),
    iconSize: [_iconSize],
  });
}

const Map = () => {
  //Состояние для кнопки "Анализ"
  const [isAnalysisPressed, setAnalysisPressed] = useState(false);

  const [menuActive, setMenuActive] = useState(true);
  const nicknames = ["charlie12", "rr", "nestle101", "101st"];
  const markers = {rr:{'sda':'asd'}}

  //Функция нанесени маркеров на карту
function addMarkers() {
  //Берем данные из tweet
  //Наносим их на карту. Как?
  setAnalysisPressed(true)
}


  function showHide() {
    let twitterMenu = document.querySelector(".top-twitter-menu");
    if (menuActive) {
      twitterMenu.style = "height:0";
      setMenuActive(!menuActive);
    }
    if (menuActive === false) {
      twitterMenu.style = "height:59px";
      setMenuActive(!menuActive);
    }
  }
  const [spin, setSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 450);
    if (spin === false) {
      let plmin = document.querySelector(".leaflet-top.leaflet-left");
      plmin.remove();
      // plmin.classList.add("leaflet-right");

      let ukr = document.querySelector(".leaflet-bottom.leaflet-right");
      ukr.classList.add("display-none");
    }
  }, [spin]);

  return spin ? (
    <Center h="100vh" w="100vw">
      <Spinner size="xl" />
    </Center>
  ) : (
    <div>
      <div className="top-twitter-menu">
        <MapInput />
        {nicknames.includes(twitterInput.value) ? (
          <Button
            onClick={addMarkers}
            background="#edede9"
            size="md"
            fontFamily={"Montserrat"}
            fontWeight={400}
            marginLeft={"10px"}
            _hover={{
              bg: "rgba(188, 184, 177, .64);",
            }}
            _active={{
              bg: "rgba(188, 184, 177, 1);",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            Анализ
          </Button>
        ) : (
          <Button
            background="#edede9"
            size="md"
            fontFamily={"Montserrat"}
            fontWeight={400}
            marginLeft={"10px"}
            isDisabled
          >
            Анализ
          </Button>
        )}
      </div>

      <MapContainer
        center={[51.505, -0.09]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ position: "relative" }}
      >
        {menuActive ? (
          <IconButton
            background="#edede9"
            aria-label="Menu"
            size="md"
            icon={<ChevronUpIcon />}
            marginRight="20px"
            marginTop="20px"
            style={{ zIndex: 1001, position: "absolute", top: 0, right: 0 }}
            onClick={showHide}
            _hover={{
              bg: "rgba(188, 184, 177, .64);",
            }}
            _active={{
              bg: "rgba(188, 184, 177, 1);",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            boxShadow="base"
          />
        ) : (
          <IconButton
            background="#edede9"
            aria-label="Menu"
            size="md"
            icon={<ChevronDownIcon />}
            marginRight="20px"
            marginTop="20px"
            style={{ zIndex: 1001, position: "absolute", top: 0, right: 0 }}
            onClick={showHide}
            _hover={{
              bg: "rgba(188, 184, 177, .64);",
            }}
            _active={{
              bg: "rgba(188, 184, 177, 1);",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            boxShadow="base"
          />
        )}

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {isAnalysisPressed && ( <Marker
          className="marker"
          position={[46.5, 24]}
          icon={getIcon(24)}
        >
         
            <PopupForMarker
              nickname="@101stAASLTDIV"
              src="https://live.staticflickr.com/65535/51951758983_9735458157_b.jpg"
              tag="#Romania"
              date = "21.10.2022"
              tweetRef = "https://twitter.com/101staasltdiv"
              
              
          />
    
          
        </Marker>)}
        {/* <Marker position={[55.505, 10]} className="marker" icon={getIcon(24)}>
          <PopupForMarker
            nickname="@nestle101"
            src="https://pbs.twimg.com/media/EFSQBDUUYAANLXe.jpg"
            text="#Broskov"
          />
        </Marker>  */}

        {/* <div className={"leaflet-top leaflet-right"}>
          <div className="leaflet-control">
            <Input />
          </div>
        </div> */}
      </MapContainer>
    </div>
  );
};
export default observer(Map);
