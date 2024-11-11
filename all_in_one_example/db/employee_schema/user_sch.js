  const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({ 
    name: String,
    age: Number,
    /*data stored only if email entered*/
    email:{
        type: String,
        lowercase: true
    },
    createdAt: { 
        type:Date,
        immutable : true,
        default: Date.now()
    },
    updatedAt: Date,
    bestFriend: {
        type : mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    hobbies: [String],
    address: addressSchema
})

userSchema.methods.sayHi = function(){
    console.log(`hi ! my name is ${this.name}`);
}

userSchema.statics.findByName = function(name){
    return this.where({ name: new RegExp(name, "i") })
}

userSchema.query.queryByName = function(name){
    return this.where({ name: new RegExp(name, "i") })
}

userSchema.virtual("nameEmail").get(function(){
    return `${this.name}  ${this.email}`
})

/*middleware*/
userSchema.pre("save",function(next){
    this.updatedAt =  Date.now()
    next()
})

//post we cant use .bcz it already saved
userSchema.post("save",function(doc, next){
    doc.sayHi()
    next()
})
                               //User -  collection
module.exports = mongoose.model("User",userSchema);

