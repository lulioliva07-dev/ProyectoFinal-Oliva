import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route  } from 'react-router';
import { CartProvider } from './context/cartContext';
import CartContainter from './components/Cart/CartContainer';
import app, { getProducts } from '../src/data/firebase';
import CartContainer from "./components/Cart/CartContainer";


export default function App() {

console.log("Init Firebase", app)
getProducts();



return(
  <CartProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer greeting="Bienvenido a Itrend Store"/>} />
        <Route path='/category/:categParam' element={<ItemListContainer/>} />
        <Route path='/detalle/:idParam' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartContainer/>} />
        <Route path='*' element={<h1>404: Página no encontrada</h1>} />
      </Routes>

    </BrowserRouter>
  </CartProvider>
)}

