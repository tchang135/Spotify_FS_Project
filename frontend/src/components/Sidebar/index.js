import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo.JPG';
import './Sidebar.css'


const Sidebar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const session = useSelector(state => state.session ? state.session : {});


    if (location.pathname === '/signup' || location.pathname === '/login') {
        return null;
    } else {
        return (
            <nav className="sidebar">
                <div className="logoDiv" onClick={(e) => history.push(`/`)}>
                    {/* <img id="sideImg"src={logo} alt=""/> */}
                </div>
                <div className="sidebarLinks">
                    <div className="homeButton" onClick={(e) => history.push(`/`)}>
                        <i class="fa-solid fa-house"></i>
                        <p className="homeText">Home</p>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Sidebar;