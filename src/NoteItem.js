import React, { useState } from 'react'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
// import NoteItem from './NoteItem'

const NoteItem = ({match}) => {
  const [noteDetail, setNoteDetail] = useState([])
  const query = useParams()
  
//   const noteId = match.params.id
  // const navigate = useNavigate()
  useEffect(() => {
        getNote()
    },[])
const getNote = async () => {
    const response = await fetch(`http://localhost:8000/api/notes/${query}/`)
    const note = await response.json()
    setNoteDetail(note)
    console.log(note)
    setNoteDetail(note)
} 
  return (
    <div className='main'>
        <span className='list_notes'>
            <h1>hello</h1>
        </span>
         </div>
  )
}

export default NoteItem