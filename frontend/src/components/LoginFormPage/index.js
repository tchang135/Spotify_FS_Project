import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import logo from '../images/logo.JPG';
import './LoginForm.css';


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  const handleDemoUser = (e) => {
    setCredential('guest@guest.com');
    setPassword('password');
  }

  return (
    <div className= "loginPage">
      <div id="logoImage">
        <img id="img"src={logo} alt=""/>
      </div>
      <br/>
      <div className="staticButtons">
        <p id="loginText">To continue, log in to Symphonify</p>
        <ul id='loginError'>
          {errors.map(error => <li key={error} id="backgroundError"><i class="fa-solid fa-circle-exclamation"></i><span style={{marginLeft: '10px'}}>{error}</span></li>)}
        </ul>
        <a href="https://www.linkedin.com/in/timothy-s-chang/" id="linkedin">LINKEDIN</a>
        <br/>
        <a href="https://github.com/tchang135" id="github">GITHUB</a>
        <br/>
      </div>
      <br/>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label id="fieldLabel">
          Email address or username
          <br/>
          <input
            id="textField"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label id="fieldLabel">
          Password
          <br/>
          <input
            id="textField"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="buttons">
          <button type="submit" id="demoButton" onClick={handleDemoUser}>DEMO USER</button>
          <button type="submit" id="submitButton">LOG IN</button>
        </div>
      </form>

      <div className="signupLink">
        <p id='signupText'>Don't have an account?</p>
        <Link to="/signup" id="linkButton">SIGN UP FOR SYMPHONIFY</Link>
      </div>
    </div>
  );
}

export default LoginFormPage;