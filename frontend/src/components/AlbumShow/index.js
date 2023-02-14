import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { fetchAlbum } from '../../store/album';
import './AlbumShow.css'
import { useDispatch, useSelector } from 'react-redux';


function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const album = useSelector(state => state.albums[albumId] ? state.albums[albumId] : {})
    const [artistName, setArtistName] = useState("");
    const [songsList, setSongsList] = useState([]);
    const [songTitlesArr, setSongTitlesArr] = useState([]);

    useEffect(() => {
        dispatch(fetchAlbum(albumId)).then(res => {
            let data = res.payload.album;
            if (data.artist.name) {
                setArtistName(data.artist.name)
            }

            if (data.songs) {
                for (const [key, value] of Object.entries(data.songs)) {
                    if (!songTitlesArr.includes(value.title)) {
                        setSongsList((songsList) => [...songsList, value])
                        setSongTitlesArr((songTitlesArr) => [...songTitlesArr, value.title])
                    }
                }

            }
        })
    }, [albumId, dispatch])

        if (!album) {
            return null;
        }

        const { title, description, publishedYear } = album;




    // return (
    //     <div className='albumShow'>
    //         <div className='albumDescription'>

    //             <div className='album'>
    //                 <p className='album-title'>{title}</p>
    //                 <p className='publishedYear'>{publishedYear}</p>
    //                 <p className='artistName'>{artistName}</p>
                    
    //             </div>

    //         </div>
    //         <div className='albumSongs'>
    //             <ul className='songList'>
    //                 {songsList.map((song, idx) => {
    //                 <li className="song" key={song.id}>    
    //                     <p id="songTitle"> {song.title} </p>
    //                     <p id="artistName"> {artist.name} </p>
    //                     <p id="songLength"></p>
    //                 </li>  

    //                 })}
    //             </ul>
    //         </div>


    //     </div>
    // )
};

export default AlbumShowPage;