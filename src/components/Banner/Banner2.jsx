import bannerImag from '../../../assets/banner.jpg';

const Banner2 = () => {
    return (
        <div className="w-4/5 mx-auto border p-6 mt-12 rounded-2xl bg-transparent backdrop-blur-md">
            <div className='rounded-2xl h-[600px] w-full'>
                <img className='rounded-2xl h-full w-full' src={bannerImag} alt="" />
            </div>
        </div>
    );
};

export default Banner2;