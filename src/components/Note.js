const handleEditClick = () => {
    console.log("reached handleEditclicks");
    console.log("current title: " + Note.title);
    console.log("current body: " + Note.bodyText);
    console.log("current col: " + Note.Bcolor);
    // handleAddNote(titleText,bodyText); going to need this note's title, body and background colour

};




const Note = ({id, title, date, body, Bcolor}) => {
    return(
        <div className = {`${Bcolor}`}>
            <h4>{title}</h4>
            <h5>{date}</h5>
            <p>{body}</p>
            <button id = "edit-button" onClick = {handleEditClick} >Edit</button>

        </div>
    )
}

export default Note;