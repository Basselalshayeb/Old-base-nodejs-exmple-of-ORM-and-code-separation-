const { Sequelize, Model, DataTypes } = require('sequelize');

class File extends Model { }

module.exports = function (sequelize,Folder) {
    // creating models
    
File.init({
    // Model attributes are defined here
    folderId: {
        type: DataTypes.INTEGER,
        references: {
            model: Folder,
            key: 'id'
        }
    },
    file_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'File' // We need to choose the model name
});
    return File;
}

