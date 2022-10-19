import Input from "./Input";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const InstagramPage = () => {
  const [spin, setSpin] = useState(true);

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
        <div className="instagram-functions-block">
          <button className="instagram-button">Подписки</button>
          <button className="instagram-button">
            Подробная информация о цели
          </button>
          <button className="instagram-button">Почты подписчиков</button>
          <button className="instagram-button">
            Номера телефонов подписчиков
          </button>
          <button className="instagram-button">Скачать все фото цели</button>
          <button className="instagram-button">Подписчики</button>
          <button className="instagram-button">Адреса подписчиков</button>
          <button className="instagram-button">Упоминания</button>
          <button className="instagram-button">Комментарии</button>
        </div>
      </div>
    </Center>
  );
};
export default InstagramPage;
