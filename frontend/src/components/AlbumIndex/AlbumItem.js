import React from "react";
import { useHistory } from "react-router-dom";


function AlbumItem( { album } ) {
    const { title } = album;
    const history = useHistory(); 

    // const [artist, setArtist] = useState("");




    return (
        <div onClick={(e) => history.push(`/albums/${album.id}`)}>
            <div className="">
                <p className="albumTitle">{title}</p>
                {/* <p className="artistName">{artist}</p> */}
            </div>
        </div>
    )
    
};

export default AlbumItem;