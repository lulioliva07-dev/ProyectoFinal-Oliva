//import products from "../data/products"
import Item from "./Item";
import getMockAPIData, { getProductsByCateg } from "../data/mockAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import './ItemListContainer.css'

export default function ItemListContainer({greeting}){
    //1. useState para guardar el listado de items
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const {categParam} = useParams();


    useEffect( () => {
    setIsLoading(true)
    //2. useEffect para controlar la peticion de datos a la API (mockAPI)
        if (categParam){
            getProductsByCateg(categParam)
            .then(productsByCateg  => setProducts(productsByCateg))
            .catch(error => alert(error))
            .finally( () => setIsLoading(false))
        }
        //3. fetch o solicitud simulada / montaje
        else{
        getMockAPIData()
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
        /*Promise.then() cuando la promesa se cumpla*/
        /*Promise.catch() cuando la promesa rechaza (error)*/
        }
    }, [categParam])

    
    return(
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {/*renderizado condicional*/}
            { isLoading 
               ? <p className="item-list-container__loading">Cargando...</p> 
               : ""
            }
            <h4>Nuestros productos</h4>
            <div className="item-list">
            
            {
                products.map(
                    item => <Item key={item.id} {...item}/>
                    //spread
                )
            }
            </div>
        </div>
    )
}


//abirmos llaves dentro del jsx para meter jsript 
// luego si ingreso jsx dentro de js abro llaves de nuevo