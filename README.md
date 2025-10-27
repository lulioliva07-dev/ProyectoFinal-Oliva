<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="proyecto-final-itrendstore">Proyecto Final iTrendStore</h1>
<p><strong>iTrend Store</strong> es una aplicación web desarrollada en <strong>React</strong> que simula una tienda en línea de accesorios tecnológicos para iPhone.<br>
Permite navegar por un catálogo de productos, ver los detalles de cada artículo, agregar productos al carrito, y simular el proceso de compra con almacenamiento de datos en <strong>Firebase</strong>.</p>
<h1 id="descripción">Descripción</h1>
<p>El proyecto fue desarrollado como parte del trabajo final para el curso realizado en la academia <strong>Coderhouse</strong> y tiene como objetivo representar de forma práctica el funcionamiento de un <strong>e-commerce</strong> moderno.<br>
La aplicación busca ofrecer una <strong>experiencia de usuario fluida y visualmente atractiva</strong>, con una estructura modular y componentes reutilizables de React.</p>
<p>iTrend Store fue pensada ya que es mi <strong>emprendimiento personal</strong> el cual venia pensando en poder hacerle una página web y aproveche en realizarla para este proyecto y poner en práctica lo aprendido, está dedicado a la venta de accesorios tecnológicos, adaptado al estilo y estética de la marca.</p>
<h2 id="tecnologías-utilizadas">Tecnologías utilizadas</h2>
<ul>
<li>
<p><strong>React.js</strong> → para la construcción de la interfaz y el manejo de componentes.</p>
</li>
<li>
<p><strong>Firebase Firestore</strong> → para la gestión de productos y almacenamiento de órdenes.</p>
</li>
<li>
<p><strong>CSS3</strong> → para los estilos personalizados de cada componente.</p>
</li>
<li>
<p><strong>Git y GitHub</strong> → para control de versiones y publicación del proyecto.</p>
</li>
<li>
<p><strong>Vite</strong> → como entorno de desarrollo rápido y liviano para React.</p>
</li>
</ul>
<h2 id="estructura-del-proyecto-----src-----├──-assets-----│-└──-img-----│-└──-logo.jpg-----├──-components-----│-├──-cart-----│-│-├──-cartcontainer.jsx-----│-│-├──-formcheckout.jsx-----│-├──-itemdetailcontainer-----│-│-└──-itemdetailcontainer.jsx-----│-├──-itemlistcontainer-----│-│-├──-item.jsx-----│-│-└──-itemlistcontainer.jsx-----│-├──-navbar-----│-│-├──-navbar.jsx-----│-│-└──-cartwidget.jsx-----│-├──-buttonaddtocart.jsx-----│-└──-statecomponent.jsx-----├──-context-----│-└──-cartcontext.jsx-----├──-data-----│-├──-firebase.js-----│-└──-products.js-----├──-styles-----│-├──-cartcontainer.css-----│-├──-item.css-----│-├──-itemdetail.css-----│-└──-navbar.css-----├──-app.jsx-----├──-main.jsx">Estructura del proyecto     src/     ├── assets/     │ └── img/     │ └── logo.jpg     ├── components/     │ ├── Cart/     │ │ ├── CartContainer.jsx     │ │ ├── FormCheckout.jsx     │ ├── ItemDetailContainer/     │ │ └── ItemDetailContainer.jsx     │ ├── ItemListContainer/     │ │ ├── Item.jsx     │ │ └── ItemListContainer.jsx     │ ├── NavBar/     │ │ ├── NavBar.jsx     │ │ └── CartWidget.jsx     │ ├── ButtonAddToCart.jsx     │ └── StateComponent.jsx     ├── context/     │ └── cartContext.jsx     ├── data/     │ ├── firebase.js     │ └── products.js     ├── styles/     │ ├── CartContainer.css     │ ├── Item.css     │ ├── ItemDetail.css     │ └── NavBar.css     ├── App.jsx     ├── main.jsx</h2>
<h2 id="instalación-y-ejecución">Instalación y ejecución</h2>
<ul>
<li>
<p>Clonar el repositorio:</p>
<p>$ git clone <a href="https://github.com/lulioliva07-dev/ProyectoFinal-Oliva">https://github.com/lulioliva07-dev/ProyectoFinal-Oliva</a><br>
$ cd <strong><a href="https://github.com/lulioliva07-dev/ProyectoFinal-Oliva">ProyectoFinal-Oliva</a></strong><br>
$ npm install<br>
$ npm run dev</p>
</li>
</ul>
<h2 id="funcionalidades-principales">Funcionalidades principales</h2>
<ul>
<li>
<p>Visualización del catálogo de productos.</p>
</li>
<li>
<p>Detalle individual de cada producto.</p>
</li>
<li>
<p>Agregar o quitar productos del carrito.</p>
</li>
<li>
<p>Cálculo automático del sub total y total de la compra.</p>
</li>
<li>
<p>Generación de orden de compra almacenada en Firebase.</p>
</li>
<li>
<p>Validación de stock disponible antes de confirmar la compra.</p>
</li>
<li>
<p>Interfaz limpia, responsive y adaptable a dispositivos móviles.</p>
</li>
</ul>
<h2 id="decisiones-de-desarrollo">Decisiones de desarrollo</h2>
<ul>
<li>
<p>La aplicación se estructuró en carpetas claras (components, context, data, styles) para mantener la escalabilidad y orden.</p>
</li>
<li>
<p>Se aplicaron estilos personalizados con <strong>CSS</strong> para mantener la identidad visual de la marca iTrend Store.</p>
</li>
<li>
<p>Se usó <strong>Vite</strong> por su rapidez y compatibilidad con proyectos modernos de React.</p>
</li>
</ul>
<h1 id="autor">Autor</h1>
<p><strong>Lucila Oliva</strong><br>
Proyecto académico para Coderhouse y emprendimiento personal: <em>iTrend Store</em></p>
</div>
</body>

</html>
