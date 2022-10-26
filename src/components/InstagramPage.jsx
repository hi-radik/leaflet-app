import Input from "./Input";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import functions from "../functions.js";
import { CSSTransition } from "react-transition-group";

const InstagramPage = ({ inputValue }) => {
  const [spin, setSpin] = useState(true);
  const nicks = ['eagle12', 'rr', 'av19xx', 'ana_tol', '101st']
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 450);
  }, [spin]);

  return spin ? (
    <Center h="100vh" w="100vw">
      <Spinner size="xl" />
    </Center>
  ) : (
    <Center h="100vh" w="100vw" color="white">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input />
        <CSSTransition
          // in={inputValue.length > 2}
          in={nicks.includes(inputValue)}
          unmountOnExit
          mountOnEnter
          timeout={300}
          classNames="alert"
        >
          <div className="instagram-functions-block">
            <button className="instagram-button" onClick={functions.followings}>
              Список подписок
            </button>
            <button className="instagram-button" onClick={functions.info}>
              Подробная информация о цели
            </button>
            <button className="instagram-button" onClick={functions.emails}>
              Почты подписчиков
            </button>
            <button className="instagram-button" onClick={functions.tels}>
              Номера телефонов подписчиков
            </button>
            <button
              className="instagram-button"
              onClick={functions.downloadAllPhotos}
            >
              Фото цели
            </button>
            <button className="instagram-button" onClick={functions.followers}>
              Список подписчиков
            </button>
            <button className="instagram-button" onClick={functions.addrs}>
              Адреса подписчиков
            </button>
            <button className="instagram-button" onClick={functions.stories}>
              Истории цели
            </button>
            <button className="instagram-button" onClick={functions.tagged}>
              Список тех, кто отметил
            </button>
          </div>
        </CSSTransition>
      </div>
    </Center>
  );
};
export default InstagramPage;
