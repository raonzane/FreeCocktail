"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const sequelize = require("sequelize");
require("dotenv/config");
exports.dbConfig = new sequelize.Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    port: Number(process.env.DATABASE_PORT),
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000,
    },
});
//# sourceMappingURL=index.js.map