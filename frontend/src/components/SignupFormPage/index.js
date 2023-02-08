import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link} from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import logo from '../images/logo.JPG';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, name}))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signupPage"> 
      <div id="logoImageS">
        <img id="imgS"src={logo} alt=""/>
      </div>
      <p id='header'>Sign up for free to start listening.</p>
    <form onSubmit={handleSubmit} className="signupItems">
      
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <label id="fieldLabel">
        Email
        <br/>
        <input
          id="textField"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br/>
      <label id="fieldLabel">
        Username
        <br/>
        <input
          id="textField"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br/>
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
      <br/>
      <label id="fieldLabel">
        Confirm Password
        <br/>
        <input
          id="textField"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br/>
      <label id="fieldLabel">
        Name
        <br/>
        <input
          id="textField"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br/>
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