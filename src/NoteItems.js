import React, { useState , useEffect, useContext} from 'react'
import './NoteItems.css'
import noteContext from './store/note-context'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
const NoteItems = ({}) => {
  // const noteCtx = useContext(noteContext)
  // const navigate = useNavigate()
  const [note, setNotes] = useState([])
  const [isempty, setIsEmpty] = useState(true)
  const query = useParams();
  useEffect(() => {
     getNotes()
     
  }, [])


  const getNotes = async () => {
    const response = await fetch("http://localhost:8000/api/notes/")
    const data = await response.json()
    console.log(data)
    const dataLength = Object.keys(data).length;
    if (dataLength > 0){
      setIsEmpty((prevS) => {
        prevS = !prevS
      })
    }
    setNotes(data)
    // {data &&  setIsEmpty((prevS) => {
    //   prevS = !prevS
    // })}
   
  }



  const clickHandler = (noteId) => {
    // noteCtx.id = noteId
    // noteCtx.isClicked = !noteCtx.isClicked
    // delete.click()
    // navigate(`/${noteId}/`)
  }




  const helper = note.map((i) => {
    return(
      <div className='notes__items'>
          <h3>{i.body} <NavLink onClick={clickHandler(i.id)} className="delete" >delete
          </NavLink></h3>
      </div>
    )
  })
  return(
    <div className='notes'>
      {!isempty && helper}
      {isempty && <p>No Notes Found !</p>}

    </div>
  )


}

export default NoteItems

