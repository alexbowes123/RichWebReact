
const Note = ({id, title, date, body}) => {
    return(
        <div className = "note">
            <h4>{title}</h4>
            <h5>{date}</h5>
            <p>{body}</p>
            <button id = "edit-button">delete</button>

        </div>
    )
}

export default Note;