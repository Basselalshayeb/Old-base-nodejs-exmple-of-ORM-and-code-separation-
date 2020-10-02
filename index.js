const http = require('http');
const express = require('express');
var app = express();
const mysql = require('mysql');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('pointoffsy', 'sa', 'sasa', {
    host: 'localhost',
    dialect: 'mysql',
    logging: (...msg) => console.log(msg)
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// testing sequalizer
// require('./testing_seq')(sequelize);

// define models Todo: move them in separete file
var User = require('./models/users')(sequelize);
var Folder = require('./models/folders')(sequelize);
var File = require('./models/files')(sequelize, Folder);
var Has = require('./models/has')(sequelize, User, Folder);
Folder.belongsToMany(User, { through: 'Has' });
User.belongsToMany(Folder, { through: 'Has' });
File.belongsTo(Folder);
Folder.hasMany(File);
/*(async () => {
    try {
        // await User.sync({ force: true });
        const users = await Folder.findAll();
        console.log(users);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();*/

// Routes
// Folder routes
require('./api/folder/folder')(app,User,Folder,File);
// File routes
require('./api/file/file')(app,User,Folder,File);


http.createServer(app).listen(80,() => {console.log('server is working')});
