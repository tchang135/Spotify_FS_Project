import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, deletePlaylist, fetchPlaylists } from "../../store/playlist";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";
import { deletePlaylistSong } from "../../store/playlistSong";
import PlaylistEdit from "../PlaylistEdit";
import './PlaylistShow.css';

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
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
  const [playlistDropdownOpen, setPlaylistDropdownOpen] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(null);

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchSongs())
      dispatch(fetchPlaylist(playlistId));
      dispatch(fetchAlbums())
    }
  }, [playlistId, dispatch]);

  const handlePlaylistDelete = () => {
    if (window.confirm('Are you sure you want to delete this playlist?')) {
      dispatch(deletePlaylist(playlistId)).then(() => {
        dispatch(fetchPlaylists());
        history.push('/');
      });
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setPlaylistDropdownOpen(false);
  };

  const handleSongDelete = (songId) => {
    const playlistSong = playlistSongs.find(
      (playlistSong) => playlistSong.songId === songId
    );
    dispatch(deletePlaylistSong(playlistId, playlistSong.id.toString()));
    dispatch(fetchPlaylist(playlistId))
  };
  

  const togglePlaylistDropdown = () => {
    setPlaylistDropdownOpen(!playlistDropdownOpen);
  };

  const toggleSongDropdown = (songId) => {
    if (selectedSongId === songId) {
      setSelectedSongId(null);
    } else {
      setSelectedSongId(songId);
    }
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
            {/* {songs?.map((song) => {
              {Object.values(albums).map((album) => (
                album.id === song.albumId && <img key={album.id} src={album.photoUrl} alt="" className="playlistHeaderPhoto"/>
              ))}
            })} */}
            <h1 className="newPlaylistTitle">{playlist?.title}</h1>
            <p className="newPlaylistDescription">{playlist?.description}</p>
          </div>
          <div className="playlistDropdownContainer">
            <i id="bigPlayButtonPlaylist" class="fa-solid fa-circle-play"></i>
            <button className="playlistDropdownButton" onClick={togglePlaylistDropdown}>
              <i id="dropdownPlaylist" class="fa-solid fa-ellipsis"></i>
            </button>
            {playlistDropdownOpen && (
              <div className="playlistDropdownContent">
                <button className="playlistDeleteButton" onClick={handlePlaylistDelete}>Delete</button>
                <button className="playlistEditButton" onClick={handleEdit}>Edit</button>
              </div>
            )}
          </div>
          <h1 className="playlistSongTitleHeader">TITLE</h1>
          <div className="playlistSongsList">
          {songs?.map((song) => {
            return (
              <div key={song.id} className="playlistSongObject">
                {Object.values(albums).map((album) => (
                  album.id === song.albumId && <img key={album.id} src={album.photoUrl} alt="" className="playlistSongPhoto"/>
                ))}
                <p className="songTitle">{song.title}</p>
                <div className="songDropdownContainer">
                  <button className="playlistDropdownButton" onClick={() => toggleSongDropdown(song.id)}>
                    <i id="dropdownPlaylist" class="fa-solid fa-ellipsis"></i>
                  </button>
                  {selectedSongId === song.id && (
                    <button className="deletePlaylistSong" onClick={() => handleSongDelete(song)}>Delete Song</button>
                  )}
                </div>
              </div>
            )
          })}
          </div>
        </>
      )}
    </div>
  );
};

export default PlaylistShow;
