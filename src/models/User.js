const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/databse');

const User = sequelize.define('Users', {
    id: {
        type:DataTypes.UUID,
        defaultValues: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User;