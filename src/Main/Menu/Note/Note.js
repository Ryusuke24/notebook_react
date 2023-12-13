import React from "react";
import Title from "./Title/Title";
import style from "./Note.module.css";
import Date from "./Date/Date";
import Description from "./Description/Description";

function Note({ note, setActive }) {
  return (
    <li
      className={note.isActive ? style.note__active : style.note}
      onClick={() => setActive(note.id)}
    >
      <Title title={note.title} />
      <Date date={note.date} />
      {note.isActive ? <Description text={note.text} /> : <></>}
    </li>
  );
}

export default Note;
