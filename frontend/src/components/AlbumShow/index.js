import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbum } from '../../store/album';
import './AlbumShow.css'
import { useDispatch, useSelector } from 'react-redux';


function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const album = useSelector(state => {
        return state.albums[albumId]
    })
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
                    <p className='publishedYear'>{album.publishedDate}</p>
                    <p className='artistName'>{artist.name}</p> 
                    <p class="artistDescription">{artist.description}</p>
                </div>

            </div>
            <div className='albumSongs'>
                <ul className='songList'>
                    {songs.map((song) => {
                        return (
                    <li className="song" key={song.id}>    
                        <p id="songTitle"> {song.title} </p>
                        <p id="artistName"> {artist.name} </p>
                        <p id="songLength"> Length </p>
                    </li>  
                        )
                    })}
                </ul>
            </div> 
        </div>
    )
};

export default AlbumShowPage;