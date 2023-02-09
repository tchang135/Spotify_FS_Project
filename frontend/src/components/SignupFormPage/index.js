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
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const hasEmail = (error) => {
    const regex = /Email/i;
    return regex.test(error)
  }

  const hasUsername = (username) => {
    const regex = /Username/i;
    return regex.test(username)
  }

  const hasPassword = (password) => {
    const regex = /Password is too short/i;
    return regex.test(password)
  }


  // const returnErrors = (errors, field) => { 
  //   const resultArray = [];
  //   errors.forEach ((error) => {
  //     if (field === 'Email') {
  //       hasEmail(error) ? resultArray.push(error) : null
  //     }
  //   })
  //   return resultArray
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
      setErrors([]);
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


  return (
    <div className="signupPage">
      <div id="logoImageS">
        <img id="imgS" src={logo} alt="" />
      </div>
      <p id='header'>Sign up for free to start listening.</p>
      <form onSubmit={handleSubmit} className="signupItems">
        <p id="signupHeader">Sign up with your email address</p>
        <ul id="signupError">
          {errors.map(error => <li key={error}> <i class="fa-solid fa-circle-exclamation"></i> {error}</li>)}
        </ul>
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
        {/* {returnErrors(errors, 'Email').map(error => 
            <li> error </li>
          )} */}
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
        {/* {hasUsername(errors[0]) ? <li key={errors[0]}> <i class="fa-solid fa-circle-exclamation"></i> {errors[0]}</li> : null} */}
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
        {/* {hasPassword(errors[0]) ? <li key={errors[0]}> <i class="fa-solid fa-circle-exclamation"></i> {errors[0]}</li> : null} */}
        
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
        <p className="loginText">Have an account?  </p>
        <Link to="/login" className="loginLink">  Log In</Link>
      </span>
    </div>
  );
}

export default SignupFormPage;