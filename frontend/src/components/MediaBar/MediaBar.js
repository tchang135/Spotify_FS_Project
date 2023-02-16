import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '../../store/currentSong';

const MediaBar = ({ songUrl }) => {

    const dispatch = useDispatch();
    const currentSongId = useSelector((state) => state.currentSong)
    const currentAlbumSongs = useSelector(({ currentAlbum }) => {
        return currentAlbum.id ? Object.values(currentAlbum.songs) : []
    });


    const handleClickNext = () => {
        const songId = currentSongId < currentAlbumSongs.length - 1 ? currentSongId + 1 : 0;
        dispatch(setCurrentSong(songId));
    };

    const handleClickPrevious = () => {
        const songId = currentSongId > 0 ? currentSongId - 1 : currentAlbumSongs.length - 1;
        dispatch(setCurrentSong(songId));
    };



    return (
        <AudioPlayer
        showSkipControls
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleClickNext}
        showFilledVolume
        
        />
    )
};

export default MediaBar;