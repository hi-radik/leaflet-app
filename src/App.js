import "./App.css";
import Map from "./components/Map";
import { ChakraProvider } from "@chakra-ui/react";
import Menu from "./components/Menu";
import { observer } from "mobx-react-lite";
import twitButton from "./store/twitButton";
import instButton from "./store/instButton";
import InstagramPage from "./components/InstagramPage";

function App() {
  return (
    <ChakraProvider>
      <div className="screen">
        <Menu />
        {twitButton.value === false && instButton.value === false && (
          <div className="start">#OsintHero</div>
        )}
        {twitButton.value === true && instButton.value === false && <Map />}
        {instButton.value === true && twitButton.value === false && (
          <InstagramPage />
        )}
      </div>
    </ChakraProvider>
  );
}

export default observer(App);
