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
import SearchPage from "./components/SearchPage"
import CreatePlaylistPage from "./components/PlaylistCreate"
import PlaylistShow from "./components/PlaylistShow";


function App() {
  return (
    <>
      <Navigation className="navbar"/>
      <Sidebar/>
      <MediaBar/>
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
            <Route path="/search">
              <SearchPage/>
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <br />
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/createPlaylist">
              <CreatePlaylistPage />
            </Route>
            <Route path='/showPlaylist'>
              <PlaylistShow />
            </Route>
          </>
        </Switch>
    </>
  );
}

export default App;