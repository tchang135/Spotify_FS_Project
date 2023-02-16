import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import AlbumIndex from "./components/AlbumIndex";
import AlbumShowPage from "./components/AlbumShow";
import SongList from "./components/SongsList";


function App() {
  return (
    <>
      <Navigation className="navbar"/>
      <Sidebar/>
        <Switch>
          <>
            <Route exact path='/'>
              <AlbumIndex/>
              <SongList/>
            </Route>
            <Route path="/albums/:albumId">
              <AlbumShowPage/>
              <SongList/>
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <br />
            <Route path="/signup">
              <SignupFormPage />
            </Route>
          </>
        </Switch>
    </>
  );
}

export default App;