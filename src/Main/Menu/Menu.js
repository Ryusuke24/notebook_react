import React from "react";
import style from "./Menu.module.css";
import Note from "./Note/Note";
import { nanoid } from "nanoid";

function Menu({ notes, setActive }) {
  let res = notes.map(note => (
    <Note key={note.id} note={note} setActive={setActive}></Note>
  ));
  return <ul className={style.menuSection}>{res}</ul>;
}

export default Menu;
