import React, { Component } from "react"

import { useState } from 'react';

const Notepad = ({ handleAddNote, currNote}) => {

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
        console.log("currNote ", currNote.color);
        handleAddNote(titleText,bodyText);

    };
          
    return(
        <div class = "noteAndButton">
            <div class = "notePadFields">

                {/* set this to change the title colour */}
                {/* give the corrseponding colours in css the same css properties aas below */}
                <div className={`${currNote.color}Title`}>
                    <input id = {`${currNote.color}title-field`} type="text" value = {titleText} onChange = {handleTitleChange} placeholder = "Title of Note"/>
                </div>
                {/* set this to change the body colour */}
                <div className={`${currNote.color}Body`}>
                    <textarea id = {`${currNote.color}Body-field`} value = {bodyText} onChange = {handleBodyChange} ></textarea>
                </div> 
            </div>
            <footer>
                <button id = "btn-save" onClick = {handleSaveClick} >Save</button>
                <button id = "btn-delete" >Delete</button>
            </footer>   
        </div>
        
    )}


export default Notepad