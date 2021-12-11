import React, { Component} from "react";
import { useState } from 'react';
import { nanoid } from 'nanoid';

import Header from "./components/Header";
import Headers from "./components/Headers";
import NoteList from "./components/Notelist";
import Notepad from "./components/Notepad";
import './index.css';


const App = () => {
  const[notes, setNotes] = useState([

    // array of notes (included example note here)
    // {
    //   id: nanoid(),
    //   title: "This is my first note!",
    //   date: "08/12/21",
    //   body: "This is the body!"
    // },

  ]);


  const [currNote, setCurrNote] = useState({
    id: '',
    title: '',
    body: '',
    color: '',
  });

  const changeColor = (newColor) => {
    //set the colour of background title and body here

    
  
    setCurrNote(prev => {
      prev.color = newColor;
      console.log("newCol "+newColor);
      return prev;
    });
  };


  //add a colour note state, create a function to pass the headers to change the colour

  const defaultNote = {
    id:'',
    title: '',
    date:'',
    body:''

  }
  // const currentNote [titleText, bodyText, set] = useState(defaultNote);

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

    const newNote = {
        id: nanoid(),
        title: title,
        date: date.toLocaleDateString(),
        body: body,
        backgroundColour: currNote.color    
    }

    // console.log("new",newNote)
    
    const newNotes = [...notes, newNote]; //get contents of notes array, spreading into array, then insert 1 more element called newnote

    setNotes(newNotes);

  }

    return (
    <div className="App">
      <Header/>
      {/* trying to pass the prev with the colour up so it can be sent down to add note */}
      <Headers changeColor ={changeColor}/> 
      <Notepad  currColor = {currNote.color} handleAddNote={addNote}/>
      <NoteList notes={notes}/> 
      {/* <NoteList notes={notes} handleAddNote = {addNote}/>  */}
    </div>
  );
}


export default App;