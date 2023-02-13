import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo.JPG';
import './Sidebar.css'


const Sidebar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(state => state.session ? state.session : {});



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

export default Sidebar;