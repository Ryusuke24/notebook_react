import React from "react";
import style from "./NoteText.module.css";

function NoteText({ text }) {
  return (
    <span className={style.noteText}>
      {text.length > 15 ? text.slice(0, 30) + "....." : text}
    </span>
  );
}

export default NoteText;
