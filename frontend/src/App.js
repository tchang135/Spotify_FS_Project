import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
// import SongsList from './components/SongsList';
import Sidebar from "./components/Sidebar";
import AlbumIndex from "./components/Albums";


function App() {
  return (
    <>
      <Navigation className="navbar"/>
        <Switch>
          <>
            <Route exact path='/'>
              <Sidebar/>
              <AlbumIndex/>
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <br />
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            {/* <Route path="/songs">
              {/* <SongsList /> */}
            {/* </Route>  */}
          </>
        </Switch>
    </>
  );
}

export default App;