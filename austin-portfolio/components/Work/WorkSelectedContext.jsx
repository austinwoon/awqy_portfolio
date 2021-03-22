import React from "react";
import {works} from "../../constants/work";

export const WorkSelectedContext = React.createContext({
  workSelected: works[0],
  setWork: () => {}
})