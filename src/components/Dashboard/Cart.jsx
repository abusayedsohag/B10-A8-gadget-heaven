import React, { useContext, Component, useState } from 'react';
import sortIcon from '../../../public/sort.svg'
import { cartContext } from '../Root/Root';
import SingleCart from './SingleCart';
import Modal from 'react-awesome-modal';
import okIcon from '../../../public/ok.svg'
import { useNavigate } from 'react-router-dom';


const Cart = () => {


    const [cart, setCart] = useContext(cartContext);
    const [isVisible, setVisible] = useState(false);
    const location = useNavigate();
    const [total, setTotal] = useState("");

    const handleDeletePro = (info) => {
        const newCart = [...cart].filter(cart => cart.product_title !== info)
        setCart(newCart);
    }

    const handlePriceSort = () => {
        const sortPro = [...cart].sort((a, b) => (b.price - a.price));
        setCart(sortPro);
    }

    const handlePurchase = (total) => {
        if (cart.length >= 1) {
            openModal();
            setTotal(total);
            setCart([]);
        }
    }

    // Modal section
    const openModal = () => {
        setVisible(true)
    };

    const closeModal = () => {
        setVisible(false)
        location('/')

    };

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
                    <button disabled={cart.length < 1} onClick={()=> handlePurchase(totalPrice)} className="btn rounded-full text-white bg-gradient-to-b from-purple-600 to-slate-400">Purchase</button>
                </div>
            </div>

            <div>
                {
                    cart.length < 1 && <h1 className='text-7xl font-black text-center p-28'>Your Cart is empty!</h1>
                }
                {
                    cart?.map(cart => <SingleCart handleDeletePro={handleDeletePro} cart={cart}></SingleCart>)
                }
            </div>

            {/* Modal section */}

            <Modal
                visible={isVisible}
                width="400"
                height="300"
                effect="fadeInUp"
                onClickAway={closeModal}>
                <div className='flex justify-center items-center flex-col p-8 gap-4'>
                    <img src={okIcon} alt="okIcon" />
                    <h1 className='font-bold text-2xl'>Payment Successfully</h1>
                    <p className='font-medium text-slate-400 text-center'>Thanks for purchasing. <br />Total : $ {total} </p>
                    <button onClick={closeModal} className='btn w-full'>Close</button>
                </div>
            </Modal>

        </div>
    );
};

export default Cart;