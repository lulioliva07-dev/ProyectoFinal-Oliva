import { Link } from "react-router";
import StateComponent from "../StateComponent";
import { useParams } from "react-router";
import { getProductById } from "../../data/firebase";
import { useEffect, useState, useContext } from "react";
import cartContext from "../../context/cartContext";
import "../../styles/ItemDetail.css"


export default function ItemDetailContainer(){

    const { idParam } =  useParams();
    const [product,setProduct] = useState( { loading: true} );
    const context = useContext(cartContext);
    const [addedToCart, setAddedToCart] = useState(false);
    
    useEffect( () => {
        getProductById(idParam)
        .then( response => setProduct(response))   
        .catch(error => setProduct({ error: true }));
    }, [])

    
    if (product.loading) return <p>Cargando...</p>;
    if (product.error) return <p>Producto no encontrado</p>;

    function handleAddToCart(){
        context.addToCart(product);
        setAddedToCart(true)
    }

    return (
    <div className="item-card-detail">
  
        <img
        className="item-card-img"
        height="800"
        src={product.img}/>

        <div className="item-card-content">
        <h2 className="item-card-title">{product.title}</h2>
        <h3 className="item-card-price">Precio: $ {product.price}</h3>
        <p>{product.description}</p>

        <StateComponent />
       

        
            {product.stock > 0 ? (
            addedToCart ? (
            
            <div className="after-add">
              <p>✅ Producto agregado correctamente</p>
              <Link to="/cart">
                <button className="item-card-button">Ir al carrito 🛒</button>
              </Link>
              <Link to="/">
                <button className="item-card-button">Seguir comprando</button>
              </Link>
            </div>
          ) : (
            
            <button
              className="item-card-button"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          )
        ) : (
          <span style={{ color: "red", fontWeight: "bold" }}>Sin stock</span>
        )}
      </div>
    </div>
    
    )}


