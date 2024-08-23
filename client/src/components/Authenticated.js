import { Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import useBearStore from "store/store";
import Layout from "./Layout";
import ContentLoader, { Facebook, Instagram } from "react-content-loader";

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
  return <Loader />;
};
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "60px",
          backgroundColor: "#f3f3f3",
          marginBottom: "20px",
        }}
      >
        <ContentLoader
          speed={2}
          width={1200}
          height={60}
          viewBox="0 0 1200 60"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="20" y="15" rx="5" ry="5" width="200" height="30" />
          <rect x="250" y="15" rx="5" ry="5" width="300" height="30" />
          <rect x="580" y="15" rx="5" ry="5" width="200" height="30" />
        </ContentLoader>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Navigation */}
        <aside style={{ width: "200px", marginRight: "20px" }}>
          <ContentLoader
            speed={2}
            width={200}
            height={600}
            viewBox="0 0 200 600"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="20" y="15" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="65" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="115" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="165" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="215" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="215" rx="5" ry="5" width="160" height="30" />
          </ContentLoader>
        </aside>

        {/* Main Content (Posts) */}
        <main
          style={{
            flex: 1,
            display: "flex",

            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Facebook width={820} />
          <Facebook width={820} />
          <Facebook width={820} />
          <Instagram width={820} />
        </main>

        {/* Right Navigation or Ads */}
        <aside style={{ width: "200px" }}>
          <ContentLoader
            speed={2}
            width={200}
            height={600}
            viewBox="0 0 200 600"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="20" y="15" rx="5" ry="5" width="160" height="200" />
            <rect x="20" y="235" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="285" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="335" rx="5" ry="5" width="160" height="30" />
            <rect x="20" y="385" rx="5" ry="5" width="160" height="30" />
          </ContentLoader>
        </aside>
      </div>
    </div>
  );
};
export default AuthenticatedRoute;
