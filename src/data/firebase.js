// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, query, where, getDoc, addDoc, getFirestore, updateDoc} from "firebase/firestore";
import products from "./products";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyMpcwcX7tqULh-mHJZzc8GzTcy_pMv_w",
  authDomain: "react-88075.firebaseapp.com",
  projectId: "react-88075",
  storageBucket: "react-88075.firebasestorage.app",
  messagingSenderId: "452956911827",
  appId: "1:452956911827:web:c8aa5c0d0a640643da3c26"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



export async function getProducts(){
    const productsRef = collection(db, "products");

    const productsSnapshot = await getDocs(productsRef);

    const documents = productsSnapshot.docs;

    const dataDocs = documents.map(item => {
       return { id: item.id, ...item.data() }
})

    return dataDocs
}




export async function getProductById(idParam){
    const docRef = doc(db, "products", idParam);
    const docSnapshot = await getDoc(docRef)

    if (!docSnapshot.exists()){
        return Promise.reject("Sección no encontrada");
    }


    const docData = docSnapshot.data();
    docData.id = docSnapshot.id

    return docData;
}

export async function getProductsByCateg(categParam){
       
    const productsRef = collection(db, "products");

    const queryCategory = query(productsRef, where("category", "==", categParam));
    const productsSnapshot = await getDocs(queryCategory);
    
    const documents = productsSnapshot.docs;

    const dataDocs = documents.map(item => {
      return { id: item.id, ...item.data() }
})

    return dataDocs
}

//crear una "orden" de compras en firebase
export async function createOrder(orderData){
 
    const orderRef = collection(db, "orders");
    const newDoc = await addDoc(orderRef, orderData)
    return newDoc;
}

export async function exportProductsData(){
    const productsRef = collection(db, "products")
    for (let item of products){
        delete item.id;
        const docCreated = await addDoc(productsRef,item)
        console.log("Creado el doc", docCreated.id)
    }
}

export async function updateProductStock(productId, newStock) {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, { stock: newStock });
}


export default app;