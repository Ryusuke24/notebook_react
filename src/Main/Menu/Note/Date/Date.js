import React from "react";
import style from "./Date.module.css";

function Date({ date }) {
  return <span className={style.noteDate}>{date}</span>;
}

export default Date;
