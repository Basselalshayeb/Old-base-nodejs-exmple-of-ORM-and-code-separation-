const { Sequelize, Model, DataTypes } = require('sequelize');

class Folder extends Model { }

module.exports = function (sequelize) {
    // creating models
    
    Folder.init({
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Folder' // We need to choose the model name
    });
    
    return Folder;
}

