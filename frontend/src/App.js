import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import AlbumIndex from "./components/AlbumIndex";
import AlbumShowPage from "./components/AlbumShow";
import SongList from "./components/SongsList";
import MediaBar from "./components/MediaBar/MediaBar";


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
              <MediaBar/>
            </Route>
            <Route path="/albums/:albumId">
              <AlbumShowPage/>
              <SongList/>
              <MediaBar/>
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