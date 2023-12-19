import React, { useState } from "react";
import style from "./Search.module.css";

function Search({ searchNote }) {
  return (
    <section className={style.searchBar}>
      <label className={style.label}>
        Search by title/text:
        <input
          className={style.input}
          placeholder="search..."
          type="text"
          onChange={event => searchNote(event.target.value)}
        />
      </label>
    </section>
  );
}

export default Search;
