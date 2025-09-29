import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router';


//1. browserRouter como comp padre
//2. definir el area donde vamos a navegar con routes
//3. crear rutas como route definiendo el path (url) y el contenido

export default function App() {


  return(
    
    <BrowserRouter>
      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer greeting="Bienvenido a Itrend Store"/>} />
        <Route path='/category/:categParam' element={<ItemListContainer/>} />
        <Route path='/detalle/:idParam' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>404: Página no encontrada</h1>} />
      </Routes>

    </BrowserRouter>
  
)}


