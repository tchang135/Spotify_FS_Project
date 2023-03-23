import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, deletePlaylist } from "../../store/playlist";
import PlaylistEdit from "../PlaylistEdit";
import './PlaylistShow.css';

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlists.show_playlist);

  const history = useHistory();
  const [editMode, setEditMode] = useState(false);

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

  const handleEdit = () => {
    setEditMode(true);
  };

  if (!playlistId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="newPlaylistPage">
      {editMode ? (
        <PlaylistEdit playlistId={playlistId} setEditMode={setEditMode} />
      ) : (
        <>
          <h1 className="newPlaylistTitle">{playlist?.title}</h1>
          <p className="newPlaylistDescription">{playlist?.description}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PlaylistShow;
