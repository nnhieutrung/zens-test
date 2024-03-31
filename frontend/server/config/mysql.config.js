module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.USER || "root",
  PASSWORD: process.env.PASSWORD || "",
  DB:  process.env.DB || "web"
};