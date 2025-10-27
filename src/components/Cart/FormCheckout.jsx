import { useState } from "react";
import "../../styles/CartContainer.css";

export default function FormCheckout(props){

    const [formData, setFormData] = useState({
        username: "", phone: "", email:""
    })

    function handleSubmit(event){
        event.preventDefault();
        props.handleCheckout(formData)
    }

    function handleInputChange(event){
        const value = event.target.value;
        const inputName = event.target.name;

        const newFormData = {...formData}
        newFormData[inputName] = value;
        setFormData(newFormData)
    }


    function resetForm(){
        setFormData({
            username: "", phone: "", email: ""
        })
    }

    return(
        <div className="checkout-form">
            <h4 className="checkout-form">Completa tus datos</h4>
            <form onSubmit={handleSubmit}>
                <label className="checkout-form-label">Nombre:
                    <br />
                    <input
                    value={formData.username}
                    onChange={handleInputChange} 
                    name="username" 
                    type="text" 
                    placeholder="Facundo"
                    required/>
                </label>

                <label className="checkout-form">Email:
                    <br />
                    <input 
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email" 
                    type="email" 
                    placeholder="mail@mail.com"
                    required/>
                </label>

                <label className="checkout-form">Telefono:
                    <br />
                    <input 
                    value={formData.phone}
                    onChange={handleInputChange}
                    name="phone" 
                    type="tel" 
                    placeholder="123"
                    required/>
                </label>

                <button type="submit">Enviar</button>
                <button type="button" onClick={resetForm}>Reiniciar formulario</button>
            </form>
        </div>
    );
}