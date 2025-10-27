

const products = [
  {
    id: 1,
    title: "Funda Transparente iPhone 14",
    img: "https://http2.mlstatic.com/D_NQ_NP_691452-MLA73312515919_122023-O.webp",
    description: "Protección ligera y resistente con acabado transparente.",
    price: 25.99,
    stock: 50,
    category: "fundas"
  },
  {
    id: 2,
    title: "Funda de Silicona Negra iPhone 13",
    img: "https://m.media-amazon.com/images/I/51mntuLCp5L.jpg",
    description: "Diseño minimalista, suave al tacto y resistente a golpes.",
    price: 29.99,
    stock: 40,
    category: "fundas"
  },
  {
    id: 3,
    title: "Cargador Rápido 20W USB-C",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I0Bm4xfs6VUW5bweg3Kj9-h4e0YjuQnW7Q&s",
    description: "Carga tu iPhone al 50% en 30 minutos con este adaptador.",
    price: 34.99,
    stock: 30,
    category: "cargadores"
  },
  {
    id: 4,
    title: "Cable Lightning Original 1m",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5bU17kR-2APbJGUcxwZ0uBdCSdjeU-3Kkg&s",
    description: "Cable oficial certificado MFi para sincronización y carga.",
    price: 19.99,
    stock: 100,
    category: "cables"
  },
  {
    id: 5,
    title: "Cable Lightning Reforzado 2m",
    img: "https://joinet-images-bucket.s3.us-east-1.amazonaws.com/wp-content/uploads/2025/07/FL-I02.2.webp",
    description: "Mayor resistencia y flexibilidad, ideal para uso diario.",
    price: 24.99,
    stock: 80,
    category: "cables"
  },
  {
    id: 6,
    title: "AirPods 2ª Generación",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYmEJUjF_vAYyBcdtd9kSxmBKV-C4RP9NmQ&s",
    description: "Auriculares inalámbricos con chip H1 y micrófono integrado.",
    price: 159.99,
    stock: 20,
    category: "auriculares"
  },
  {
    id: 7,
    title: "AirPods Pro",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BwW-_JzCxEd6IPgYyjdxJucE0OBhsfGKNA&s",
    description: "Cancelación activa de ruido y modo de sonido ambiente.",
    price: 249.99,
    stock: 15,
    category: "auriculares"
  },
  {
    id: 8,
    title: "Protector de Pantalla Vidrio Templado iPhone 14",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtMpC66l42m3eCtoo6YuBPqtdIDjQpihbfA&s",
    description: "Vidrio templado anti-rayaduras y alta transparencia.",
    price: 12.99,
    stock: 120,
    category: "protectores"
  },
  {
    id: 9,
    title: "Soporte Magnético para Auto",
    img: "https://acdn-us.mitiendanube.com/stores/288/942/products/2417-soporte-auto-celulares-para-rejilla-de-ventilacion-magnetico1-fd61eccd5dda883b1c16352792395117-640-0.jpg",
    description: "Soporte con imán potente para fijar tu iPhone en el auto.",
    price: 19.99,
    stock: 60,
    category: "soportes"
  },
  {
    id: 10,
    title: "Funda Antigolpes Transparente iPhone 12",
    img: "https://acdn-us.mitiendanube.com/stores/001/389/226/products/img_93941-a0046eaa7af86bf8b916794958740234-1024-1024.jpg",
    description: "Protección reforzada en esquinas con acabado cristalino.",
    price: 27.99,
    stock: 35,
    category: "fundas"
  },
  {
    id: 11,
    title: "Cargador Inalámbrico MagSafe",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2peLk45_G-xuNaW2fEDSWDLXP54_IyWeURA&s",
    description: "Carga inalámbrica rápida y segura para iPhone 12 o superior.",
    price: 49.99,
    stock: 25,
    category: "cargadores"
  },
  {
    id: 12,
    title: "Base de Carga 3 en 1",
    img: "https://http2.mlstatic.com/D_NQ_NP_933457-MLU76244160505_052024-O.webp",
    description: "Carga iPhone, Apple Watch y AirPods simultáneamente.",
    price: 79.99,
    stock: 2,
    category: "cargadores"
  },
  {
    id: 13,
    title: "Auriculares Lightning con Micrófono",
    img: "https://http2.mlstatic.com/D_NQ_NP_892245-MLA91470615378_092025-O.webp",
    description: "Auriculares conector Lightning y sonido estéreo.",
    price: 34.99,
    stock: 50,
    category: "auriculares"
  },
  {
    id: 14,
    title: "Anillo Soporte para iPhone",
    img: "https://http2.mlstatic.com/D_NQ_NP_790012-MLA72260147745_102023-O.webp",
    description: "Soporte giratorio y seguro para tu iPhone.",
    price: 9.99,
    stock: 75,
    category: "soportes"
  },
  {
    id: 15,
    title: "Funda de Cuero Marrón iPhone 13 Pro",
    img: "https://http2.mlstatic.com/D_NQ_NP_901930-MLA48637489086_122021-O.webp",
    description: "Elegante funda de cuero genuino con interior suave.",
    price: 59.99,
    stock: 22,
    category: "fundas"
  },
  {
    id: 16,
    title: "Funda Glitter Rosa iPhone 11",
    img: "https://slink.com.ar/wp-content/uploads/2021/07/D_825057-MLA40512047096_012020-F.jpg",
    description: "Funda con brillos y acabado glamoroso.",
    price: 19.99,
    stock: 40,
    category: "fundas"
  },
  {
    id: 17,
    title: "Adaptador Lightning a Jack 3.5mm",
    img: "https://http2.mlstatic.com/D_NQ_NP_770837-MLA88946517954_082025-O.webp",
    description: "Conecta auriculares tradicionales con conector 3.5mm.",
    price: 14.99,
    stock: 70,
    category: "adaptadores"
  },
  {
    id: 18,
    title: "Power Bank 10.000 mAh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIbg_KWkg5741SnIr_EMNXxscu5VhI62r8w&s",
    description: "Batería portátil de alta capacidad con salida USB-C.",
    price: 39.99,
    stock: 28,
    category: "baterias"
  },
  {
    id: 19,
    title: "Cable Trenzado Lightning 1.5m",
    img: "https://http2.mlstatic.com/D_NQ_NP_981606-MLA84343417954_052025-O.webp",
    description: "Cable reforzado con nylon trenzado para mayor durabilidad.",
    price: 21.99,
    stock: 65,
    category: "cables"
  },
  {
    id: 20,
    title: "Soporte de Escritorio Ajustable",
    img: "https://http2.mlstatic.com/D_NQ_NP_814448-MLA90029622625_082025-O.webp",
    description: "Base ajustable para videollamadas y visualización cómoda.",
    price: 29.99,
    stock: 33,
    category: "soportes"
  }
];

export default products;
