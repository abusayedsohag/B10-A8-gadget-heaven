

const Footer = () => {
    return (
        <div className="py-24 bg-white">
            <footer className="flex flex-col justify-center items-center px-10 py-4">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <br />
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </footer>
            <footer className="footer text-base-content p-10 justify-evenly">
                <nav>
                    <h6 className="footer-title text-black opacity-100">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-black opacity-100">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-black opacity-100">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;