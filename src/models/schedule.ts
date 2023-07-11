import {DataTypes, Model} from 'sequelize';
import sequelize from '../connection/database';

export class Schedule extends Model {}

Schedule.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vehicle_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    client_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    pickup_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dropoff_location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    note: {
        type: DataTypes.STRING
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Schedule' 
  });