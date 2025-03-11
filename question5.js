// database.js  
const { Sequelize } = require('sequelize');  

// Create a connection to the database  
const sequelize = new Sequelize('database_name', 'username', 'password', {  
    host: 'localhost',  
    dialect: 'mysql',  
});  

module.exports = sequelize;  


// User.js  
const { DataTypes } = require('sequelize');  
const sequelize = require('./database');  

// Define User model  
const User = sequelize.define('User', {  
    id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
    },  
    name: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    email: {  
        type: DataTypes.STRING,  
        allowNull: false,  
        unique: true,  
    },  
    status: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
});  

// Export the User model  
module.exports = User;  


// app.js  
const express = require('express');  
const sequelize = require('./database'); // Import sequelize connection  
const User = require('./User'); // Import User model  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Middleware to parse JSON  
app.use(express.json());  

// Route to fetch all users  
app.get('/users', async (req, res) => {  
    try {  
        const users = await User.findAll();  
        res.json(users);  
    } catch (err) {  
        console.error(err);  
        res.status(500).json({ error: 'An error occurred while fetching users.' });  
    }  
});  

// Sync Sequelize models and start server  
(async () => {  
    try {  
        // Sync all models  
        await sequelize.sync();  
        // Start the server  
        app.listen(PORT, () => {  
            console.log(`Server is running on http://localhost:${PORT}`);  
        });  
    } catch (err) {  
        console.error('Unable to connect to the database:', err);  
    }  
})();  