import { observer } from "mobx-react-lite";
import input from "../store/input";
import { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);
  useEffect(()=> {
    inputRef.current.focus()
  })
  function focus() {
    var inputgr = document.querySelector('.instagram-input')
    inputgr.focus()
  }
  return (
    <div className="instagram-input-block" onClick={focus}>
      <input
        type="text"
        name="twitter-input"
        id="twitter-input"
        className="instagram-input"
        placeholder="Введите имя аккаунта..."
        value={input.value}
        onChange={value => input.setInput(value.target.value)}
        autoComplete='off'
        ref={inputRef}
      />
    </div>
  );
};
export default observer(Input);
