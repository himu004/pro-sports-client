import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home | Pro Sports</title>
        </Helmet>
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </div>
  );
};

export default HomeLayout;
