import { useHistory, useLocation } from "react-router-dom";
import InvertLogo from '../images/InvertLogo.jpeg';
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
                </div>
            </nav>
        )
    }
}

export default Sidebar;