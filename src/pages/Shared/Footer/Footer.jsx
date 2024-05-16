import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className=" text-white text-center border-none ">
                <div className=" flex flex-col md:flex-row justify-evenly items-center ">
                    <div className="bg-[#1F2937] w-full h-[400px] flex justify-center items-center ">
                        <div>
                            <h2 className=" font-medium text-3xl text-center ">CONTACT US</h2>
                            <p className=" leading-9 my-6 text-xl ">123 ABS Street, Uni 21, Bangladesh <br />
                                +88 123456789 <br />
                                Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                    <div className=" bg-[#111827] w-full h-[400px] flex justify-center items-center ">
                        <div>
                            <h2 className=" font-medium text-3xl text-center ">Follow US</h2>
                            <p className=" leading-9 my-6 text-xl ">Join us on social media</p>
                            <div className=" text-4xl ">
                                <button><FaFacebook /> </button>
                                <button className=" mx-8 "><FaInstagram /> </button>
                                <button><FaTwitter /> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#151515] h-[70px] flex justify-center items-center ">
                    <h2 className=" text-xl font-medium ">Copyright © CulinaryCloud. All rights reserved.</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;