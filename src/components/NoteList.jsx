import "../App.css";
import React, { useContext } from "react";
import { NoteContext } from "../contexts/Note";

export const NoteList = () => {
  const {
    notes,
    editHandler,
    deleteHandler,
    handleCheckboxChange,
    selectedValue,
    search,
  } = useContext(NoteContext);
  return (
    <div>
      <h1>Note List</h1>
      <form>
        <ul>
          {notes
            .filter((note) => {
              if (selectedValue === "show all") {
                return true;
              } // Show all notes
              return selectedValue === "true"
                ? note.toBeChecked
                : !note.toBeChecked;
            })
            .filter((note) => {
              if (search === "") return true;
              return note.note.toLowerCase().includes(search.toLowerCase());
            })
            .map((note) => (
              <li key={note.id} className="note-list">
                <input
                  type="checkbox"
                  value={note}
                  checked={note.toBeChecked}
                  onChange={handleCheckboxChange(note.id)}
                />
                <p>{note.note}</p>
                <button
                  type="button"
                  onClick={() => editHandler(note)}
                  className="button-24"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteHandler(note.id)}
                  className="button-24"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </form>
    </div>
  );
};
