console.log("---testing---");

const {format} = require('date-fns')
const { v4 : id } = require('uuid');
console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'));
console.log(id());
console.log("---complete---");