import Note from './Note'

const Notelist = ({ notes, handleEditNote , handleDeleteNote}) => {

    
    // holds the list of notes that are displayed

    return(
        <div className = "existingNotes">
            <div id = "list-head">
                <b>Existing Notes</b>
            </div>
            <div className = "ListNotes">
                {notes.map((note)=> {
                    console.log( "in saved notes",note);
                    return(<Note id = {note.id} 
                    title = {note.title} 
                    date = {note.date} 
                    body = {note.body}
                    Bcolor = {note.backgroundColour} 
                    
                    handleEditNote={handleEditNote} handleDeleteNote={handleDeleteNote}/>)
        
                })}
            </div> 
        </div>

    )
}


export default Notelist