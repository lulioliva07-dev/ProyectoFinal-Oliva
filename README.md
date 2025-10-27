# Proyecto Final iTrendStore

**iTrend Store** es una aplicación web desarrollada en **React** que simula una tienda en línea de accesorios tecnológicos para iPhone.  
Permite navegar por un catálogo de productos, ver los detalles de cada artículo, agregar productos al carrito, y simular el proceso de compra con almacenamiento de datos en **Firebase**.



# Descripción 

El proyecto fue desarrollado como parte del trabajo final para el curso realizado en la academia **Coderhouse** y tiene como objetivo representar de forma práctica el funcionamiento de un **e-commerce** moderno.  
La aplicación busca ofrecer una **experiencia de usuario fluida y visualmente atractiva**, con una estructura modular y componentes reutilizables de React.

iTrend Store fue pensada ya que es mi **emprendimiento personal** el cual venia pensando en poder hacerle una página web y aproveche en realizarla para este proyecto y poner en práctica lo aprendido, está dedicado a la venta de accesorios tecnológicos, adaptado al estilo y estética de la marca.

## Tecnologías utilizadas

-   **React.js** → para la construcción de la interfaz y el manejo de componentes.
    
-   **Firebase Firestore** → para la gestión de productos y almacenamiento de órdenes.
    
-   **CSS3** → para los estilos personalizados de cada componente.
    
-   **Git y GitHub** → para control de versiones y publicación del proyecto.
    
-   **Vite** → como entorno de desarrollo rápido y liviano para React.

## Estructura del proyecto

src/
├── assets/
│   └── img/
│       └── logo.jpg
├── components/
│   ├── Cart/
│   │   ├── CartContainer.jsx
│   │   ├── FormCheckout.jsx
│   ├── ItemDetailContainer/
│   │   └── ItemDetailContainer.jsx
│   ├── ItemListContainer/
│   │   ├── Item.jsx
│   │   └── ItemListContainer.jsx
│   ├── NavBar/
│   │   ├── NavBar.jsx
│   │   └── CartWidget.jsx
│   ├── ButtonAddToCart.jsx
│   └── StateComponent.jsx
├── context/
│   └── cartContext.jsx
├── data/
│   ├── firebase.js
│   └── products.js
├── styles/
│   ├── CartContainer.css
│   ├── Item.css
│   ├── ItemDetail.css
│   └── NavBar.css
├── App.jsx
├── main.jsx

## Instalación y ejecución 

- Clonar el repositorio:

    $ git clone https://github.com/lulioliva07-dev/ProyectoFinal-Oliva
    $ cd **[ProyectoFinal-Oliva](https://github.com/lulioliva07-dev/ProyectoFinal-Oliva)**
    $ npm install
    $ npm run dev

## Funcionalidades principales

-   Visualización del catálogo de productos.
    
-   Detalle individual de cada producto.
    
-   Agregar o quitar productos del carrito.
    
-   Cálculo automático del sub total y total de la compra.
    
-   Generación de orden de compra almacenada en Firebase.
    
-   Validación de stock disponible antes de confirmar la compra.
    
-   Interfaz limpia, responsive y adaptable a dispositivos móviles.

## Decisiones de desarrollo

-   La aplicación se estructuró en carpetas claras (components, context, data, styles) para mantener la escalabilidad y orden.
    
-   Se aplicaron estilos personalizados con **CSS** para mantener la identidad visual de la marca iTrend Store.
    
-   Se usó **Vite** por su rapidez y compatibilidad con proyectos modernos de React.


# Autora


**Lucila Oliva**  
Proyecto académico para Coderhouse y emprendimiento personal: _iTrend Store_



