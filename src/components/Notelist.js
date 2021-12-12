import Note from './Note'

const Notelist = ({ notes, handleEditNote , handleDeleteNote}) => {

    

    return(

        <div className = "ListNotes">
            <div id = "savedNotes" >
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