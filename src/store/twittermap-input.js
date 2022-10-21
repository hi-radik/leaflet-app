import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const twitterInput = observable({
  value: '',
  setTwitterInput(value) {
    this.value = value;
  },
});

export default twitterInput;
