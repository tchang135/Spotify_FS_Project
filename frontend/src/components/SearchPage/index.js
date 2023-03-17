import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAlbums } from "../../store/album";
import { setCurrentSong } from "../../store/currentSong";
import { fetchSongs } from "../../store/song";
import { useHistory } from "react-router-dom";
import { fetchArtists } from "../../store/artist";
import './SearchPage.css'


const SearchPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
  const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);
  const artists = useSelector(state => state.artist ? Object.values(state.artist) : [])


  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAlbum = albums.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSong = songs.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
      dispatch(fetchAlbums())
      dispatch(fetchSongs())
      dispatch(fetchArtists())
  }, [dispatch]);

  if (albums.length === 0 ) {
      return null
  } 

  if (songs.length === 0 ) {
    return null
} 

  const handleClickAlbum = (albumId) => {
    history.push(`/albums/${albumId}`);
  };

  const handleSongClick = (songId) => {
    dispatch(setCurrentSong(songId));
  };

  return (
    <div>
      <input type="search" placeholder="What do you want to listen to?" className="searchBarField" onChange={handleChange} />
      <div className="searchResultsContainer">
        <ul className="searchResults">
          <h3 className="songsHeader">Songs</h3>
          {filteredSong.map((songItem) => (
            <li key={songItem.id}>
              <div className="resultSongItem" onClick={() => handleSongClick(songItem.url)} >
                <p id="resultTitle">{songItem.title}</p>
                <p id="resultArtist">{artists.find(artist => artist.id === songItem.artistId)?.name}</p>
              </div>
            </li>
          ))}

          <h3 className="albumsHeader">Albums</h3>
          {filteredAlbum.map((albumItem) => (
            <li key={albumItem.id}>
              <div className="resultAlbumItem" onClick={() => handleClickAlbum(albumItem.id)} >
                  <img id="resultItemPhoto" src={albumItem.photoUrl} alt=""/>
                  <p id="resultTitle">{albumItem.title}</p>
                  <p id="resultArtist">{artists.find(artist => artist.id === albumItem.artistId)?.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default SearchPage;