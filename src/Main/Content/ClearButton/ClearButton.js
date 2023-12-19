import React from "react";
import style from "./ClearButton.module.css";

function ClearButton({ setText, setTitle }) {
  return (
    <button
      className={style.clearButton}
      onClick={() => {
        setText(" ");
        setTitle(" ");
      }}
    >
      <svg
        fill="#000000"
        width="28px"
        height="28px"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g fillRule="evenodd">
            {" "}
            <path d="M1235.141 1619.922h-190.317l-179.997-179.998 635.15-635.149 275.155 275.155-539.99 539.992Zm667.31-582.472-359.995-359.994c-23.52-23.399-61.44-23.399-84.839 0l-719.989 719.99c-23.519 23.52-23.519 61.438 0 84.957l137.518 137.52H0v119.997h1259.98c15.96 0 31.2-6.36 42.48-17.52l599.99-599.99c23.4-23.52 23.4-61.44 0-84.96Z"></path>{" "}
            <path d="M120.034 180.004v119.999h494.993L243.392 1360.066l113.158 39.72L742.105 300.003h457.912V180.004z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  );
}

export default ClearButton;
