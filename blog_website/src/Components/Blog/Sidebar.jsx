import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
const Sidebar = () => {
    // for latest blogs
    // blog.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
    // // Step 2: Slice the array to get the latest 5 blogs
    // for favourite blogs
    // const filterPopularBlogs=blog.slice(10,15);
    // const getRandomIndices = (arrayLength, count) => {
    //     const indices = [];
    //     while (indices.length < count) {
    //         const randomIndex = Math.floor(Math.random() * arrayLength);
    //         if (!indices.includes(randomIndex)) {
    //             indices.push(randomIndex);
    //         }
    //     }
    //     return indices;
    // };
    
    // // Function to get favorite blogs
    // const getFavoriteBlogs = (blog, count) => {
    //     const arrayLength = blog.length;
    //     const randomIndices = getRandomIndices(arrayLength, count);
    //     return randomIndices.map(index => blog[index]);
    // };
    // const filterPopularBlogs = getFavoriteBlogs(blog, 5);
    const [Blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/blogs")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    Blogs.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
    const filterLatestBlogs=Blogs.slice(0,5);
    const filterPopularBlogs=Blogs.slice(10,15);
    return (
        <div>
            <div className='sidebar'>
                <h3 className='text-2xl font-semibold px-4 text-center'>Latest Blogs</h3>
                <div>
                    {
                        filterLatestBlogs.map((blog)=> 
                        <div key={blog.id} className='my-3 border-b-2 border-spacing-2 border-slate-300 px-4 '>
                            <div className='flex'>
                                <h4 className='font-medium text-sm lg:text-xs mb-2 mx-2'>{blog.title}</h4>
                                <img className='w-48 h-16 ' src={blog.image} alt="" />
                            </div>
                            <Link to={'/'} className="font-medium pb-2 mx-2 hover:text-orange-500 inline-flex items-center">Learn more<FaArrowRight className="mt-1 ml-2"></FaArrowRight></Link>
                        </div>
                        )
                    }
                </div>
            </div>
            <div className='sidebar mt-8'>
                <h3 className='text-2xl font-semibold px-4 text-center'>Popular Blogs</h3>
                <div>
                    {
                        filterPopularBlogs.map((blog)=> 
                        <div key={blog.id} className='my-3 border-b-2  border-spacing-2 border-slate-300 px-4 '>
                            <div className='flex'>
                                <h4 className='font-medium text-sm lg:text-xs mb-2 mx-2'>{blog.title}</h4>
                                <img className='w-48 h-16 ' src={blog.image} alt="" />
                            </div>
                            <Link to={'/'} className="font-medium pb-2 hover:text-orange-500 inline-flex items-center">Learn more<FaArrowRight className="mt-1 ml-2"></FaArrowRight></Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};
Sidebar.propTypes={
    blog:PropTypes,
}
export default Sidebar;