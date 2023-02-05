
import noteContext from "./note-context"
const NoteProvider = (props) => {
    const NoteContext  = {
       id : 0,
    }
    return <noteContext.Provider>
        {props.children}
    </noteContext.Provider>
}

export default NoteProvider