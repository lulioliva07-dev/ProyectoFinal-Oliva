import { useContext } from "react"
import cartContext from "../../context/cartContext"
import "../../styles/CartContainer.css";


export default function CartWidget(){
    const { countItems } = useContext(cartContext) 
    return(

    <div className="cart-item">
        <span> 🛒 {countItems()}</span>
    </div>

    )
}