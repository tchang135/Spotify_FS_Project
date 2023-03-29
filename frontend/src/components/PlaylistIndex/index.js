import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPlaylists } from "../../store/playlist";
import './PlaylistIndex.css'

const PlaylistIndex = () => {
    const playlists = useSelector((state) => Object.values(state.playlists));
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchPlaylists());
    }, []);
  
    return (
      <div className="allPlaylists">
        {playlists.map((playlist) => {
          if (playlist.hasOwnProperty("show_playlist")) {
            return null;
          }
  
          return (
            <div key={playlist?.id} className="playlistIndexItemContainer">
              <Link className="playlistIndexItem" to={`/playlists/${playlist.id}`}>
                {playlist.title}
              </Link>
            </div>
          );
        })}
      </div>
    );
};
  

export default PlaylistIndex;
