import { render } from "react-dom"
import React, { Component } from "react"
import { useState } from 'react';

export const Headers = ({ changeColor }) => {

    const handleColorChange = (event) =>{

        changeColor(event.target.value);
    };

  

// const Headers = () => {
    // render() {
    return(
        <div className = "headers">
            <div id = "note-head">
                <b>Write Something!</b>
            </div>
            <div id = "col-head">
                <b>Colour Selector</b>
                <div className = "colour-palette">
                {/* <div className = {this.state.colour}>   */}
                    <select id="colour-picker" onChange = {handleColorChange}>
                        <option value="whiteNote">White</option>
                        <option value="greenNote">Green</option>
                        <option value="tealNote">Teal</option>
                        <option value="orangeNote">Orange</option> 
                        <option value="pinkNote">Pink</option>
                    </select>
                </div>
            </div>
            <div id = "list-head">
                <b>Existing Notes</b>
            </div>
        </div>
    )
}


export default Headers