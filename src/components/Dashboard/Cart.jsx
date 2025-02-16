import React, { useContext } from 'react';
import sortIcon from '../../../public/sort.svg'
import { cartContext } from '../Root/Root';
import SingleCart from './SingleCart';

const Cart = () => {


    const [cart, setCart] = useContext(cartContext);

    const handleDeletePro = (info) => {
        const newCart = [...cart].filter(cart => cart.product_title !== info)
        setCart(newCart);
    }

    const handlePriceSort = () => {
        const sortPro = [...cart].sort((a, b) => (b.price - a.price));
        setCart(sortPro);
    }

    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0)


    return (
        <div className="w-4/5 mx-auto">
            {/* Manu */}
            <div className="flex justify-between items-center pt-12 pb-8">
                <div>
                    <h1 className="text-2xl font-bold">Cart</h1>
                </div>
                <div className="flex gap-6 items-center">
                    <h1 className="text-2xl font-bold">Total Cost : {totalPrice}</h1>
                    <button onClick={handlePriceSort} className="btn rounded-full text-purple-600 border-purple-600">Sort by Price <img src={sortIcon} alt="" /></button>
                    <button className="btn rounded-full text-white bg-gradient-to-b from-purple-600 to-slate-400">Purchase</button>
                </div>
            </div>

            <div>
                {
                    cart.length <1 && <h1 className='text-7xl font-black text-center p-28'>Your Cart is empty!</h1>
                }
                {
                    cart?.map(cart => <SingleCart handleDeletePro={handleDeletePro} cart={cart}></SingleCart>)
                }
            </div>
        </div>
    );
};

export default Cart;