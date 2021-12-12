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

  /* Array of notes to be displayed */
  const[notes, setNotes] = useState([

  ]);


  const [currNote, setCurrNote] = useState({
    id: '',
    title: '',
    body: '',
    color: 'whiteNote',
  });


  //change the colour of the notepad

  const changeColor = (newColor) => {    
  
    setCurrNote(prev => {
      prev.color = newColor;
      console.log("newCol "+newColor);
      return prev;
    });
  };


  //logic for adding a note
  const addNote = (title,body) => {

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
    counter++; //for id 

    //create a new note with the following values
    const newNote = {
        id: counter,
        title: title,
        date: date.toLocaleDateString(),
        body: body,
        backgroundColour: currNote.color    
    }
    
    const newNotes = [...notes, newNote]; //get contents of notes array, spreading into array, then insert 1 more element called newnote

    setNotes(newNotes);

  }

  const deleteNote = (id) => {

    console.log("in deleteNote");

    const removingNote = [...notes].filter(note => note.id !== id);

    setNotes(removingNote);

  }






  const editNote = (editId, editTitle, editBody, editColor) => {
    console.log("reached editNote on appjs!");
    console.log(editId);
    console.log(editTitle);
    console.log(editBody);
    console.log(editColor);

    setCurrNote(prev => {
      prev.id = editId;
      prev.title = editTitle;
      prev.body = editBody;
      prev.color = editColor;
      return prev;
    });
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