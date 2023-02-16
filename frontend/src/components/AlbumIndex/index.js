import React, { useEffect} from "react";
import AlbumItem from "./AlbumItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/album";
import './AlbumIndex.css'

function AlbumIndex() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    // const artists = useSelector(state => state.artist ? Object.values(state.artist) : [] )
    

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    if (albums.length === 0 ) {
        return null
    } 


    return (
        <div className="albumIndex">
            <h1 id="indexAlbumText">Albums</h1>
                <div className="albumList">
                <>
                    {albums.map((album) => (
                    <AlbumItem
                    key={album.id}
                    album={album}
                    // artist={artist}
                     />
                    ))}
                    {/* <p className="albumPhoto">{artists.photo_url}</p> */}
                </>
                </div>
        </div>
    )
    
};


export default AlbumIndex;