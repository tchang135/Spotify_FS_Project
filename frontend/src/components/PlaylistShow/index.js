import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, deletePlaylist } from "../../store/playlist";
import './PlaylistShow.css'

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlists);
  const history = useHistory();

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchPlaylist(playlistId));
    }
  }, [playlistId, dispatch]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this playlist?')) {
      dispatch(deletePlaylist(playlistId)).then(() => {
        history.push('/');
      });
    }
  };

  if (!playlistId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="newPlaylistPage">
      <h1 className="newPlaylistTitle">{playlist.title}</h1>
      <p className="newPlaylistDescription">{playlist.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PlaylistShow;
