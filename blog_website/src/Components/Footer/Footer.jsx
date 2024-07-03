import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-gray-900 footer ">
            <div className=" pt-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl  sm:px-24 lg:px-4  ">
                <div className="grid mb-8 lg:grid-cols-6 sm:ml-10 ml-4 ">
                    <div className="grid grid-cols-4 text-sm gap-5 lg:col-span-4 md:grid-cols-4">
                        {/* category-01 */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</a>
                                </li>
                            </ul>
                        </div>
                        {/* category-02 */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Apples</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Web</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">E-commerce</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Business</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Entertainment</a>
                                </li>
                            </ul>
                        </div>
                        {/* category-03 */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Cherry</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Media</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Non-Profit</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Education</a>
                                </li>
                            </ul>
                        </div>
                        {/* category-04 */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Business</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Work</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Projects</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Extra-co</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Personal</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                        <p className="font-medium tracking-wide text-gray-300">Subscribe For Updates</p>
                        <form className="mt-4 flex items-center md:flex-row">
                            {/* <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none" /> */}
                            <label className="input input-bordered flex items-center ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                              </svg>
                              <input type="text" className="grow" placeholder="Email" />
                            </label>
                            <button type="submit" className="active:bg-white transition-all duration-200 ease-in active:text-black bg-black text-white border-slate-500  py-2 w-24 pb-3 rounded-md shadow-lg  mx-4 md:px-4 md:py-2">Subscribe</button>
                        </form>
                        <p className="mt-4 text-sm text-gray-500">Discover insightful articles and inspiring stories at [Your Blog Name]. Explore diverse topics, gain practical tips, and join our community of curious minds on a journey of learning and growth.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center ml-10 mr-10 py-5 pb-10 border-t border-gray-800 sm:flex-row">
                    <p className="text-sm text-gray-500">&copy; Copyright 2024 | All right reserved</p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0" >
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-teal-400"><FaTwitter   className="h-6 w-6"></FaTwitter></a>
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-teal-400"><FaInstagram className="h-6 w-6"></FaInstagram></a>
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-teal-400"><FaFacebook  className="h-6 w-6"></FaFacebook></a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;