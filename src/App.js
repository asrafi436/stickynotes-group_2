import React, { useState } from 'react';
import NoteList from './component/NoteList';
import NoteForm from './component/NoteForm';
import Filter from './component/Filter';

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const addNote = (title) => {
    setNotes([...notes, { title, completed: false }]);
  };

  const toggleNotes = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index, title) => {
    const updatedNotes = [...notes];
    updatedNotes[index].title = title;
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) => {
    if (filter === 'all') {
      return note.title.includes(search);
    } else if (filter === 'completed') {
      return note.completed && note.title.includes(search);
    } else {
      return !note.completed && note.title.includes(search);
    }
  });

  return (
    <div>
      <h1>Note-Taking App</h1>
      <NoteForm addNote={addNote} />
      <Filter filter={filter} setFilter={setFilter} />
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <NoteList
        notes={filteredNotes}
        editNote={editNote}
        toggleNotes={toggleNotes}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
