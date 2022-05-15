import { DataTypes } from 'sequelize';
import { db } from '../db';

export const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  hasIfood: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idIfood: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  typeModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cnhImageFront: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cnhImageBack: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
