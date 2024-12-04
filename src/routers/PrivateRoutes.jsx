import { useContext } from "react";
import { AuthContext } from "../providers/Context";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading} = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-lg pt-32 mt-10 mx-auto"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoutes;
