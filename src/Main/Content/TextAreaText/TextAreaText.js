import React from "react";
import style from "./TextAreaText.module.css";

function TextAreaText({ text, setText }) {
  return (
    <textarea
      className={style.textarea}
      placeholder="enter note text..."
      value={text}
      onChange={event => setText(event.target.value)}
    />
  );
}

export default TextAreaText;
