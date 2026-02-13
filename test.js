import env from "./index.js";

process.env.PORT = "3000";
process.env.DB_URL = "mongodb://localhost:27017/app";

const config = env({
  PORT: "number",
  DB_URL: { type: "string", required: true },
  DEBUG: { type: "boolean", default: false }
});

console.log(config);