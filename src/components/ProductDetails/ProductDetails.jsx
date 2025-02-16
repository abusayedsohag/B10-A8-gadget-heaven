import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RatingStars from "./Rating"
import whishlist from '../../../public/whishlist.svg'
import shopping from '../../../public/shopping.svg'
import { useContext } from "react";
import { cartContext, wishlistContext } from "../Root/Root";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ProductDetails = () => {

    const loadProductDetails = useLoaderData();
    const { productname } = useParams();

    const [cart, setCart] = useContext(cartContext);
    const [wishlist, setWishlist] = useContext(wishlistContext);

    const [product, setProduct] = useState(null);
    const [stutas, setStutas] = useState('active');

    useEffect(() => {
        const findProduct = loadProductDetails.find(productfind => productfind.product_title === productname);
        setProduct(findProduct)
    }, [loadProductDetails]);

    // Wishlist button deactived
    useEffect(() => {
        if (product) {
            const findWishProduct = wishlist.find(findPro => findPro.product_title === product.product_title);

            if (findWishProduct) {
                setStutas("deactive")
            }
        }
    }, [wishlist, product]);

    if (!product) {
        return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>
    };



    // Add to cart button action
    const handleCartAdd = (item) => {
        const newCart = [...cart, item];
        const findPro = cart.find(cart => cart.product_title === item.product_title)

        if (item.availability) {
            if (!findPro) {
                setCart(newCart);
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

    // Add to cart button action
    const handleWishAdd = (item) => {
        const newCart = [...wishlist, item];
        const findPro = wishlist.find(wishlist => wishlist.product_title === item.product_title)

        if (!findPro) {
            setWishlist(newCart);
            toast.success('Successfully added to wishlist', { position: 'top-center' })
        }
    }

    const { product_title, product_image, price, description, specification, availability, rating } = product;



    return (
        <div className=" bg-[linear-gradient(to_bottom,#7e22ce_50%,#f6f6f6_50%)] pb-20">
            <div className="text-white text-center pt-10">
                <h1 className="font-bold text-4xl">Product Details</h1> <br />
                <p className="opacity-60 max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p> <br />
            </div>

            {/* Details Section */}

            <div className="p-8 border-2 rounded-2xl flex w-10/12 mx-auto gap-8 bg-white">
                <div className="w-2/5 rounded-2xl flex items-center justify-center">
                    <img className="" src={product_image} alt="Image" />
                </div>
                <div className="space-y-4">
                    <h1 className="font-semibold text-3xl">{product_title}</h1>
                    <h3 className="font-semibold text-xl">Price : {price}</h3>
                    <div>
                        {
                            availability ?
                                <h1 className="outline w-[100px] rounded-xl bg-gray-100 outline-green-500 text-green-500 text-center">In Stock</h1> :
                                <h1 className="outline w-[100px] rounded-xl bg-gray-100 outline-green-500 text-green-500 text-center">Out of Stock</h1>
                        }
                    </div>
                    <p>{description}</p>
                    <div>
                        <h1 className="font-bold">Specification:</h1>
                        <div className="pl-5">
                            {
                                specification && specification.map((data, index) => <h1>
                                    <span className="font-bold">{index + 1}.</span> <span className="font-medium pl-2">{data}</span>
                                </h1>)
                            }
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold">Rating</h1>
                        <div className="flex gap-3">
                            <RatingStars rating={rating} size={32}></RatingStars>
                            <h1 className="bg-slate-200 p-1 rounded-md text-sm">{rating}</h1>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <button onClick={() => handleCartAdd(product)} className="btn bg-purple-600 text-white rounded-full">Add To Card <img src={shopping} className="filter invert" /></button>

                        <button disabled={stutas === "deactive"} onClick={() => handleWishAdd(product)} className={`border  rounded-full p-3 flex justify-center items-center ${stutas === 'deactive'?'bg-red-500 text-white':'bg-white border-black'}`}>
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails; 