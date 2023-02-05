import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useContext, useEffect, useState, } from 'react';
import { Link, Route, Routes ,Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import NoteItem from './NoteItems';
import CreatePage from './CreatePage';
import DeletePage from './DeletePage';
import noteContext from './store/note-context';
function App() {
  const noteCtx = useContext(noteContext)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/welcome"/>}></Route>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/notes'  element={<Header/>} exact/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/notes:id' element={<NoteItem/>}/>
        { noteCtx.isClicked && <Route path='/notes:id/delete' element={<DeletePage/>}/>}
      </Routes>
    </div>
  );
}

export default App;
