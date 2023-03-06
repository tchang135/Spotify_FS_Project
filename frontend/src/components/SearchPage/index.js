import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";
import { useHistory } from "react-router-dom";
import './SearchPage.css'


const SearchPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
  const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAlbum = albums.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
      dispatch(fetchAlbums())
      dispatch(fetchSongs())
  }, [dispatch]);

  if (albums.length === 0 ) {
      return null
  } 

  const handleClick = (albumId) => {
    history.push(`/albums/${albumId}`);
  };

  return (
    <div>
      <input type="search" placeholder="What do you want to listen to?" className="searchBarField" onChange={handleChange} />
      <ul className="searchResults">
        {filteredAlbum.map((item) => (
          <li key={item.id}>
            <div className="resultItem" onClick={() => handleClick(item.id)} >
                <img id="resultItemPhoto" src={item.photoUrl} alt=""/>
                <p>{item.title}</p>
                <p>{item.artistId}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SearchPage;