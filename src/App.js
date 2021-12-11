import React, { Component} from "react";
import { useState } from 'react';
import { nanoid } from 'nanoid';

import Header from "./components/Header";
import Headers from "./components/Headers";
import NoteList from "./components/Notelist";
import Notepad from "./components/Notepad";
import './index.css';


// class App extends Component {

// //essentially our index.html?
// render(){

const App = () => {
  const[notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   title: "This is my first note!",
    //   date: "08/12/21",
    //   body: "This is the body!"
    // },
    // {
    //   id: nanoid(),
    //   title: "This is my second note!",
    //   date: "01/12/21",
    //   body: "This is the 2nd body!"
    // },
    // {
    //   id: nanoid(),
    //   title: "This is my third note!",
    //   date: "04/12/21",
    //   body: "This is the 3rd body!"
    // },
    // {
    //   id: nanoid(),
    //   title: "This is my NEW note!",
    //   date: "15/12/21",
    //   body: "This is the NEW body!"
    // }

  ]);

  const addNote = (title,body) => {

    // console.log("the text is: " +title);
    const date = new Date();


    //logic for checking title !== "" or body!== ""
    if(title === ""){
      alert("add a title value");
      return;
    }
    if(body === ""){
      alert("add a body value");    //move this according to mikael
      return;
    }

    const newNote = {
        id: nanoid(),
        title: title,
        date: date.toLocaleDateString(),
        body: body,
        backgroundColour: 'white' // example colour
        
    }
    const newNotes = [...notes, newNote];


    setNotes(newNotes);

  }

    return (
    <div className="App">
      <Header/>
      <Headers/>
      <Notepad handleAddNote={addNote}/>
      <NoteList notes={notes} handleAddNote = {addNote}/> 
    </div>
  );
}


export default App;