import React from 'react';

const SingleWishlist = ({ wishlist, handleDeletePro, handleCartAdd }) => {


    const { product_image, product_title, price, description } = wishlist;

    return (
        <div className='flex justify-between items-center p-8 bg-white rounded-2xl my-6'>

            <div className='flex gap-8'>
                <img className='w-32 h-32 object-cover' src={product_image} />
                <div>
                    <h1 className='pt-2 text-2xl font-semibold'>{product_title}</h1>
                    <p className='text-slate-500'>{description}</p>
                    <h1 className='font-semibold text-xl text-slate-700'>Price : ${price}</h1>
                    <button onClick={() => handleCartAdd(wishlist)} className="btn bg-purple-600 text-white rounded-full">Add To Card</button>
                </div>
            </div>

            <div className='pl-20 text-red-500'>
                <button onClick={() => handleDeletePro(product_title)} className=''><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    );
};

export default SingleWishlist;