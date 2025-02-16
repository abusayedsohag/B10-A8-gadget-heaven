import { useContext, useState } from 'react';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { cartContext, wishlistContext } from '../Root/Root';


const Dashboard = () => {

    const [wishlist] = useContext(wishlistContext);


    const [active, setActive] = useState('cart');

    const handleCartBtn = () => {
        setActive('cart')
    }

    const handlewishlist = () => {
        setActive('wishlist');
    }


    return (
        <div>
            {/* Banner */}
            <div className="bg-purple-600 py-8 flex justify-center flex-col items-center gap-4">
                <h1 className="font-bold text-4xl text-white">Dashboard</h1>
                <p className="text-white w-1/2 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex gap-6">
                    <button onClick={handleCartBtn} className={`btn text-lg rounded-full px-16 ${active === 'cart'?"font-extrabold text-purple-600":"font-medium  text-white bg-transparent"}`}>Cart</button>

                    <button onClick={handlewishlist} className={`btn text-lg rounded-full px-16 ${active === 'wishlist'?"font-extrabold text-purple-600 bg-white":"font-medium  text-white bg-transparent"}`}>Wishlist</button>
                </div>
            </div>

            <div>

                {
                    active === 'cart' ? <Cart></Cart> : <Wishlist></Wishlist>
                }

            </div>
        </div>
    );
};

export default Dashboard;