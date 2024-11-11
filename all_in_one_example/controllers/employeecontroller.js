

const getAllEmployees = (req, res) => {
    const { getDbsEmployee }  = require('../db/access_employee_db/get_all_employee');
    getDbsEmployee(req,res); 
}

const createNewEmployee = (req, res) => {
    const {createDbsEmployee} = require('../db/access_employee_db/create_new_employee_entry');
    createDbsEmployee(req,res);
    /*
    const newEmployee = {
        //id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
        id: data.employees?.length ? data.employees.length + 1 : 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    //console.log(`inside create employee. ${data.employees?'true':'false'}\n${data.employees.length}\n${data.employees[data.employees.length - 1]}`)

    if (!newEmployee.firstname || !newEmployee.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    data.setEmployees([...data.employees, newEmployee]);

    res.status(201).json(data.employees);
    */
}
/*
const updateEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id) );
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;

    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
   
    const unsortedArray = filteredArray.concat(employee);
    
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.employees);
}

const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    
    data.setEmployees(filteredArray)
    res.json(data.employees);
}

const getIdDetail = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
}
*/

module.exports = {
    getAllEmployees,
    createNewEmployee,
//    updateEmployee,
//    deleteEmployee,
//    getIdDetail
}