import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '../../store/currentSong';
import { useLocation } from 'react-router-dom';
import "./MediaBar.css"
const MediaBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.currentSong)
    // const currentSong = useSelector((state) => state.id[currentSongId])
    const currentAlbumSongs = useSelector(({ currentAlbum }) => {
        return currentAlbum.id ? Object.values(currentAlbum.songs) : []
    });

    if (!currentSong) {
        return null
    }


    if (location.pathname === '/signup' || location.pathname === '/login') {
        return null;
    }

    return (
        <AudioPlayer
        className="songbar"
        src={currentSong}
        showSkipControls
        showFilledVolume
        />
    )
};

export default MediaBar;