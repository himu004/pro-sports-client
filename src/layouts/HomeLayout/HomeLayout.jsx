import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HelmetProvider } from "react-helmet-async";

const HomeLayout = () => {
  return (
    <div>
      <HelmetProvider>
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </div>
  );
};

export default HomeLayout;
