import React from "react";
import style from "./Menu.module.css";
import Note from "./Note/Note";
import { nanoid } from "nanoid";

function Menu({ search, res, notes, setActive, deleteNote }) {
  return (
    <ul className={style.menuSection}>
      {search
        ? res.map((note, index) => (
            <Note
              key={note.id}
              index={index}
              deleteNote={deleteNote}
              note={note}
              setActive={setActive}
            />
          ))
        : notes.map((note, index) => (
            <Note
              key={note.id}
              index={index}
              deleteNote={deleteNote}
              note={note}
              setActive={setActive}
            />
          ))}
    </ul>
  );
}

export default Menu;
