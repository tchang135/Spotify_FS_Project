import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAlbums } from "../../store/album";
import './SearchPage.css'


const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
  // const artists = useSelector(state => state.artist ? Object.values(state.artist) : [] )
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = albums.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
      dispatch(fetchAlbums())
  }, [dispatch, filteredData]);

  if (albums.length === 0 ) {
      return null
  } 

  

  return (
    <div>
      <input type="search" placeholder="Search..." className="searchBarField" onChange={handleChange} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.artistId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SearchPage;