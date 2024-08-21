const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "productionUrl";

const baseUrlFE =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "https://dai3tna.vercel.app/";

module.exports = baseUrl;
module.exports.baseUrlFE = baseUrlFE;
