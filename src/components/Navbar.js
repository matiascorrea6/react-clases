import CartWidget from './CartWidget'

function Navbar() {
    return (
        <>  
        <nav className="text-4xl space-x-4">
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
            <CartWidget />
        </nav>
        </>
    );
}

export default Navbar
