import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, deletePlaylist, fetchPlaylists } from "../../store/playlist";
import { fetchAlbums } from "../../store/album";
import { fetchArtists } from "../../store/artist";
import { setCurrentSong } from "../../store/currentSong";
import { fetchSongs } from "../../store/song";
import { deletePlaylistSong } from "../../store/playlistSong";
import PlaylistEdit from "../PlaylistEdit";
import './PlaylistShow.css';

const PlaylistShow = () => {
  const { playlistId } = useParams();
  const allSongs = useSelector((state) => state.songs)
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  const artists = useSelector((state) => state.artist)
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
  const [songListUpdated, setSongListUpdated] = useState(false);


  const getAlbumById = (id) => {
    return Object.values(albums).find((album) => album.id === id);
  };

  const getAlbumsForHeaderPhoto = (allSongs) => {
    const albumsForSongs = [];
    for (let i = 0; i < songs.length; i++) {
      const album = getAlbumById(songs[i].albumId);
      if (album && !albumsForSongs.includes(album)) {
        albumsForSongs.push(album);
      }
      if (albumsForSongs.length === 4) {
        break;
      }
    }
    if (albumsForSongs.length === 4) {
      return albumsForSongs;
    } else {
      return [albumsForSongs[0]];
    }
  };
  
  useEffect(() => {
    if (playlistId) {
      dispatch(fetchSongs());
      dispatch(fetchPlaylist(playlistId));
      dispatch(fetchAlbums());
      dispatch(fetchArtists())
    }
  }, [playlistId, dispatch, songListUpdated]);

  const handlePlaylistDelete = () => {
    if (window.confirm('Are you sure you want to delete this playlist?')) {
      dispatch(deletePlaylist(playlistId)).then(() => {
        history.push('/');
        dispatch(fetchPlaylists());
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
    dispatch(deletePlaylistSong(playlistId, playlistSong?.id.toString()));
    setSongListUpdated(!songListUpdated);
  };

  const handleSongPlay = (songId) => {
    dispatch(setCurrentSong(songId));
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
    return null
  }

  return (
    <div className="newPlaylistPage">
      {editMode ? (
        <PlaylistEdit playlistId={playlistId} setEditMode={setEditMode} />
      ) : (
        <>
          <div className="playlistHeaderSection">
            <div className="playlistHeaderPhotos">
              {getAlbumsForHeaderPhoto(allSongs).map((album) => (
                album && <img key={album.id} src={album.photoUrl} alt="" className="playlistHeaderPhotoObject"/>
              ))}
            </div>
            <div className="playlistHeadingWords">
              <h1 className="newPlaylistTitle">{playlist?.title}</h1>
              <p className="newPlaylistDescription">{playlist?.description}</p>
            </div>
          </div>
          <div className="playlistDropdownContainer">
            <i id="bigPlayButtonPlaylist" class="fa-solid fa-circle-play" key={songs[0]?.url} onClick={() => handleSongPlay(songs[0].url)}></i>
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
              <div key={song.id} className="playlistSongObject" onClick={() => handleSongPlay(song.url)}>
                {Object.values(albums).map((album) => (
                  album.id === song.albumId && <img key={album.id} src={album.photoUrl} alt="" className="playlistSongPhoto"/>
                ))}
                <div className="playlistSongsWords">
                  <p className="playlistSongTitle">{song.title}</p>
                  {Object.values(artists).map((artist) => (
                    artist.id === song.artistId && <p className="playlistSongArtist">{artist.name}</p>
                  ))}
                </div>
                <div className="songDropdownContainer">
                  <button className="songDropdownButton" onClick={() => toggleSongDropdown(song.id)}>
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                  {selectedSongId === song.id && (
                    <button className="deletePlaylistSong" onClick={() => handleSongDelete(song.id)}>Delete Song</button>
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
