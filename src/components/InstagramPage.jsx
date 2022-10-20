import Input from "./Input";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import input from "../store/input";
//Функция скачивания
function download() {
  let text = JSON.stringify({ hello: "example" });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "example.txt";
    a.click();
  }
}

function animate(){
  if (input.value.length > 2) {let a = document.querySelector('.instagram-functions-block')
  a.style.opacity = '1'}
  
}
const InstagramPage = ({ inputValue }) => {
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

        {inputValue.length > 2 && (
          <div className="instagram-functions-block">
            <button className="instagram-button" onClick={download}>Подписки</button>
            <button className="instagram-button" onClick={download}>
              Подробная информация о цели
            </button>
            <button className="instagram-button" onClick={download}>Почты подписчиков</button>
            <button className="instagram-button" onClick={download}>
              Номера телефонов подписчиков
            </button>
            <button className="instagram-button" onClick={download}>Скачать все фото цели</button>
            <button className="instagram-button" onClick={download}>Подписчики</button>
            <button className="instagram-button" onClick={download}>Адреса подписчиков</button>
            <button className="instagram-button" onClick={download}>Упоминания</button>
            <button className="instagram-button" onClick={download}>Комментарии</button>
          </div>
        )}
      </div>
    </Center>
  );
};
export default InstagramPage;
