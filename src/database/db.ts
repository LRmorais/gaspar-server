import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  'gaspar',
  'admin',
  'databasepass',
  {
    dialect: 'mysql',
    host: 'database-1.cjupvnwhmyug.us-east-2.rds.amazonaws.com',
    port: 3306,
  },
);
