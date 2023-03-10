import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../../store/playlist";

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
   
    dispatch(fetchPlaylist());
  }, [playlistId]);

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{playlist.name}</h1>
      <p>{playlist.description}</p>
      {/* Render other playlist information as needed */}
    </div>
  );
};

export default PlaylistShow;