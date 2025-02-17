import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {

    const loadCategories = useLoaderData()


    return (
        <>
            <Banner></Banner>
            <div className="text-center mt-24">
                <h1 className="text-4xl font-semibold">Explore Cutting-Edge Gadgets</h1>
                <div className="w-10/12 mx-auto mb-24 mt-12 grid grid-cols-5 grid-rows-3 gap-6">
                    <div className="row-span-3">
                        <Catagories loadCategories={loadCategories}></Catagories>
                    </div>
                    <div className="col-span-4 row-span-3">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;