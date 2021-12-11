import Note from './Note'

const Notelist = ({ notes, handleAddNote }) => {

    return(

        <div className = "ListNotes">
            <div id = "savedNotes" >
                {notes.map((note)=> (
                    <Note id = {note.id} 
                    title = {note.title} 
                    date = {note.date} 
                    body = {note.body} />
                ))}
                <Note handleAddNote={handleAddNote}/>
            </div>
        </div> 

    )
}


export default Notelist