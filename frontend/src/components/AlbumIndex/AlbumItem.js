import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAlbum } from "../../store/album";
import { useDispatch } from "react-redux";


function AlbumItem( { album } ) {
    const { title } = album;
    const history = useHistory(); 
    const dispatch = useDispatch();
    const artist = useSelector(state => {
        // debugger
        if (state.artist) {
            // debugger
            return state.artist[album.artistId] 
        }  else { 
            return null
        }
        
    })

    useEffect(() => {
        dispatch(fetchAlbum(album.id))
    }, [dispatch])

    // debugger
    // const [artist, setArtist] = useState("");
    if (!artist) {
        return null
    }

    // debugger

    return (
        <div onClick={(e) => history.push(`/albums/${album.id}`)}>
            <div className="albumItem">
                <img id="albumPhoto" src={album.photoUrl} alt=""/>
                <p className="albumTitle">{title}</p>
                <p className="artistName">{artist.name}</p>
            </div>
            <p className="spacer"></p>
        </div>
    )
    
};

export default AlbumItem;