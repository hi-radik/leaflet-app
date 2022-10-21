import {
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { observer } from "mobx-react-lite";
import twitterInput from "../store/twittermap-input";
import { useRef } from "react";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const MapInput = () => {
  const nicknames = ["charlie12", "rr", "nestle101"];
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  });
  return (
    <>
      <InputGroup
        width={"20%"}
        backgroundColor="#edede9"
        borderRadius="10px"
      >
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="@"
          borderRadius="10px"
        />
        <Input
          placeholder="Введите имя аккаунта..."
          fontFamily={"Montserrat"}
          onChange={(value) => {
            twitterInput.setTwitterInput(value.target.value);
            console.log(twitterInput.value);
          }}
          ref={ref}
          focusBorderColor={'gray.400'}
        />

        <CSSTransition
          in={nicknames.includes(twitterInput.value)}
          unmountOnExit
          mountOnEnter
          timeout={100000}
          classNames="alert"
        >
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </CSSTransition>
      </InputGroup>
    </>
  );
};
export default observer(MapInput);
