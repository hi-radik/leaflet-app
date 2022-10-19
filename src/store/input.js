import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const input = observable({
  value: '',
  setInput(value) {
    this.value = value;
  },
});

export default input;
