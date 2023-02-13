import React, { useEffect, useState } from "react";
import AlbumItem from "./AlbumItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/album";
import './Albums.css'

function AlbumIndex() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);

    
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    return (
        <div className="albumIndex">
            <h1>Albums</h1>
                <div className="album-list">
                <>
                    {albums.map((album) => (
                    <AlbumItem
                    key={album.id}
                    album={album}/>
                    ))}
                </>
                </div>
        </div>
    )

};


export default AlbumIndex;