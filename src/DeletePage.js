import React, { useContext, useEffect } from 'react'
import noteContext from './store/note-context'





const DeletePage = () => {
    useEffect(() => {
        deleteHandler()
    },[])
    const noteCtx = useContext(noteContext)
    const noteId = noteCtx.id
    console.log(noteId)
    const deleteHandler = () => {
        fetch(`http://localhost:8000/api/notes/${noteId}/delete/`)
    }
}

export default DeletePage