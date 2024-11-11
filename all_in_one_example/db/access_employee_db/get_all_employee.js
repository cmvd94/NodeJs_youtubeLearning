const mongoose = require('mongoose');
const User = require("../employee_schema/user_sch");

async function getDbsEmployee(req, res){
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log("inside getDbsEmployee")
    const userData = await User.findOne();
    userData?res.json(userData):res.status(500).json('no data stored');    
}

module.exports = { 
    getDbsEmployee
};