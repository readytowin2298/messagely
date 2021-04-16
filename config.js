/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgres://wuckybrm:cWgznqjdqqmCP5-K-RBOW2GwHWbCwvsB@queenie.db.elephantsql.com:5432/wuckybrm"
  : "postgres://awfocelw:8ZRJoEybsKG5RNkLejnlPCQF9G2a2EPq@queenie.db.elephantsql.com:5432/awfocelw";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};