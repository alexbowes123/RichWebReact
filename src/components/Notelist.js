import Note from './Note'

const Notelist = ({ notes }) => {

    return(

        <div className = "ListNotes">
            <div id = "savedNotes" >
                {notes.map((note)=> {
                    console.log(note);
                    return(<Note id = {note.id} 
                    title = {note.title} 
                    date = {note.date} 
                    body = {note.body}
                    Bcolor = {note.backgroundColour} />)
        
                })}
            </div>
        </div> 

    )
}


export default Notelist