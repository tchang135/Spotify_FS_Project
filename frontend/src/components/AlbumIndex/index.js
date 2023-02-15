import React, { useEffect} from "react";
import AlbumItem from "./AlbumItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/album";
import './AlbumIndex.css'

function AlbumIndex() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);

    
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    if (albums.length === 0) {
        return null
    } 

    return (
        <div className="albumIndex">
            <h1 id="indexAlbumText">Albums</h1>
                <div className="albumList">
                <>
                    {albums.map((album) => (
                    <AlbumItem
                    id="albumListItem"
                    key={album.id}
                    album={album}
                     />
                    
                    ))}
                </>
                </div>
        </div>
    )
    
};


export default AlbumIndex;