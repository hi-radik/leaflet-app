import { observer } from "mobx-react-lite";
import input from "../store/input";
const Input = () => {
  return (
    <div className="instagram-input-block">
      <input
        type="text"
        name="twitter-input"
        id="twitter-input"
        className="instagram-input"
        placeholder="Введите название аккаунта..."
        value={input.value}
        onChange={value => input.setInput(value.target.value)}
        autoComplete='off'
      />
    </div>
  );
};
export default observer(Input);
