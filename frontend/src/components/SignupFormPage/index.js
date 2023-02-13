import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import logo from '../images/logo.JPG';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");

  const returnErrors = (errors, field) => {
    let result = [];
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].includes(field)) {
        result.push(errors[i]);
      }
    }
    return result;
  };

  const emailErrors = returnErrors(errors, 'Email');
  const usernameErrors = returnErrors(errors, 'Username');
  const passwordErrors = returnErrors(errors, 'Password');

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.signup({ email, username, password, name }))
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

  if (sessionUser) { return <Redirect to="/" />; }





  return (
    <div className="signupPage">
      <div id="logoImageS">
        <img id="imgS" src={logo} alt="" />
      </div>
      <p id='header'>Sign up for free to start listening.</p>
      <form onSubmit={handleSubmit} className="signupItems">
        <p id="signupHeader">Sign up with your email address</p>
        <label id="fieldLabel">
          What's your email
          <br />
          <input
            id="textField"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </label>
        {emailErrors.length > 0 && 
            <p id="errorMessage">
              <i class="fa-solid fa-circle-exclamation" id="doubleError"></i><span style={{marginLeft: '10px'}}>{emailErrors[0]}</span>
              <br/>
              <i class="fa-solid fa-circle-exclamation"></i><span style={{marginLeft: '10px'}}>{emailErrors[1]}</span>
            </p>
        }

        <br />
        <label id="fieldLabel">
          Enter your username
          <br />
          <input
            id="textField"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </label>
        {usernameErrors.length > 0 &&
          <p id="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i><span style={{marginLeft: '10px'}}>{usernameErrors[0]}</span>
          </p>
        }

        <br />
        <label id="fieldLabel">
          Create a password
          <br />
          <input
            id="textField"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Create a password."
          />
        </label>
        {passwordErrors.length > 0 &&
          <p id="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i><span style={{marginLeft: '10px'}}>{passwordErrors[0]}</span>
          </p>
        }

        <br />
        <label id="fieldLabel">
          What should we call you?
          <br />
          <input
            id="textField"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter a profile name."
          />
        </label>
        <br />
        <button type="submit" id="signup">Sign Up</button>
      </form>
      <span className="loginRedirect">
        <p className="loginText">Have an account?</p>
        <Link to="/login" className="loginLink">Log In</Link>
      </span>
    </div>
  );
}

export default SignupFormPage;