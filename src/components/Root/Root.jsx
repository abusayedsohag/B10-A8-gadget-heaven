import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext, useState } from "react";

export const cartContext = createContext(null);
export const wishlistContext = createContext(null);

const Root = () => {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);


    return (
        <wishlistContext.Provider value={[cart, setCart]} >
            <cartContext.Provider value={[wishlist, setWishlist]} >
                <div>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </cartContext.Provider>
        </wishlistContext.Provider >
    );
};

export default Root;