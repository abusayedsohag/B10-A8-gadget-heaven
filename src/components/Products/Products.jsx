import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";


const Products = () => {

    const loadData = useLoaderData();
    const { categoryname } = useParams();
    const [products, setProducts] = useState(loadData)

    useEffect(() => {
        if (categoryname) {
            const categoriesProduct = [...loadData].filter(product => product.category === categoryname)
            setProducts(categoriesProduct)
        }
        else {
            setProducts(loadData)
        }
    }, [loadData])

    return (
        <div>
            {
                products.length < 1 ? <h1 className='text-center text-6xl h-[320px] flex justify-center items-center'> Not  Product Found</h1> :

                    <div className="grid grid-cols-3 gap-6">
                        {
                            products.map(product => <Product key={product.Product_title} product={product}></Product>)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;