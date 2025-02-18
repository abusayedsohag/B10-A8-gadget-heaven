import { useContext } from 'react';
import shopping from '../../../public/shopping.svg'
import whishlist from '../../../public/whishlist.svg'
import { Link, useLocation } from 'react-router-dom';
import { cartContext, wishlistContext } from '../Root/Root';

const NavBar = () => {


    const [cart] = useContext(cartContext);
    const [wishlist] = useContext(wishlistContext);


    const location = useLocation();
    const homePage = location.pathname === "/";

    return (
        <div className={` navbar   rounded-t-2xl w-[98%] px-16 mx-auto ${homePage ? "bg-purple-600 text-white mt-4" : ""} `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link to="/dashboard">
                    <button className="bg-white p-2 rounded-full relative text-black">
                        <img src={shopping} alt="" />
                        <div className="absolute  -top-2 -right-2 bg-white rounded-full px-1">
                            <span>{cart?.length}</span>
                        </div>
                    </button>
                </Link>
                <Link to="/dashboard">
                    <button className="bg-white p-2 rounded-full relative text-black">
                        <img src={whishlist} alt="" />
                        <div className="absolute  -top-2 -right-2 bg-white rounded-full px-1">
                            <span>{wishlist?.length}</span>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;