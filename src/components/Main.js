import { useState } from "react"

function Main() {

    let [show,setShow] = useState(false) 

    const toggleMenu = () => {
        setShow(!show) // ! cambia el valor de la variable a su opuesto 
    };                 //  (de false a true)
    
    if (show) {
        return (
            <main>
                <button onClick={toggleMenu} className="bg-sky-500 hover:bg-sky-700 rounded-full">toggle menu</button>
            </main>
        )
    } else {
        return (
            <main>
                <button onClick={toggleMenu} className="bg-sky-500 hover:bg-sky-700 rounded-full">toggle menu</button>
                <ul>
                    <li>home</li>
                    <li>store</li>
                    <li>fyq</li>
                </ul>
            </main>
        )
    };
}

export default Main





    // // let nombre = prompt("Escriba su nombre completo.")
    // return (
    //     <>
    //     <main className=" grow p-2 text-6xl text-white">
    //         <h2>Home</h2>
    //         <h1>Bienvenido {/* {nombre} */}</h1> 
    //     </main>
    //     </>