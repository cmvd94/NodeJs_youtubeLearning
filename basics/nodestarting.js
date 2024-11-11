console.log("hi day 1 nodejs");
//window.console.log("hi");
//console.log(global);

//js uses es6 model.ie import & export..in node es6 module is not available.but es6 module can be installed by other package
//instead of require is used
const os =  require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log("................................");
const path = require("path");
//console.log(path);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log("............................");

//const math = require('./math');
//console.log(math.add(1,10));


const {add, sub, mul, div} = require("./math");
console.log(add(10,10));

//https://nodejs.org/docs/latest-v20.x/api/index.html
