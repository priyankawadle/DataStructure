// const mongoose = require("mongoose");
// const url="mongodb://localhost:27017/"
// const userSchema=new mongoose.Schema({
//     name:String,
//     age: Number
// })
// const User= mongoose.model('User',userSchema)
// try {
//     mongoose.connect(url)
//     console.log("db connected")
//     const user = new User({
//         name:"pri",
//         age:25
//     })
//     user.save();
//   User.find()
//   .then((data)=>{
//     console.log(data)
//   })

// } catch (error) {
//   console.log("error is",error)  
// }
