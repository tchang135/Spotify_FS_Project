import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPlaylists } from "../../store/playlist";
import './PlaylistIndex.css'

const PlaylistIndex = () => {
   const playlists = useSelector((state) => state.playlists);
   const playlistsArr = Object.entries(playlists)
     .filter(([key, value]) => key !== "show_playlist")
     .map(([key, value]) => value);
   const dispatch = useDispatch();


    useEffect(() => {
      dispatch(fetchPlaylists());
    }, [dispatch]);

  
    return (
      <div className="allPlaylists">
        {playlistsArr.map((playlist) => (
          <div key={playlist?.id} className="playlistIndexItemContainer">
            <Link className="playlistIndexItem" to={`/playlists/${playlist.id}`}>
              {playlist.title}
            </Link>
          </div>
        ))}
      </div>
    );
  };
  

export default PlaylistIndex;
