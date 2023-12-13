import React from "react";
import style from "./Description.module.css";
import ButtonDelete from "./ButtonDelete/ButtonDelete";
import NoteText from "./NoteText/NoteText";

function Description({ text }) {
  return (
    <div className={style.description}>
      <NoteText text={text} />
      <ButtonDelete />
    </div>
  );
}

export default Description;
