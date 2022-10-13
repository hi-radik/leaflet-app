import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const isTwit = observable({
  value: false,
  setTwit(value) {
    this.value = value;
  },
});

export default isTwit;
