import Banner2 from "./Banner2";


const Banner = () => {
    return (
        <div className="relative bg-bannerBg w-[98%] mx-auto rounded-b-2xl p-4 text-center">
            <h1 className="text-5xl font-bold text-white w-4/6 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 px-40 text-white w-4/6 mx-auto opacity-60">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white rounded-full">Shop Now</button>
            <Banner2></Banner2>
        </div>

    );
};

export default Banner;