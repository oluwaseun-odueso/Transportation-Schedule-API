import {DataTypes, Model} from 'sequelize';
import sequelize from '../connection/database';

export class Vehicle extends Model {}

Vehicle.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_key: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Vehicle' 
  });