

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import csrfFetch from "../../store/csrf";

function AlbumItem( { album } ) {
    const { title, artistId } = album;
    const history = useHistory(); 

    const [artist, setArtist] = useState("");

    useEffect(() => {
        csrfFetch(`/api/artists/${artistId}`)
        .then(res => res.json())
        .then(data => setArtist(data.name))
    }, [artistId])


    return (
        <div onClick={(e) => history.push(`/albums/${album.id}`)}>
            <div className="">
                <p className="albumTitle">{title}</p>
                <p className="artistName">{artist}</p>
            </div>
        </div>
    )
};

export default AlbumItem;