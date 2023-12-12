import React from "react";
import { nanoid } from "nanoid";
import Note from "./Note/Note";
import Menu from "./Menu/Menu";
import style from "./Main.module.css";

function id() {
  return nanoid();
}

let notes = [
  {
    id: id(),
    title: "Note 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
  },
  {
    id: id(),
    title: "Note 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
  },
];

function Main() {
  return (
    <main className={style.main}>
      <section className={style.menuSection}>
        <Menu notes={notes} />
      </section>
      <section className={style.noteSection}>
        <Note />
      </section>
    </main>
  );
}

export default Main;
