import Navbar from './Navbar'

function Header(){
    return (
        <>
        <div id="header" className="header flex justify-between items-center bg-slate-800 text-white p-5">
            <div>
                <img src="/logo192.png" alt="" />
            </div>
            <Navbar/>
        </div>
        </>
    );
}

export default Header