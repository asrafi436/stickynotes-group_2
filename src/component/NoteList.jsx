import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, editNote, toggleNotes, deleteNote }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItem
          key={index}
          note={note}
          onEdit={(title) => editNote(index, title)}
          onToggle={() => toggleNotes(index)}
          onDelete={() => deleteNote(index)}
        />
      ))}
    </ul>
  );
}

export default NoteList;
