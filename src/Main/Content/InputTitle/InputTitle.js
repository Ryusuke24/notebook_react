import React from "react";
import style from "./InputTitle.module.css";

function InputTitle({ title, setTitle }) {
  return (
    <input
      maxLength="15"
      className={style.input}
      placeholder="enter title note..."
      value={title}
      onChange={event => setTitle(event.target.value)}
    />
  );
}

export default InputTitle;
