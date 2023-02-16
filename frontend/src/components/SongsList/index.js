import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MediaBar from '../MediaBar/MediaBar';
import './SongsList.css'

const SongList = () => {
    const { albumId } = useParams();

    const album = useSelector(state => {
        return state.albums[albumId]
    });

    const artist = useSelector(state => {
        const artistArr = Object.values(state.artist)
        for (let i = 0; i < artistArr.length; i++) {
          const currentArtist = artistArr[i]
          if (currentArtist.id === album.artistId) {
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
          if (currentSong.albumId === album.id) {
            final.push(currentSong)
          }
        }
        return final
      });

    const [selectedSongUrl, setSelectedSongUrl] = useState(null);

    const handleSongClick = (songUrl) => {
      setSelectedSongUrl(songUrl);
    };
  
    return (
      <div className="songList">
        {songs.map((song) => (
          <div id="songItem" key={song.url} onClick={() => handleSongClick(song.url)}>
            <p id="songColumn">{song.title}</p>   
            <p id="songColumn">{artist.name}</p>
          </div>
        ))}
        {/* {selectedSongUrl && (
          <MediaBar
            songUrl={selectedSongUrl}
          />
        )} */}
      </div>
    );
  };
  
  export default SongList;