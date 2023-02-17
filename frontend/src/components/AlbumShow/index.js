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


    useEffect(() => {
        dispatch(fetchAlbum(albumId))
    }, [dispatch]);
   

    if (!album || !artist) {
        return null
    } 


    

    return (
        <div className='albumShow'>
            <div className='albumDescription'>
                <div className='album'>
                    <img src={album.photoUrl} alt="" className="albumShowPhoto"/>
                    <div classname="albumArtistInfo">
                        <p className="albumHeaderTag">ALBUM</p>
                        <p className='albumShowTitle'>{album.title}</p>
                        <div className="artistNameAndYear">
                            <p className='albumShowArtistName'>{artist.name}</p> 
                            <p className='publishedYear'>{album.publishedDate}</p>     
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
};

export default AlbumShowPage;