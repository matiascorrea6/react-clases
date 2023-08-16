import Navbar from './Navbar'
import CartWidget from './CartWidget'

function Header(){

    return (
        <>
        <div id="header" className="flex justify-between items-center bg-slate-800 text-white p-5">
            <div>
                <img src="/logo192.png" alt="" />
            </div>
            <Navbar />
            <CartWidget />
        </div>
        </>
    );
}

export default Header
