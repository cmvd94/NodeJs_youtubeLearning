const mongoose = require('mongoose');
const User = require("../employee_schema/user_sch");

async function createDbsEmployee(req ,res){
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log(`inside CreateDbsEmployee ${req.body}`)
    //const userData = await User.insertOne(req.body);
    await User.create(req.body)?res.status(201).json(req.body):res.status(400).json({ 'message': 'First and last names are required.' });

}

module.exports = {
    createDbsEmployee
};