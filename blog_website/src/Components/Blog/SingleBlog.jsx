import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
// import Sidebar from "./Sidebar";
import { FaClock } from "react-icons/fa6";
import Sidebar from "./Sidebar";

const SingleBlog = () => {
    const data=useLoaderData();
    const {title,image,category,author,published_date,reading_time,content}=data[0];
    return (
        <div>
            <div className="mt-14 lg:mt-16 bg-[url('/public/img2.png')] bg-c bg-center bg-no-repeat">
                <div className="bg-black bg-opacity-50 text-white text-center py-24 ">
                    <div className="text-white text-center">
                        <h1 className="text-5xl lg:text-7xl leading-snug font-bold  mb-5">Blog & Page</h1>
                    </div>
                </div>
            </div>
            <div className="md:flex md:mt-4 mt-10">
                <div className="blogCard p-8 w-4/5 md:m-10 m-auto mb-10">
                     <div className=''>
                             <img  src={image} alt="" className='w-full rounded-lg blogCardsImage' />
                     </div>
                     <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{title}</h3>
                     <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2'></FaUser> {author}</p>
                     <p className="mb-3"><FaClock className="inline-flex items-center mr-2 mb-1"></FaClock>{reading_time}</p>
                     <p className='text-sm text-gray-500 mb-2'>Published:{published_date}</p>
                     <p>{content}</p>
                </div>
                <div className="lg:w-1/2 mx-10 md:m-10">
                <Sidebar></Sidebar>
                </div>
                
                    
                
            </div>
        </div>
    );
};

export default SingleBlog;