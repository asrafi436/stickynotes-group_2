import React, { useContext } from 'react'
import { NoteContext } from '../contexts/Note';


export const Tracker = () => {
  const {selectedValue,handleSelectChange} = useContext(NoteContext)
  return (
    <div>
      <select
        id="tracker"
        name="Tracker"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value={"show all"}>All Notes</option>
        <option value={true}>Completed notes</option>
        <option value={false}>Uncompleted notes</option>
      </select>
    </div>
  );
}
