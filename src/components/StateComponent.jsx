import {useState, useEffect} from "react"

export default function StateComponent(){
    const [color , setColor] = useState ("#000000");
    console.log("Renderizando State Comp");


    useEffect( ()=>{
    /*tarea complejas o delicadas
    Tareas de montaje*/
    console.warn("🛑Tarea compleja - conexión a Base de Datos")
    console.warn("🟨Acceso al DOM")
    }, [] )
    //[]=> tareas a ejecutar solo en el montaje 

    return(
        <div>
            <p>Selecciona tu color - Color Activo: 
                <span style={{display: "inline-block", width: "12px", height:"12px", backgroundColor: color}}></span>
            </p>

            <button onClick={ () => setColor("#000000")}>Negro</button>
            <button onClick={ () => setColor("#3972f5ff")}>Azul</button>
            <button onClick={ () => setColor("#ea0f0fff")}>Rojo</button>
        </div>
    )
}