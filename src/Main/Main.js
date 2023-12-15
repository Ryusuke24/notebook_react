import React, { useState } from "react";
import { nanoid } from "nanoid";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import style from "./Main.module.css";

function id() {
  return nanoid();
}

let obj = [
  {
    id: id(),
    title: "Note 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
];

function Main() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || obj
  );

  if (localStorage.getItem("notes") !== notes && notes.length !== 0) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isActiveId, setActiveId] = useState("");

  function setActive(id) {
    setNotes(
      notes.map(note => {
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

  function saveEdit(id, title, text) {
    setNotes(
      notes.map(note => {
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
    setNotes(
      notes.map(note => {
        note.isActive = false;
        return note;
      })
    );

    setTitle("");
    setText("");
    setActiveId("");
  }

  return (
    <main className={style.main}>
      <section className={style.menuSection}>
        <Menu notes={notes} setActive={setActive} deleteNote={deleteNote} />
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
