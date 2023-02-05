import './CreatePage.css'
import {  useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

const CreatePage = () => {
    const navigate = useNavigate()
    const [enteredNote, setEnteredNote] = useState()
    const backHandler = () => {
      navigate('/notes')
    }

    const onTextAreaChangeHandler = (event) => {
        if(event.target.value.length > 0){
            setEnteredNote(event.target.value)
        }
    }
    const submitHandler = (event) => {
        // event.preventDefault()
        const note = {
            body : enteredNote
        }
    
    fetch("http://localhost:8000/api/notes/create/", {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(note)
    })
    // navigate('/notes/')
    }

    
  return (
    <div className="header">
    <div className="notes_main">
      
      <h1 className="header__heading">
      <button onClick={backHandler} className="header__back">Back</button>
        Notes📝<span></span>
      </h1>
    <span className="note__create">
      {/* <NavLink className="create__button" to="/create">✖️</NavLink> */}
      </span>
      {/* <NoteItems/> */}
        <form>
        <textarea type="text" placeholder='Enter Your Notes Here...' className='create__note' rows="23" cols="50" onChange={onTextAreaChangeHandler}></textarea>
        {/* {< type='submit'>ADD</button>} */}
        <NavLink to="/notes/" onClick={submitHandler} className="create__button">ADD</NavLink>
        </form>
    </div>
    </div>
  )
}

export default CreatePage