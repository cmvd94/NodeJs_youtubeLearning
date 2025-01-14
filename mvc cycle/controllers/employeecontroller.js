/* 
data ={}

data.employees = require('../model/data.json');

const getAllEmployees = (req, res) => { 
    res.json(data.employees);
}

const createNewEmployee = (req, res) => { 
    res.json({
        "firstName": req.body.firstname,
        "lastName" : req.body.lastname
    })
} 

const updateEmployee = (req, res) => { 
    res.json({
        "firstName": req.body.firstname,
        "lastName" : req.body.lastname
    })
}

const deleteEmployee = (req, res) => { 
    res.json({
        "id":req.body.id
    })
}
const getIdDetail = (req, res) => {
    res.json({
        "id":req.params.id//path value is param
    })
}
 */

const data = {
    employees: require('../model/data.json'),
    setEmployees: function (data) { 
        this.employees = data 
    }
}

const getAllEmployees = (req, res) => {
    data.employees.length?res.json(data.employees):res.status(500).json('no data stored');
    
    //console.log(data.employees[0],data.employees[1]);
    
    //console.log(`inside get employee. ${data.employees?'true':'false'}\n${data.employees.length}\n${Object.values(data.employees[data.employees.length - 1])}`)

}

const createNewEmployee = (req, res) => {
    
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
}

const updateEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id) );
    //console.log(employee);
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;
    //console.log(`${Object.values(employee)}\n`);

    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    /* console.log("in for loop")
    console.log(filteredArray.length)
    for(let i = 0; i <filteredArray.length ; i++){
        console.log(Object.values(filteredArray[i]))
    } */
    
    //const unsortedArray = [...filteredArray, employee];
    const unsortedArray = filteredArray.concat(employee);
    
    /* console.log(`\nunsorted array ${unsortedArray}`)
    for(let i = 0; i <unsortedArray.length ; i++){
        console.log(`index${[i]} : ${Object.values(unsortedArray[i])}`)
    } */
    
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.employees);
}

const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    //data.setEmployees([...filteredArray]); //why like this
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

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getIdDetail
}