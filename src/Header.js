import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import NoteItems from "./NoteItems";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  const backHandler = () => {
    navigate('/welcome/')
  }

  const clickHandler = () => {
    setIsClicked(true)
  }
  return (
    <Fragment>
      <div className="header">
        <div className="notes_main">
          
          <h1 className="header__heading">
          <button onClick={backHandler} className="header__back">Back</button>
            Notes📝<span></span>
          </h1>
        <span className="note__create">
          <NavLink className="create__button" to="/create" onClick={clickHandler}>✖️</NavLink>
          </span>
          <NoteItems/>
        </div>
        </div>
    </Fragment>
  );
};

export default Header;
