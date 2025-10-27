import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { createOrder, updateProductStock } from "../../data/firebase";
import FormCheckout from "./FormCheckout";
import "../../styles/CartContainer.css";


export default function CartContainer(){
const {cartItems, removeItem, clearCart, calculateTotalPrice, removeItemCompleto, addToCart} = useContext(cartContext)
const total = calculateTotalPrice();




async function handleCheckout(formData){

    const orderData = { 
    buyer: formData,
    items: cartItems,
    price: total,
    date: new Date()
    }

    console.log("llamando a firebase, datos del comprador", formData)

    const newOrder = await createOrder(orderData);

    for (const item of cartItems){
        const currentStock = item.stock;
        const newStock = currentStock - item.count;

        await updateProductStock(item.id, newStock);
    }

    clearCart();
    alert(`Compra realizada con exito! - tu id de compra es: ${newOrder.id}`)
    }

      // Renderizado condicional
    if (cartItems.length === 0) {
       return (
          <div className="cart-container">
          <h3>Tu carrito</h3>
          <p className="empty-cart">El carrito está vacío</p>
          </div>
        );
    }

    return(
        <div className="cart-container">
            <h3>Tu carrito</h3>

            <div>
                {
                    cartItems.map((item => 
                    <div className="cart-item" key={item.id}>
                        <img width="100" src={item.img} alt="{item.title}"/>
                        <div className="cart-item-info">
                        <h4>{item.title}</h4>
                        <p>Unidades: {item.count}</p>
                        <p>SubTotal: $ {item.price * item.count}</p>
                        <div className="cart-buttons">

                           <button onClick={() => removeItem(item.id)}>-</button>

                           <button onClick={() => addToCart(item)}>+</button>
                        </div>
                        </div>
                        <button className="remove-btn" onClick={ () => removeItemCompleto(item.id) }>Quitar del carrito</button>

                        
                    
                    </div>
                    ))}
            </div>

            <div className="cart-total">
                <span>Total de tu compra:</span> 
                <span>${total}</span>

            </div>
            <FormCheckout handleCheckout={handleCheckout}/>
        </div>

    )

}