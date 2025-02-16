import React, { useContext } from 'react';
import { cartContext, wishlistContext } from '../Root/Root';
import SingleWishlist from './SingleWishlist';
import { toast, ToastContainer } from 'react-toastify';

const Wishlist = () => {

    const [wishlist, setWishlist] = useContext(wishlistContext);
    const [cart, setCart] = useContext(cartContext);

    const handleDeletePro = (info) => {
        const newWishlist = [...wishlist].filter(wishlist => wishlist.product_title !== info)
        setWishlist(newWishlist);
    }

    // Add to cart button action
    const handleCartAdd = (item) => {
        const newCart = [...cart, item];
        const findPro = cart.find(cart => cart.product_title === item.product_title)

        if (item.availability) {
            if (!findPro) {
                setCart(newCart);
                const newWishlist = [...wishlist].filter(wishlist => wishlist.product_title !== item.product_title);
                setWishlist(newWishlist);

                toast.success('Successfully added to cart', { position: 'top-center' })
            }
            else {
                toast.error('This product is already in the cart', { position: 'top-center' })
            }
        }
        else {
            toast.error('This product is out of stock', { position: 'top-center' })
        }
    }


    return (


        <div className="w-4/5 mx-auto">
            {/* Manu */}
            <div className="flex justify-between items-center pt-12 pb-8">
                <div>
                    <h1 className="text-2xl font-bold">Wishlist</h1>
                </div>
            </div>

            <div>
                {
                    wishlist.length < 1 && <h1 className='text-7xl font-black text-center p-28'>Your Wishlist is Empty!</h1>
                }
                {
                    wishlist?.map(wishlist => <SingleWishlist handleDeletePro={handleDeletePro} wishlist={wishlist} handleCartAdd={handleCartAdd}></SingleWishlist>)
                }
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Wishlist;