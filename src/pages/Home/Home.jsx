import AllCategories from "../../components/AllCategories";
import Banner from "../../components/Banner";
import OurBrands from "../../components/OurBrands";
import Products from "../../components/products";


const Home = () => {
    return (
        <div>
            <Banner />
            <OurBrands/>
            <Products/>
            <AllCategories/>
        </div>
    );
};

export default Home;