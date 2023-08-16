// import { useState } from "React"

function Ejemplos() {

    // let contador = 0 // variable normal
    let [contador,setContador] = useState(0) //variable reactiva

    const sumar = () => {
        // contador++
        setContador(contador + 1) // funcion que modifica el estado de la variable reactiva
        console.log(contador)
    };
    const restar = () => {
        setContador(contador - 1) 
    };
    const resetear = () => {
        setContador(0) 
    };

    return (
        <>
        <div>
            <p>contador: {contador}</p>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
            <button onClick={resetear}>resetear</button>
        </div>
        </>
    );
}

export default Ejemplos

//
// Acordarme de pasar este proyecto a carpeta de practica de react y 
// armar un archivo nuevo para ir armando mi proyecto personal.
//
// Ver como hacer un carrito con esta funcion.
//
