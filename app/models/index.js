const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.causes_data = require("./causes_data.model.js")(sequelize, Sequelize);
db.tags = require("./tags.model.js")(sequelize, Sequelize);
module.exports = db;