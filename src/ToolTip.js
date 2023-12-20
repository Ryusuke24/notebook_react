import React from "react";
import style from "./ToolTip.module.css";

function ToolTip({ text }) {
  return (
    <>
      <div className={style.toolTipComponent}>{text}</div>
    </>
  );
}

export default ToolTip;
