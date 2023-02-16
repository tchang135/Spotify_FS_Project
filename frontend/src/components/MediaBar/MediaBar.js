import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '../../store/currentSong';
import "./MediaBar.css"
const MediaBar = () => {

    const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.currentSong)
    // const currentSong = useSelector((state) => state.id[currentSongId])
    const currentAlbumSongs = useSelector(({ currentAlbum }) => {
        return currentAlbum.id ? Object.values(currentAlbum.songs) : []
    });

    if (!currentSong 
        // ||
        //  !currentSongId
         ) {
        return null
    }

    // const handleClickNext = () => {
    //     const songId = currentSongId < currentAlbumSongs.length - 1 ? currentSongId + 1 : 0;
    //     dispatch(setCurrentSong(songId));
    // };

    // const handleClickPrevious = () => {
    //     const songId = currentSongId > 0 ? currentSongId - 1 : currentAlbumSongs.length - 1;
    //     dispatch(setCurrentSong(songId));
    // };



    return (
        <AudioPlayer
        className="songbar"
        src={currentSong}
        showSkipControls
        // onClickNext={handleClickNext}
        // onClickPrevious={handleClickPrevious}
        // onEnded={handleClickNext}
        showFilledVolume
        />
    )
};

export default MediaBar;