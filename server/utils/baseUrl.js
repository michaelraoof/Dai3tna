const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "productionUrl";

const baseUrlFE =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
    : "productionUrl";

module.exports = baseUrl;
module.exports.baseUrlFE = baseUrlFE;
