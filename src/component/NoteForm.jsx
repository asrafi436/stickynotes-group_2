import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title.trim() !== '') {
      addNote(title);
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new note"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Create Note</button>
    </div>
  );
}

export default NoteForm;
