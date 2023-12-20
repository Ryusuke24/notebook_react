import React, { useState } from "react";
import { nanoid } from "nanoid";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import style from "./Main.module.css";

function id() {
  return nanoid();
}

function Main({ res, notes, setNotes, setRes, search, setSearch }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isActiveId, setActiveId] = useState("");

  function setActive(id) {
    helpFunc(setNotes, notes);
    setRes([...notes]);
    setSearch(false);

    function helpFunc(func, state) {
      func(
        state.map(note => {
          note.isActive = false;
          if (note.id === id) {
            note.isActive = true;
            setTitle(note.title);
            setText(note.text);
            setActiveId(note.id);
            return note;
          }
          return note;
        })
      );
    }
  }

  function saveEdit(id, title, text) {
    helpFunc(setNotes, notes);

    function helpFunc(func, state) {
      func(
        state.map(note => {
          if (note.id === id) {
            let now = new Date();
            let day = now.getDate();
            let month = now.getMonth();
            let year = now.getFullYear().toString().slice(2);
            note.title = title;
            note.text = text;
            note.date = `${day}/${month + 1}/${year}`;
            return note;
          }
          return note;
        })
      );
    }

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function createNewNote(title, text) {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear().toString().slice(2);
    let copy = [...notes];
    let newNote = {};
    newNote["id"] = id();
    newNote["title"] = title;
    newNote["text"] = text;
    newNote["date"] = `${day}/${month + 1}/${year}`;
    newNote["isActive"] = false;
    copy.push(newNote);
    setNotes([...copy]);

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function deleteNote(event, index) {
    if (notes.length > 1) {
      setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
      localStorage.setItem("notes", JSON.stringify(notes));
      event.stopPropagation();
    } else {
      setNotes([]);
      localStorage.clear();

      event.stopPropagation();
    }
  }

  function CancelEdit() {
    helpFunc(setNotes, notes);

    setTitle("");
    setText("");
    setActiveId("");

    function helpFunc(func, state) {
      func(
        state.map(note => {
          note.isActive = false;
          return note;
        })
      );
    }
  }

  return (
    <main className={style.main}>
      <section className={style.menuSection}>
        <Menu
          search={search}
          notes={notes}
          res={res}
          setActive={setActive}
          deleteNote={deleteNote}
        />
      </section>
      <section className={style.noteSection}>
        <Content
          title={title}
          text={text}
          isActiveId={isActiveId}
          setText={setText}
          setTitle={setTitle}
          createNewNote={createNewNote}
          saveEdit={saveEdit}
          CancelEdit={CancelEdit}
        />
      </section>
    </main>
  );
}

export default Main;
