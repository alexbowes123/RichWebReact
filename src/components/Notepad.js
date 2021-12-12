import React from "react"

import { useState } from 'react';

const Notepad = ({handleAddNote, currNote}) => {

    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState(`${currNote.body}`);


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
        if(titleText != "" && bodyText != ""){ // only reset values if a note has been made with actual values
            setTitleText('');
            setBodyText('');
        }
    };

    return(
        <div class = "noteAndButton">
            <div class = "notePadFields">

                <div className={`${currNote.color}Title`}>
                    <input id = {`${currNote.color}title-field`} type="text" value = {titleText} onChange = {handleTitleChange} placeholder = "Title of Note"/>
                </div>
                <div className={`${currNote.color}Body`}>
                    <textarea id = {`${currNote.color}Body-field`} value = {bodyText} onChange = {handleBodyChange}></textarea>
                </div> 
            </div>
            <footer>
                <button id = "btn-save" onClick = {handleSaveClick} >Save</button>
            </footer>   
        </div>
        
    )}


export default Notepad