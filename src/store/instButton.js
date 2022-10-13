import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const isInst = observable({
  value: false,
  setInst(value) {
    this.value = value;
  },
});

export default isInst;
