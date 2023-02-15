import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbum } from '../../store/album';
import './AlbumShow.css'
import { useDispatch, useSelector } from 'react-redux';


function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const album = useSelector(state => state.albums[albumId])
    const artist = useSelector(state => {
        // state.artist[album.artistId])
        const final = []
        for (let i = 0; i < state.artist.length; i++) {
          const currentArtist = state.artist[i]
          if (currentArtist.id === album.artistId) {
            final.push(currentArtist)
          }
        }
        return final
      })
    const songs = useSelector(state => {
        const final = []
        for (let i = 0; i < state.songs.length; i++) {
          const currentSong = state.songs[i]
          if (currentSong.albumId === album.id) {
            final.push(currentSong)
          }
        }
        return final
      })

    useEffect(() => {
        dispatch(fetchAlbum(albumId))
    }, [dispatch]);
   

    if (!album) {
        return null
    } 
    

    return (
        <div className='albumShow'>
            <div className='albumDescription'>
                <div className='album'>
                    <p className='albumTitle'>{album.title}</p>
                    <p className='publishedYear'>{album.publishedYear}</p>
                    <p className='artistName'>{artist.name}</p> 
                </div>

            </div>
            <div className='albumSongs'>
                <ul className='songList'>
                    {songs.map((song) => {
                    <li className="song" key={song.id}>    
                        <p id="songTitle"> {song.title} </p>
                        <p id="artistName"> {artist.name} </p>
                        <p id="songLength"> Length </p>
                    </li>  
                    })}
                </ul>
            </div> 
        </div>
    )
};

export default AlbumShowPage;