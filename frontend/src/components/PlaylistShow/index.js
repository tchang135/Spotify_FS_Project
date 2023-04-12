import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, deletePlaylist } from "../../store/playlist";
import { fetchSongs } from "../../store/song";
import { deletePlaylistSong } from "../../store/playlistSong";
import PlaylistEdit from "../PlaylistEdit";
import './PlaylistShow.css';

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlists.show_playlist);
  const playlistSongs = useSelector((state) => state.playlists.show_playlist?.playlistSongs);
  const playlistSongIds = playlistSongs?.map((playlistSong) => playlistSong?.songId);
  const songs = useSelector((state) => {
    const final = [];
    const songsArr = Object.values(state.songs);
    for (let i = 0; i < songsArr.length; i++) {
      const currentSong = songsArr[i];
      if (playlistSongIds && playlistSongIds.includes(currentSong.id)) {
        final.push(currentSong);
      }
    }
    return final;
});

  const history = useHistory();
  const [editMode, setEditMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchSongs())
      dispatch(fetchPlaylist(playlistId));
    }
  }, [playlistId, dispatch]);

  const handlePlaylistDelete = () => {
    if (window.confirm('Are you sure you want to delete this playlist?')) {
      dispatch(deletePlaylist(playlistId)).then(() => {
        history.push('/');
      });
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setDropdownOpen(false);
  };

  const handleSongDelete = (songId) => {
    dispatch(deletePlaylistSong(playlistId, songId.toString()));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
          <div className="playlistTopColor">
            <h1 className="newPlaylistTitle">{playlist?.title}</h1>
            <p className="newPlaylistDescription">{playlist?.description}</p>
          </div>
          <div className="playlistDropdownContainer">
            <button className="playlistDropdownButton" onClick={toggleDropdown}>
              <i id="bigPlayButtonPlaylist" class="fa-solid fa-circle-play"></i>
              <i id="dropdownPlaylist" class="fa-solid fa-ellipsis"></i>
            </button>
            {dropdownOpen && (
              <div className="playlistDropdownContent">
                <button className="playlistDeleteButton" onClick={handlePlaylistDelete}>Delete</button>
                <button className="playlistEditButton" onClick={handleEdit}>Edit</button>
              </div>
            )}
          </div>
          <div className="playlistSongsList">
          {songs?.map((song) => (
            <div key={song.id} className="playlistSongObject">
              <p className="songTitle">{song.title}</p>
              {/* <p className="songArtist">{song.artist}</p> */}
              <button className="deletePlaylistSong" onClick={() => handleSongDelete(song.id)}>Delete Song</button>
            </div>
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlaylistShow;
