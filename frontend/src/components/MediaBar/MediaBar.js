import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

const MediaBar = ({ songTitle, artist, albumArt, progress, isPlaying, onPlayPause, onNext, onPrev }) => {
  const [currentSong, setCurrentSong] = useState(0);
  const playlist = {}

  const playNextSong = () => {
    setCurrentSong((currentSong + 1) % playlist.length);
  };

  const playPrevSong = () => {
    setCurrentSong((currentSong + playlist.length - 1) % playlist.length);
  };

  const togglePlayPause = () => {
    onPlayPause(!isPlaying);
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => (prevProgress + 100 / playlist[currentSong].duration) % 100);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, currentSong]);

  
    return (
        <div className="media-bar">
        {/* <img src={albumArt} alt="Album Art" /> */}
        <div className="media-info">
            {/* <span className="song-title">{songTitle}</span>
            <span className="artist">{artist}</span> */}
        </div>
        <div className="media-progress">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        </div>
    );
    }

export default MediaBar;