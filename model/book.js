
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('book', {
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
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      returnedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      borrowedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
      {
        timestamps: true,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'book'
      }
    );
  
module.exports = { Book };
  