import { Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import useBearStore from "store/store";
import Layout from "./Layout";
import ContentLoader, { Facebook, Instagram } from "react-content-loader";
import Loader from "react-loader-spinner";

const AuthenticatedRoute = ({ children }) => {
  const isAuthenticated = useBearStore((state) => state.isAuthenticated);
  const { loading } = useAuth();

  if (!loading) {
    return isAuthenticated ? (
      <Layout>{children}</Layout>
    ) : (
      <Navigate to="/login" />
    );
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="Puff" color="grey" ariaLabel="puff-loading" />
    </div>
  );
};

export default AuthenticatedRoute;
