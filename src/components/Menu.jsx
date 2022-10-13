import { Tooltip } from "@chakra-ui/react";
import {observer} from 'mobx-react-lite';
import twitButton from '../store/twitButton';
import instButton from '../store/instButton';


const Menu = () => {

  function twitterClick() {
    try {
      let instElement = document.querySelector(".inst-block");
      instElement.classList.remove("twit-block-active");
      instButton.setInst(false)
    } catch (e) {
      console.log(`Error: ${e}`);
    }
    let twitterElement = document.querySelector(".twit-block");
    twitterElement.classList.add("twit-block-active");

    twitButton.setTwit(true)
    console.log(twitButton.value)
    

  }

  function instClick() {
    let instElement = document.querySelector(".inst-block");
    try {
      let twitterElement = document.querySelector(".twit-block");
      
      twitterElement.classList.remove("twit-block-active");
      twitButton.setTwit(false)

    } catch (e) {
      console.log(`Error: ${e}`);
    }
    instElement.classList.add("twit-block-active");
    instButton.setInst(true)
    console.log(instButton.value)
  }

  function blockClick() {
    try {
      let twitterElement = document.querySelector(".twit-block");
      let instElement = document.querySelector(".inst-block");
      twitterElement.classList.remove("twit-block-active");
      instElement.classList.remove("twit-block-active");
      twitButton.setTwit(false)
      instButton.setInst(false)
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
        label="Анализ instagram"
        hasArrow
        arrowSize={8}
        placement="left"
        bg="#2C2C2B"
      >
        <div className="inst-block menu-block" onClick={instClick}>
          <img className="inst-pic" src="inst.svg" alt="inst" />
        </div>
      </Tooltip>

      <Tooltip label="Анализ twitter"
        hasArrow
        arrowSize={8}
        placement="left"
        bg="#2C2C2B">
        <div className="twit-block menu-block" onClick={twitterClick}>
          <img className="twit-pic" src="twit.svg" alt="inst" />
        </div>
      </Tooltip>

      {/* <div className="pref-block">
        <img className="pref-pic" src="pref.svg" alt="inst" />
      </div> */}
    </div>
  );
};
export default observer(Menu);
