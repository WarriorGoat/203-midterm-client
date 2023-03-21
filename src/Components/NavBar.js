import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className = "nav-bar">
            <h2>Blogger 2.0 </h2>
            <Link to="/"> Home   </Link> 
            <Link to="/list"> List All   </Link>
            <Link to="/blog-form"> Create New </Link>
        </div>
    )
}
export default NavBar;