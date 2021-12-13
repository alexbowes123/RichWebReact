import React from "react";
import { useState } from 'react';
import Header from "./components/Header";
import Headers from "./components/Headers";
import NoteList from "./components/Notelist";
import Notepad from "./components/Notepad";
import Note from "./components/Note";
import './index.css';

let counter = 0; //holds the number of notes

const App = () => {

//   /* Array of notes to be displayed */
  const[notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState({
    id: '',
    title: '',          /*initial note has only a white colour*/
    body: '',
    color: 'whiteNote',
  });
  const [isEditing, setIsEditing] = useState(false);


  //change the colour of the notepad

  const changeColor = (newColor) => {    
  
    setCurrNote(prev => {
      prev.color = newColor;
      console.log("newCol "+newColor);
      return prev;
    });
  };


//   //logic for adding a note
const addNote = (title,body) => {
  if(isEditing) { //check to see if then note is a note that already exists
    setNotes(prev => {
      const updatedNotes = prev.map(note => { //map the new values for title and body onto the note with the correct id
        if(note.id === currNote.id) {
          note.body = body;
          note.title = title;
        }
        return note;
      })
      return updatedNotes;
    })
    setIsEditing(false);
    return;
  }

  const date = new Date();

  //logic for checking title !== "" or body!== ""
  if(title === ""){
    alert("add a title value");
    return;
  }
  if(body === ""){
    alert("add a body value");  
    return;
  }

    console.log("currentNote",currNote);
    counter++;//for id

//     //create a new note with the input  values for title and body, as well as colour of the note
    const newNote = {
      id: counter,
      title: title,
      date: date.toLocaleDateString(),
      body: body,
      backgroundColour: currNote.color    
    }
    
    const newNotes = [...notes, newNote]; //get contents of notes array, spreading into array, then insert / append 1 more element called newnote

    setNotes(newNotes);

  }

  const deleteNote = (id) => {

    console.log("in deleteNote");

    //filter the array of notes to only include notes which do not match the id of the selected note
    const removingNote = [...notes].filter(note => note.id !== id); 
    setNotes(removingNote);

  }

  const editNote = (editId, editTitle, editBody, editColor) => {
    console.log("reached editNote on appjs!");
    console.log(editId);
    console.log(editTitle);
    console.log(editBody);
    console.log(editColor);
   
    //set the notepad to have the values of the existing note which was clicked
    setCurrNote({id: editId, title: editTitle, body: editBody, color: editColor});
    setIsEditing(true);
  }
  return (
    <div className="App">
      <Header/>
      <Headers changeColor ={changeColor}/> 
      <Notepad  currNote = {currNote} currColor = {currNote.color} handleAddNote={addNote} />
      <NoteList notes={notes} handleEditNote = {editNote} handleDeleteNote = {deleteNote}/> 

      <Note/>
    </div>
  );
}


export default App;