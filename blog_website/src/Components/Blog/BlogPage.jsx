import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";

const BlogPage = () => {
    const [blog,setBlog]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const pageSize=12;
    const [selectedCategory,setSelectedCategory]=useState(null);
    const [activeCategory,setActiveCategory]=useState(null);
    useEffect(()=>{
        let url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
        if (selectedCategory){
            url +=`&category=${selectedCategory}`
        }
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[currentPage,pageSize,selectedCategory])
    const handlePageChange=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    const handleCategoryChange=(category)=>{
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    return (
        <div className="blogPage">
            {/* category section */}
            <div className="pt-8">
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}></CategorySelection>
            </div>
            {/* blog cards section */}
            <div className="mx-12 flex flex-col lg:flex-row gap-12 blogPage">
                {/* blog-cards-components */}
                <div>
                    <BlogCards blog={blog} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} ></BlogCards>
                {/* pagination section */}
                    <div className="p-4 mt-4 mb-4"><Pagination onPageChange={handlePageChange} blog={blog} currentPage={currentPage} pageSize={pageSize}></Pagination></div>
                </div>
                {/* sidebar-components */}
                <div>
                    <Sidebar blog={blog}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;