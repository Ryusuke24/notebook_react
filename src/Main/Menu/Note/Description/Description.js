import React from "react";
import style from "./Description.module.css";
import ButtonDelete from "./ButtonDelete/ButtonDelete";
import NoteText from "./NoteText/NoteText";

function Description({ text, index, deleteNote, isActive }) {
  return (
    <div className={style.description}>
      <NoteText text={text} />
      {isActive ? (
        <ButtonDelete index={index} deleteNote={deleteNote} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Description;
