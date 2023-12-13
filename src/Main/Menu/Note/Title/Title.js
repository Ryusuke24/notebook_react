import React from "react";
import style from "./Title.module.css";

function Title({ title }) {
  return <span className={style.noteTitle}>{title} </span>;
}

export default Title;
