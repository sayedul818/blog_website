import PropTypes from 'prop-types';
const CategorySelection = ({onSelectCategory,activeCategory}) => {
    const categories=["Tech","Apps","Startups","Gadgets","Security","Fintech","AI","Health"];
    return (
        <div className=' mx-12 mb-8 space-x-8 lg:space-x-16 flex flex-wrap items-center border-b-2 border-slate-300 py-5 text-gray-900 font-semibold'>
            <button onClick={()=>onSelectCategory(null)} className={`lg:ml-12 ${activeCategory? "" : "active-button"}`}>All </button>
            {
                categories.map((category)=>(
                    <button
                    onClick={()=>onSelectCategory(category)}
                    className={`mr-2 space-x-16 ${activeCategory===category ? "active-button" : ""}`}
                    key={category}>
                    {category}
                    </button>
                ))
            }
        </div>
    );
};
CategorySelection.propTypes={
    onSelectCategory: PropTypes,
    activeCategory: PropTypes,
    
}
export default CategorySelection;