import React from "react";
import Title from "./Title/Title";
import style from "./Note.module.css";
import Date from "./Date/Date";
import Description from "./Description/Description";

function Note({ note, setActive, index, deleteNote }) {
  return (
    <li
      className={note.isActive ? style.note__active : style.note}
      onClick={() => setActive(note.id)}
    >
      <Title title={note.title} />
      <Date date={note.date} />
      <Description
        isActive={note.isActive}
        index={index}
        deleteNote={deleteNote}
        text={note.text}
      />
    </li>
  );
}

export default Note;
