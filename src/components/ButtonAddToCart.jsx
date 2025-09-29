//estado de componentes
import { useState } from "react";

export default function ButtonAddToCart(){
    //let statusInCart = "No agregaste este item al carrito."
    let [statusInCart, setStatusInCart] = useState("No agregaste este item al carrito.")


    function handleClick(){
        alert("Gracias por agregarme al carrito")
        //MAL statusInCart = "Item agregado al carrito!"
        setStatusInCart("Item agregado al carrito!")
    }

    return (
        //pasamos como event handle SOLO el nombre de la funcion.
        <div>
            <button onClick={handleClick}>Agregar al carrito</button>
            <br/>
            <small>{statusInCart}</small>
        </div>
    )
}

