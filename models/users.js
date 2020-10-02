const { Sequelize, Model, DataTypes } = require('sequelize');

class User extends Model { }

module.exports = function (sequelize) {
    // creating models
    
    User.init({
        // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User' // We need to choose the model name
    });
    return User;
}

