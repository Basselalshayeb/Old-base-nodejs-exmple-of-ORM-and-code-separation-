const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    // creating models
    
    const {User} = require('./models/users')(sequelize,Model);

    
    (async () => {
        try {
            const users = await User.findAll();
    console.log(users);
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })();
}