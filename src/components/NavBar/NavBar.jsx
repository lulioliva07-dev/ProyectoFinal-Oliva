import { Link } from "react-router";
import CartWidget from "./CartWidget";
import logo from "../../assets/img/logo.jpg"
import "../../styles/NavBar.css";



export default function NavBar (){
    
    return (

    
<nav className="navbar">

<div className="navbar__container">
        <Link to="/" className="navbar__logo">
            
            <img src={logo} alt="Logo de la tienda" className="logo" />
            

        </Link>


        <ul className="navbar__links">
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

        </ul>

        <Link to="/cart" className="navbar__cart">
          <CartWidget />
        </Link>

</div>
        
</nav>
    
)}