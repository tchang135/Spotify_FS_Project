import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../store/currentSong';
import { createPlaylistSong } from '../../store/playlistSong';
import { useParams } from 'react-router-dom';
// import Select from 'react-select';
import './SongsList.css'

const SongList = () => {
    const { albumId } = useParams();
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
    const playlists = useSelector(state => state.playlists);
    const dispatch = useDispatch();
    const album = useSelector(state => {
        return state.albums[albumId]
    });

    const artist = useSelector(state => {
        const artistArr = Object.values(state.artist)
        for (let i = 0; i < artistArr.length; i++) {
          const currentArtist = artistArr[i]
          if (album && currentArtist.id === album.artistId) {
            return currentArtist
          }
        }
        return null
      })

    const songs = useSelector(state => {
        const final = [];
        const songsArr = Object.values(state.songs)
        for (let i = 0; i < songsArr.length; i++) {
          const currentSong = songsArr[i]
          if (album && currentSong.albumId === album.id) {
            final.push(currentSong)
          }
        }
        return final
      });

   

  const handleSongClick = (songId) => {
    dispatch(setCurrentSong(songId));
  };

  const handleAddSongToPlaylist = async (songId) => {
    if (!selectedPlaylistId) {
      return;
    }
  
    const playlistSong = {
      song_id: songId,
      playlist_id: selectedPlaylistId
    };
  
    dispatch(createPlaylistSong(playlistSong.playlist_id, playlistSong));
    setSelectedPlaylistId(null);
  };
  

    if (!songs || !artist) {
        return null
    }

  
    return (
      <>
        <div className="bigPlayButtonAlbum"key={songs[0].url} onClick={() => handleSongClick(songs[0].url)}>
          <i class="fa-solid fa-circle-play"></i>
        </div>
        <h1 className="titleHeader">TITLE</h1>
      
        <div className="songList">
        {songs.map((song) => (
          <div id="songItem" key={song.url} onClick={() => handleSongClick(song.url)}>
            <p id="albumShowSongTitle">{song.title}</p>
            <p id="albumShowArtistName">{artist.name}</p>
            <div className="playlist-dropdown">
              <select value={selectedPlaylistId} onChange={(e) => setSelectedPlaylistId(e.target.value)}>
                <option value="">Select a playlist</option>
                {Object.values(playlists).map((playlist) => (
                  <option key={playlist.id} value={playlist.id}>{playlist?.title}</option>
                ))}
              </select>
              <button onClick={() => handleAddSongToPlaylist(songs[0].id)}>Add to Playlist</button>
            </div>
          </div>
        ))}
        </div>
      </>
    );
  };
  
  export default SongList;