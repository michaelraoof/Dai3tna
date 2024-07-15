const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "productionUrl";

export default baseUrl;
