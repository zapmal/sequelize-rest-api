require('dotenv').config();
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  process.env.PG_DB_NAME,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false
  }
);