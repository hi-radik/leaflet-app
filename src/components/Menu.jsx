import { Tooltip } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import twitButton from "../store/twitButton";
import instButton from "../store/instButton";
import Input from "./Input";
import input from "../store/input";
import twitterInput from "../store/twittermap-input";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function twitterClick() {
    try {
      let instElement = document.querySelector(".inst-block");
      instElement.classList.remove("twit-block-active");
      instButton.setInst(false);
      input.setInput("");
      twitterInput.setTwitterInput("");
    } catch (e) {
      console.log(`Error: ${e}`);
    }
    let twitterElement = document.querySelector(".twit-block");
    twitterElement.classList.add("twit-block-active");

    twitButton.setTwit(true);
    console.log(twitButton.value);
  }

  function instClick() {
    let instElement = document.querySelector(".inst-block");
    try {
      let twitterElement = document.querySelector(".twit-block");
      input.setInput("");
      twitterElement.classList.remove("twit-block-active");
      twitButton.setTwit(false);
      twitterInput.setTwitterInput("");
    } catch (e) {
      console.log(`Error: ${e}`);
    }

    instElement.classList.add("twit-block-active");
    instButton.setInst(true);
    console.log(instButton.value);
  }

  function blockClick() {
    try {
      let twitterElement = document.querySelector(".twit-block");
      let instElement = document.querySelector(".inst-block");
      twitterElement.classList.remove("twit-block-active");
      instElement.classList.remove("twit-block-active");
      twitButton.setTwit(false);
      instButton.setInst(false);
      input.setInput("");
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  return (
    <div className="menu">
      <div className="logo-block" onClick={blockClick}>
        <img className="logo-pic" src="bat.svg" alt="logo" />
      </div>

      <Tooltip
        label="???????????? Instagram"
        hasArrow
        arrowSize={8}
        placement="left"
        bg="#2C2C2B"
      >
        <div className="inst-block menu-block" onClick={instClick}>
          <img className="inst-pic" src="inst.svg" alt="inst" />
        </div>
      </Tooltip>

      <Tooltip
        label="???????????? Twitter"
        hasArrow
        arrowSize={8}
        placement="left"
        bg="#2C2C2B"
      >
        <div className="twit-block menu-block" onClick={twitterClick}>
          <img className="twit-pic" src="twit.svg" alt="inst" />
        </div>
      </Tooltip>

      <Tooltip
        label="???????????? Facebook"
        hasArrow
        arrowSize={8}
        placement="left"
        bg="#2C2C2B"
      >
        <div className="twit-block menu-block" onClick={onOpen}>
          <img className="twit-pic" src="facebook.png" alt="facebook" />
        </div>
      </Tooltip>
      <Tooltip
        label="???????????? Telegram"
        hasArrow
        arrowSize={8}
        placement="left"
        bg="#2C2C2B"
      >
        <div className="twit-block menu-block" onClick={onOpen}>
          <img className="twit-pic" src="telegram.png" alt="telegram" />
        </div>
      </Tooltip>

      {/* <div className="pref-block">
        <img className="pref-pic" src="pref.svg" alt="inst" />
      </div> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>??????????????????????</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>???????????? ?????????????????? ?? ????????????????????.</h1>
          </ModalBody>

          <ModalFooter>
            <Button bg="black" color="white" mr={3} onClick={onClose} _hover={{
              bg: "grey",
            }}>
              ??????????????
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default observer(Menu);
