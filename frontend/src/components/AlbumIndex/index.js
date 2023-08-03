import React, { useEffect} from "react";
import AlbumItem from "./AlbumItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/album";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Change the number of visible albums as per your preference
        slidesToScroll: 1,
    };


    return (
        <div className="albumIndex">
            <Slider {...carouselSettings}>
                
            </Slider>
            <h1 id="indexAlbumText">Albums</h1>
                <div className="albumList">
                <>
                    {albums.map((album) => (
                    <AlbumItem
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