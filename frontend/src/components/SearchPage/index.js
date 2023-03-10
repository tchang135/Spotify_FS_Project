import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAlbums } from "../../store/album";
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

  return (
    <div>
      <input type="search" placeholder="What do you want to listen to?" className="searchBarField" onChange={handleChange} />
      <ul className="searchResults">
        {filteredSong.map((songItem) => (
          <li key={songItem.id}>
            <p>{songItem.title}</p>
            <p>{artists.find(artist => artist.id === songItem.artistId)?.name}</p>
          </li>
        ))}


        {filteredAlbum.map((albumItem) => (
          <li key={albumItem.id}>
            <div className="resultItem" onClick={() => handleClickAlbum(albumItem.id)} >
                <img id="resultItemPhoto" src={albumItem.photoUrl} alt=""/>
                <p id="resultTitle">{albumItem.title}</p>
                <p id="resultArtist">{artists.find(artist => artist.id === albumItem.artistId)?.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SearchPage;