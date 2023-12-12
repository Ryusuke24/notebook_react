import React from "react";
import style from "./Menu.module.css";

function Menu({ notes }) {
  let res = notes.map(note => (
    <li key={note.id} className={style.note}>
      <span className={style.noteTitle}>{note.title}</span>
      <span className={style.noteDate}>{note.date}</span>
    </li>
  ));
  return <ul className={style.menuSection}>{res}</ul>;
}

export default Menu;
