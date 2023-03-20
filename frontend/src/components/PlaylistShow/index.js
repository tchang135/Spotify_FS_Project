import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../../store/playlist";

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlists);

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchPlaylist(playlistId));
    }
  }, [playlistId, dispatch]);

  if (!playlist) {
    console.log("Current playlists state:", playlist);
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{playlist.title}</h1>
      <p>{playlist.description}</p>
    </div>
  );
};

export default PlaylistShow;
