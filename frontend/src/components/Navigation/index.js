import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} id="dropDown"/>
    );
  } else {
    sessionLinks = (
      <>
        <div className="topNav">
          <NavLink to="/signup" id="navSignup">Sign up
          </NavLink> 
          <br/>
          <NavLink to="/login" id="navLogin">Log in

          </NavLink>
        </div>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          <i class="fa-solid fa-house"></i>
        </NavLink>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;