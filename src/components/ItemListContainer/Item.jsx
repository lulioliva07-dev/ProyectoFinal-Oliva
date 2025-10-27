import { Link } from 'react-router';
import StateComponent from '../StateComponent';
import "../../styles/Item.css";



export default function Item( {id, title, img, price} ){

    return(
        <section className='contenedor-cards'>
        <div className="item-card">
            <h2 className="item-card-title">{title}</h2>
            <img className="item-card-img"
            height="300"
            src={img} 
            alt={title}
            />
            <h3 className="item-card-price">Precio: ${price}</h3>
            <StateComponent/>
            <div style={{textAlign:"center"}}>
                <Link to={ `/detalle/${id}` }>
                  <button>Ir a ver detalle</button>
                </Link>
            </div>
            
        </div>
        </section>
    )
}
