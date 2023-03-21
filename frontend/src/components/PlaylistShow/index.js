import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../../store/playlist";
import './PlaylistShow.css'

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlists);

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchPlaylist(playlistId));
    }
  }, [playlistId, dispatch]);

  if (!playlistId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="newPlaylistPage">
      <h1 className="newPlaylistTitle">{playlist.title}</h1>
      <p className="newPlaylistDescription">{playlist.description}</p>
    </div>
  );
};

export default PlaylistShow;
