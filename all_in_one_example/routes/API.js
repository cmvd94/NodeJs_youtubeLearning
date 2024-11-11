const express = require('express');
const router = express.Router();
const path = require('path')
const employeeController = require('../controllers/employeecontroller');
//we also write individual command
//chaining 
console.log('inside API')
router.route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createNewEmployee)
    //.put(employeeController.updateEmployee)
    //.delete(employeeController.deleteEmployee)
/*
router.route('/:id')
    .get(employeeController.getIdDetail)
*/
module.exports = router;