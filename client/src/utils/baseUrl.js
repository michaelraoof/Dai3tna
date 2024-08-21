const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://dai3tna-ps1w51tg1-michaelraoofs-projects.vercel.app/";
const baseUrlFE =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://dai3tna-d6ur.vercel.app/";

export default baseUrl;
export { baseUrlFE };
