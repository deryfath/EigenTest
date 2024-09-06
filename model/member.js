
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Member = sequelize.define('member', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isPenalize: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
      {
        timestamps: true,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'member'
      }
    );
  
module.exports = { Member };
  