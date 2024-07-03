import PropTypes from 'prop-types';
const Pagination = ({onPageChange,currentPage,blog,pageSize}) => {
    const totalPages=Math.ceil(blog.length/pageSize);
    console.log(totalPages);
    const renderPaginationLinks=()=>{
        const paginationLinks=[];
        for(let i=1;i<=totalPages;i++){
            paginationLinks.push(
                <li className={i===currentPage?"activePagination": "" } key={i}>
                    <a href="#" onClick={()=>onPageChange(i)}>{i}</a>
                </li>
            );
        }
        return paginationLinks;
    }
    return (
        <ul className='pagination my-8  flex-wrap gap-4 '>
            <li>
                <button onClick={()=>onPageChange(currentPage-1)}disabled={currentPage===1} className='active:text-orange-500 font-bold'>Previous</button>
            </li>
            <div className=' flex gap-1'>{renderPaginationLinks()}</div>
            <li>
                <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages} className='active:text-orange-500 font-bold'>Next</button>
            </li>
        </ul>
    );
};
Pagination.propTypes={
    onPageChange: PropTypes,
    blog: PropTypes.array,
    currentPage: PropTypes,
    pageSize: PropTypes,
    
}
export default Pagination;