import React, { useState } from "react";
import { nanoid } from "nanoid";
import style from "./App.module.css";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Search from "./Search/Search";

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

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || obj
  );

  const [res, setRes] = useState(
    JSON.parse(localStorage.getItem("notes")) || obj
  );

  if (localStorage.getItem("notes") !== notes && notes.length !== 0) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function searchNote(value) {
    let copy = [...notes];
    setRes(
      copy.filter(elem =>
        elem.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  return (
    <div className={style.body}>
      <Header />
      <Search searchNote={searchNote} />
      <Main res={res} setNotes={setNotes} notes={notes} setRes={setRes} />
      <Footer />
    </div>
  );
}

export default App;
