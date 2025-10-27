//import products from "../data/products"
import Item from "../ItemListContainer/Item";
import { getProducts, getProductsByCateg } from "../../data/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/Item.css";



export default function ItemListContainer({greeting}){
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const {categParam} = useParams();


    useEffect( () => {
    setIsLoading(true)
    
        if (categParam){
            getProductsByCateg(categParam)
            .then(productsByCateg  => setProducts(productsByCateg))
            .catch(error => alert(error))
            .finally( () => setIsLoading(false))
        }
        
        else{
        getProducts()
        .then( (productList) => {
            console.log("Promesa terminada")
            setProducts(productList);
        })
        .catch( (error) => {
            console.error("Error solicitando los datos", error);
            alert("Algo salió mal buscando los productos")
        } )
        .finally ( () => {
            console.log("Esto se ejecuta siempre")
            setIsLoading(false)
        })
        }
    }, [categParam])

    
    return(
        <div className="item-list-container">
        <div>
            <div>
            <h2 className="item-list-container-title">{greeting}</h2>
            
            { isLoading 
               ? <p className="item-list-container__loading">Cargando...</p> 
               : ""
            }
            <h4 className="item-list-container">Productos premium en tecnología</h4>
            <div className="item-list">
            
            {
                products.map(item => <Item key={item.id} {...item}/>)
            }
            </div>
            </div>
        </div>
        </div>
    )
}

