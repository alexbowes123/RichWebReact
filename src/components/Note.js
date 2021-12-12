import React  from "react"

export const Note = ({id, title, date, body, Bcolor, handleEditNote , handleDeleteNote}) => {

    const handleEditClick = () => {

        // console.log("reached handleEditclick");
        // console.log("currentID: " + id);
        // console.log("current title: " + title);
        // console.log("current body: " + body);
        // console.log("current col: " + Bcolor);

        handleEditNote(id,title,body,Bcolor);

    };

    const handleDeleteClick = () => {
        console.log("in delete click");

        console.log("currentID" + id);

        handleDeleteNote(id)


    }



    return(
        <div className = {`${Bcolor}`}>
            <h4>{title}</h4>
            <h5>{date}</h5>
            <p>{body}</p>
            <p>{id}</p>
            <button id = "edit-button" onClick = {handleEditClick} >Edit</button>
            <button id = "btn-delete" onClick = {handleDeleteClick} >Delete</button>

        </div>
    )
}

export default Note;