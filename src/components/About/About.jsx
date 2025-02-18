import React from 'react';

const About = () => {
    return (
        <div>
            <div className="bg-purple-600 py-8 flex justify-center flex-col items-center gap-4">
                <h1 className="font-bold text-4xl text-white">About Us</h1>
                <p className="text-white w-1/2 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="w-8/12 mx-auto rounded-lg shadow-2xl m-10 p-8">
                <h1 className='text-xl font-bold'>Welcome to Gadget Heaven – Your Ultimate Tech Destination!</h1>
                <p className='py-5'>At <span className='font-bold'>Gadget Heaven</span>, we’re passionate about bringing you the latest and greatest in electronic devices. Our mission is to offer top-quality tech products with a strong focus on reliability, exceptional customer service, and innovation.</p>

                <p>Since our launch in 2000, we’ve been on an exciting journey. What started as a deep love for technology and extensive research has grown into a thriving online store. Today, we proudly serve customers nationwide, staying at the forefront of the ever-evolving tech industry.</p>

                <p>Thank you for choosing Gadget Heaven! Whether you’re searching for the latest gadgets or timeless tech essentials, we’re here to help you find the perfect fit.</p>

                <p className='pt-7 text-xl'>Our Values</p>
                <ul className="list-disc list-inside">
                    <li>Quality: We ensure that all our products meet high-quality standards.</li>
                    <li>Innovation: We stay ahead of the trends to bring you the latest technology.</li>
                    <li>Customer Satisfaction: Our goal is to provide exceptional service and support.</li>
                </ul>
            </div>
        </div>


    );
};

export default About;