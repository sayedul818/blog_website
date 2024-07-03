import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
const BlogCards = ({blog,currentPage,selectedCategory,pageSize}) => {
    const filterBLogs=blog
    .filter((blog)=>!selectedCategory||blog.category===selectedCategory)
    .slice((currentPage-1)*pageSize,currentPage*pageSize);
    console.log(filterBLogs);
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                filterBLogs.map((blog)=><Link to={`/blog/${blog.id}`} key={blog.id} className='blogCard p-5 cursor-pointer '>
                    <div className=''>
                        <img  src={blog.image} alt="" className='w-full rounded-lg blogCardsImage' />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                    <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2'></FaUser> {blog.author}</p>
                    <p className='text-sm text-gray-500'>Published:{blog.published_date}</p>
                </Link>)
            }
        </div>
    );
};
BlogCards.propTypes={
    blog: PropTypes.array,
    currentPage: PropTypes,
    selectedCategory: PropTypes,
    pageSize: PropTypes,
    
}
export default BlogCards;