import { useHistory, useLocation } from "react-router-dom";
import InvertLogo from '../images/InvertLogo.jpeg';
import CreatePlaylistButton from "../PlaylistCreate";
import PlaylistIndex from "../PlaylistIndex";
import './Sidebar.css'


const Sidebar = () => {
    const location = useLocation();
    const history = useHistory();




    if (location.pathname === '/signup' || location.pathname === '/login') {
        return null;
    } else {
        return (
            <nav className="sidebar">
                <div className="logoDiv" onClick={(e) => history.push(`/`)}>
                    <img id="invertImg"src={InvertLogo} alt=""/>
                </div>
                <div className="sidebarLinks">
                    <div className="homeButton" onClick={(e) => history.push(`/`)}>
                        <i id="homeImage" class="fa-solid fa-house"></i>
                        <p className="homeText">Home</p>
                    </div>
                    <div className="searchButton" onClick={(e) => history.push(`/search`)}>
                        <i id="searchImage" class="fa-solid fa-magnifying-glass"></i>
                        <p className="searchText">Search</p>
                    </div>
                    <CreatePlaylistButton />
                    <div className="thin-line"></div> 
                    <PlaylistIndex />
                </div>
            </nav>
        )
    }
}

export default Sidebar;