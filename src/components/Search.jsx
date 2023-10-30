import React, { useContext } from "react";
import { NoteContext } from "../contexts/Note";
import "../App.css";

export const Search = () => {
  const { search, setSearch } = useContext(NoteContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-css"
      />
    </div>
  );
};
