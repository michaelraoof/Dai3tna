import { Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import useBearStore from "store/store";
import Layout from "./Layout";
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
};

export default AuthenticatedRoute;
