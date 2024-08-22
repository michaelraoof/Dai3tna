const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://dai3tna-back-end.vercel.app";
const baseUrlFE =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://dai3tna.vercel.app";

export default baseUrl;
export { baseUrlFE };
