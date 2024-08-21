const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://dai3tna.vercel.app";
const baseUrlFE =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://dai3tna-d6ur-awmieh5y1-michaelraoofs-projects.vercel.app";

export default baseUrl;
export { baseUrlFE };
