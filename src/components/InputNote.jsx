import React, { useContext } from "react";
import "../App.css";
import { NoteContext } from "../contexts/Note";

export const InputNote = () => {
  const { editMode, inputNote, setInputNote, updateHandler, addHandler } =
    useContext(NoteContext);
  return (
    <div className="InputNote">
      <form>
        <h3>Write Your Note:</h3>
        <input
          type="text"
          value={inputNote}
          onChange={(e) => setInputNote(e.target.value)}
        />
        <button
          onClick={editMode ? updateHandler : addHandler}
          className="button-24"
        >
          {editMode ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
};
