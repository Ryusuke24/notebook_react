import React from "react";
import style from "./CreateButton.module.css";

function CreateButton({ createNewNote, title, text }) {
  return (
    <button
      className={style.createButton}
      onClick={() => createNewNote(title, text)}
    >
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(3 3)"
          >
            {" "}
            <path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682"></path>{" "}
            <path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z"></path>{" "}
            <path d="m12.5 2.5.953 1"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  );
}

export default CreateButton;
