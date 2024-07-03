import Banner from "../Banner/Banner";
import BlogPage from "../Blog/BlogPage";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <BlogPage></BlogPage>
            </div>
        </div>
    );
};

export default Home;