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

    // savClick = event => {
    //             this.setState(prev => {
    //                 prev.title = event.target.value;
    //                 prev.body = event.target.value;
    //                 return prev
    //             });

    //             let title = `${this.state.title}`
    //             let body = `${this.state.body}`

    //             if(title === ""){
    //                 alert("missing a value for title!");
    //                 return;
    //             }
    //             else{
    //                 alert("title is: "+ title);
    //             }

    //             if(body === "" ){
    //                 alert("missing a value for body!");
    //                 return;
    //             }
    //             else{
    //                 alert("body is: "+ body);
    //             }


    //         }
        
    // delClick = event => {
    //             console.log("Delete button clicked");
    // }
        
  

        return(
            <div class = "noteAndButton">
                <div class = "notePadFields">
                    <div id = "note-title">
                        <input id = "title-field" type="text" value = {titleText} onChange = {handleTitleChange} placeholder = "Title of Note"/>
                    </div>
                    <div id = "note-body">
                        <textarea id = "body-field" value = {bodyText} onChange = {handleBodyChange} ></textarea>
                    </div> 
                </div>
                <footer>
                    <button id = "btn-save" onClick = {handleSaveClick} >Save</button>
                    <button id = "btn-delete" >Delete</button>
                </footer>   
            </div>
            
        )
    }


export default Notepad