import React, { useState, useEffect } from "react";
import style from "./Content.module.css";

function Content({ title, text, setText, setTitle }) {
  return (
    <section className={style.content}>
      <input
        className={style.input}
        placeholder="enter title note..."
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <textarea
        className={style.textarea}
        placeholder="enter note text..."
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <div className={style.saveButtons}>
        {" "}
        <button className={style.clearButton}>Clear note text</button>
        <button className={style.createButton}>Create new note</button>
        <button
          className={style.okButton}
          onClick={() => console.log(text, title)}
        >
          save edit
        </button>
        <button className={style.cancelButton}>cancel</button>
      </div>
    </section>
  );
}

export default Content;
