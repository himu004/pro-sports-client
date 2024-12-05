import AllCategories from "../../components/AllCategories";
import ASection from "../../components/ASection";
import Banner from "../../components/Banner";
import OurBrands from "../../components/OurBrands";
import Products from "../../components/products";
import QnA from "../../components/QnA";


const Home = () => {
    return (
        <div>
            <Banner />
            <OurBrands/>
            <Products/>
            <AllCategories/>
            <ASection />
            <QnA />
        </div>
    );
};

export default Home;