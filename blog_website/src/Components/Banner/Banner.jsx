import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-14 lg:mt-16 bg-[url('/public/img1.png')] bg-c bg-center bg-no-repeat">
            <div className="bg-black bg-opacity-50 text-white text-center py-20">
                <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Welcome to our Blog</h1>
                <p className="text-gray-100 lg:w-3/5 mx-auto">Dive into a world of insightful articles, inspiring stories, and diverse perspectives. Whether you,re seeking the latest trends or thought-provoking content, our blog has something for everyone. Join our community of curious readers and embark on a journey of discovery and inspiration. Enjoy your stay!</p>
                <div className="py-6">
                    <Link to={'/'} className="font-medium hover:text-orange-500 inline-flex items-center">Learn more <FaArrowRight className="mt-1 ml-2" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;




// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Banner = () => {
//     return (
//         <div className="banner">
//             <div className="text-white text-center">
//                 <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Welcome to our Blog</h1>
//                 <p className="text-gray-100 lg:w-3/5 mx-auto">Dive into a world of insightful articles, inspiring stories, and diverse perspectives. Whether you,re seeking the latest trends or thought-provoking content, our blog has something for everyone. Join our community of curious readers and embark on a journey of discovery and inspiration. Enjoy your stay!</p>
//                 <div className="py-6">
//                     <Link to={'/'} className="font-medium hover:text-orange-500 inline-flex items-center">Learn more <FaArrowRight className="mt-1 ml-2" /></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
