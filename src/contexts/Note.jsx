import { toBeChecked } from '@testing-library/jest-dom/matchers';
import React, { createContext, useState } from 'react'
import { Search } from '../components/Search';

export const NoteContext = createContext();

const NoteProvider = ({children}) => {

const [inputNote,setInputNote] = useState("");
const [notes,setNotes] = useState([{toBeChecked:true , id:1 , note:"Eat"}, {toBeChecked:false, id:2, note:"Sleep"}, {toBeChecked:false, id:3, note:"Drinks"} ]);
const [editMode,setEditMode] = useState(false);
const [update,setUpdate] = useState(null);
const [search,setSearch] = useState("");
const [selectedValue, setSelectedValue] = useState(null);

const addHandler = (e) => {
  e.preventDefault();
  if(!inputNote){
   return alert('Please enter a note');
  }
  const newNote = {
    toBeChecked: undefined,
    id: notes.length+1,
    note: inputNote,
  }

  setNotes([...notes,newNote]);
  setInputNote("");

};
const editHandler = (inputNote) => {
  setEditMode(true);
  setInputNote(inputNote.note);
  setUpdate(inputNote);
}
const updateHandler = (e) =>{
  e.preventDefault();
  if(!inputNote.trim()){
    return alert('Please change the note');
  }
  const updatedNote = notes.map((note) => {
    if(note.id === update.id){
      return {...note, note: inputNote}
    }
    return note;
  });
  setNotes(updatedNote);
  setInputNote("");
  setEditMode(false);
  setUpdate(null);
} 
const deleteHandler = (id) => {
  const updatedNote = notes.filter((note) => note.id !== id);
  setNotes(updatedNote);

}

 const handleCheckboxChange = (Id) => (e) => {
   const updatedNote = notes.map((note) => {
     if (note.id === Id) {
       return { ...note, toBeChecked: e.target.checked };
     }
     return note;
   });
   setNotes(updatedNote);
   console.log(updatedNote);
 };

 const handleSelectChange = (e) => {
   const value = e.target.value;
   setSelectedValue(value);
 };


    const contextValue = {
      inputNote,
      setInputNote,
      notes,
      setNotes,
      editMode,
      setEditMode,
      update,
      setUpdate,
      search,
      setSearch,
      updateHandler,
      addHandler,
      editHandler,
      deleteHandler,
      handleCheckboxChange,
      selectedValue,
      setSelectedValue,
      handleSelectChange,
    };

  return (
    <NoteContext.Provider value={contextValue}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteProvider;
