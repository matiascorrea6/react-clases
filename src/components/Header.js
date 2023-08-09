function Header(){

    let nombre = prompt("Ponga su nombre completo")

    return (
    <>
        <header className="text-5xl">
            <h2>Bienvenido {nombre}</h2>
        </header>
    </>
    );
}
export default Header