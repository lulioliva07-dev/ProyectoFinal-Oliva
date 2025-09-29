import { Link } from "react-router";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import logo from "../assets/img/logo.jpg";



export default function NavBar (){
    
    return (

    
    <nav className="nav-bar">
        <Link to="/">
            <div className="logo-container">
                <img src={logo} alt="Logo de la tienda" className="logo" />
            </div>
        </Link>


        <ul className="nav-links">
            <li>
                <Link to="/category/fundas">
                Fundas
                </Link>
            </li>
            <li>
                <Link to="/category/cargadores">
                Cargadores
                </Link>
            </li>
            <li>
                <Link to="/category/soportes">
                Soportes
                </Link>
            </li>
            <li>
                <Link to="/category/ads">
                Accesorios
                </Link>
            </li>
        </ul>

        <Link to="/cart">
           <span> <CartWidget/> </span>
        </Link>
    </nav>
    
    )
}