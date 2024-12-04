import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomeLayout = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header />
        <Outlet />
      </HelmetProvider>
    </div>
  );
};

export default HomeLayout;
