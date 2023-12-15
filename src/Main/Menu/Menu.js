import React from "react";
import style from "./Menu.module.css";
import Note from "./Note/Note";
import { nanoid } from "nanoid";

function Menu({ notes, setActive, deleteNote }) {
  let res = notes.map((note, index) => (
    <Note
      key={note.id}
      index={index}
      deleteNote={deleteNote}
      note={note}
      setActive={setActive}
    />
  ));
  return <ul className={style.menuSection}>{res}</ul>;
}

export default Menu;
