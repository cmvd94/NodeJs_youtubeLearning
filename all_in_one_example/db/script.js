

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/testdb");
const User = require("./user_sch");

main().catch(err => console.log(err.message));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
    
    /**********************************create*****************************************/
    //in this created doc saved in collection
    /* const userData = await User.create({ name: "vishnudas",age: 30})
    userData.name = "cmvishnudas" */
    const userData = await User.create({ 
        name: "sankar",
        age: 30,
        hobbies: ["tv","driving","coding"],
        email: "sankar@gmail.com",
        address: {
            street : "saravanampati",
            city: "coimbatore"
        },
       // bestFriend :  User.find({ name : "appa"})._id  
    })
    //userData.createdAt = 100000;
    //userData.updatedAt = Date.now(); 
    /*************************************read*****************************************/
    //const userData = (await User.where("name").equals("appa").where("age").gt(30).lt(60).select("name"));
   
    /* const userData = (await User
        .where("name")
        .equals("appa")
        .populate("bestFriend")
    ) */ 
    
    /* userData[0].bestFriend = "669e303b97e90c70e041f0e2";
    await userData[0].save(); */

    /*************************methods.sayhi()********************/
    //works for one instant
    /* const userData = await User.findOne({name: "vishnudas"});
    console.log(userData)
    userData.sayHi(); */
    
    /********************statics call****************/
    /* const userData = await User.findByName("sankar");
    console.log(userData); */
    
    /*****************query cal********************* */
    /* const userData = await User.find().queryByName("sankar");
    console.log(userData); */

    /************************virtual****************** */
    /* console.log(await User.findOne().exists("email").select({name: 1,email:1}));
    const userData = await User.findOne().exists("email")
    console.log(userData.nameEmail) 

    console.log(userData);
    userData.save();
    console.log(userData) */




}

//add data
//below doc is created but to save we have use .save.
/* const userData = new User({ name: "vishnudas",age: 30})
console.log(userData);
userData.save()//save is promise and we can use thenables
 */