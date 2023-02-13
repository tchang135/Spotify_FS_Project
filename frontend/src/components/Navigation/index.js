import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} id="dropDown"/>
    );
  }
  else if (location.pathname === '/signup' || location.pathname === '/login') {
    return null;
  }
  else {
    sessionLinks = (
      <>
        <div id="formLinks">
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
        <div className="topNav">
          {sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;