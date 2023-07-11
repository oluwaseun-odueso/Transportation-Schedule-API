import {DataTypes, Model} from 'sequelize';
import sequelize from '../connection/database';

export class Driver extends Model {}

Driver.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_key: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Driver' 
  });