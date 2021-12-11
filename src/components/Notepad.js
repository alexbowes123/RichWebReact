import React, { Component } from "react"

import { useState } from 'react';

const Notepad = ({ handleAddNote, currColor, currNote }) => {

    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');


    const handleTitleChange = (event) => { //value is captured 
            setTitleText(event.target.value);
    };

    const handleBodyChange = (event) => { //value is captured 
        setBodyText(event.target.value)

    }

    

    const handleSaveClick = () => {
        console.log("reached handlesaveclicks");
        console.log("current colour value is: " + currColor);
        handleAddNote(titleText,bodyText);

    };
          
    return(
        <div class = "noteAndButton">
            <div class = "notePadFields">

                {/* set this to change the title colour */}
                <div id = "note-title"> 
                    <input id = "title-field" type="text" value = {titleText} onChange = {handleTitleChange} placeholder = "Title of Note"/>
                </div>
                {/* set this to change the body colour */}
                <div id = "note-body">
                    <textarea id = "body-field" value = {bodyText} onChange = {handleBodyChange} ></textarea>
                </div> 
            </div>
            <footer>
                <button id = "btn-save" onClick = {handleSaveClick} >Save</button>
                <button id = "btn-delete" >Delete</button>
            </footer>   
        </div>
        
    )}


export default Notepad