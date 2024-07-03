import BlogPage from "./BlogPage";

const BLogs = () => {
    return (
        <div>
            <div className="text-white text-center px-4 py-32 bg-black mx-auto">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold  mb-5">Blog Page</h2>
            </div>
            {/* all blogs contain here */}
            <div className="max-w-7xl mx-auto">
                <BlogPage></BlogPage>
            </div>
        </div>
    );
};

export default BLogs;