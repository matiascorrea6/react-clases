function Main(){
    let nombre = prompt("Escriba su nombre completo.")
    return (
        <>
        <main className="text-6xl text-white">
            <h2>Home</h2>
            <h1>Bienvenido {nombre}</h1> 
        </main>
        </>
    );
}

export default Main