import React, { useState, useEffect } from "react";
import { useDispatch, useSelector  } from 'react-redux';
import * as sessionActions from '../../store/session';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    if (!currentUser) {
      return null
    }

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="profileSection">
      <button className="profileButton" onClick={openMenu}>
        <i className="fa-solid fa-user-circle" /> 
        <p>{currentUser.name}</p>
      </button>
      {showMenu && (
        <ul className="dropdown">
          {/* <li>{currentUser.name}</li> */}
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;