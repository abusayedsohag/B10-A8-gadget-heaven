import { Link } from "react-router-dom";


const Product = ({ product }) => {

    const { product_image, product_title, price } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
                <p className="text-start">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/productDetails/${product_title}`}>
                        <button className="btn btn-primary btn-outline rounded-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;