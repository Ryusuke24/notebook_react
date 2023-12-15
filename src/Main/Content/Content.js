import React, { useState, useEffect } from "react";
import InputTitle from "./InputTitle/InputTitle";
import TextAreaText from "./TextAreaText/TextAreaText";
import style from "./Content.module.css";
import ClearButton from "./ClearButton/ClearButton";
import CreateButton from "./CreateButton/CreateButton";
import SaveButton from "./SaveButton/SaveButton";
import CancelButton from "./CancelButton/CancelButton";

function Content({
  isActiveId,
  title,
  text,
  setText,
  setTitle,
  createNewNote,
  saveEdit,
  CancelEdit,
}) {
  return (
    <section className={style.content}>
      <InputTitle title={title} setTitle={setTitle} />
      <TextAreaText text={text} setText={setText} />
      <div className={style.saveButtons}>
        {" "}
        <ClearButton setText={setText} setTitle={setTitle} />
        <CreateButton createNewNote={createNewNote} text={text} title={title} />
        <SaveButton
          isActiveId={isActiveId}
          text={text}
          title={title}
          saveEdit={saveEdit}
        />
        <CancelButton CancelEdit={CancelEdit} />
      </div>
    </section>
  );
}

export default Content;
