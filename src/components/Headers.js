import { render } from "react-dom"
import React, { Component } from "react"
import { useState } from 'react';

class Headers extends Component{

    constructor(props){
        super(props)

        this.state = {

            colour:'white'
           
        }
    }

    handleColourChange = (e) =>{

        this.setState(prev =>{
            prev.colour = e.target.value;
            return prev
        }); 
    }
  

// const Headers = () => {
    render() {
        return(
        <div className = "headers">
                    <div id = "note-head">
                        <b>Write Something!</b>
                    </div>
                    <div id = "col-head">
                        <b>Colour Selector</b>
                        {/* <div className = "colour-palette"> */}
                        <div className = {this.state.colour}> 
                            <select id="colour-picker" value = {this.state.colour} onChange = {this.handleColourChange}>
                                <option value="white">White</option>
                                <option value="green">Green</option>
                                <option value="teal">Teal</option>
                                <option value="orange">Orange</option> 
                                <option value="pink">Pink</option>
                            </select>
                        </div>
                    </div>
                    <div id = "list-head">
                        <b>Existing Notes</b>
                    </div>
                </div>
        )
    }
}

export default Headers