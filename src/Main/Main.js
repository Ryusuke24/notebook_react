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
    text: "qwe",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 2",
    text: "zxc",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 3",
    text: "asd",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 7",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 9",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 7",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 9",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 7",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
  {
    id: id(),
    title: "Note 9",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod ligula nec nulla faucibus faucibus. Integer quam magna, volutpat vitae sem et, luctus hendrerit erat. Aenean quis nisi bibendum, scelerisque metus sed, laoreet massa. Nam ipsum mi, condimentum a congue sed, condimentum vel lacus. Mauris ultricies laoreet turpis, ut euismod urna faucibus vitae. Donec eu dolor at nulla efficitur sodales eu a nunc. Suspendisse sit amet urna malesuada orci aliquet pellentesque non at dui. Curabitur condimentum dapibus purus a ullamcorper. Etiam molestie diam tincidunt mauris tristique tristique. Donec scelerisque malesuada arcu, non pharetra elit volutpat non. Cras luctus vitae ante ac dapibus. Mauris sodales in ligula a scelerisque. Proin bibendum consequat odio, ullamcorper tincidunt ligula accumsan eget. Vestibulum molestie tincidunt sagittis. Sed a efficitur ante. Donec aliquet tempor purus, in tincidunt justo scelerisque vitae. ",
    date: "12/12/23",
    isActive: false,
  },
];

function Main() {
  const [notes, setNotes] = useState(obj);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function setActive(id) {
    setNotes(
      notes.map(note => {
        note.isActive = false;
        if (note.id === id) {
          note.isActive = true;
          setTitle(note.title);
          setText(note.text);
          return note;
        }
        return note;
      })
    );
  }

  return (
    <main className={style.main}>
      <section className={style.menuSection}>
        <Menu notes={notes} setActive={setActive} />
      </section>
      <section className={style.noteSection}>
        <Content
          title={title}
          text={text}
          setText={setText}
          setTitle={setTitle}
        />
      </section>
    </main>
  );
}

export default Main;
