const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "productionUrl";
const baseUrlFE =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://frontendProductionUrl.com";

export default baseUrl;
export { baseUrlFE };
