import { Link } from "react-router-dom";
import Banner2 from "./Banner2";


const Banner = () => {


    return (
        <div className="relative bg-bannerBg w-[98%] mx-auto rounded-b-2xl p-4 text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white w-[90%] sm:w-4/6 mx-auto">
                Upgrade Your Tech Accessories with Gadget Heaven
            </h1>
            <p className="py-4 px-6 text-white w-[90%] mx-auto opacity-60">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <Link to="/dashboard" className="btn bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
                Shop Now
            </Link>
            <Banner2 />
        </div>
    );




    // return (
    //     <div className="relative bg-bannerBg w-[98%] mx-auto rounded-b-2xl p-4 text-center">
    //         <h1 className="text-5xl font-bold text-white w-4/6 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
    //         <p className="py-6 px-40 text-white w-4/6 mx-auto opacity-60">
    //             Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
    //         </p>
    //         <Link to="/dashboard" className="btn bg-white rounded-full">Shop Now</Link>
    //         <Banner2></Banner2>
    //     </div>

    // );
};

export default Banner;