const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/PersonDB");

// ADDING FRUITS DATABASE

const FruitsSchema=new mongoose.Schema({
  name:"String",
  Rating:Number,
  Review:"String"
});

const Fruits= mongoose.model("Fruits",FruitsSchema);

const Mango= new Fruits({
  name:"Mango",
  Rating:10,
  Review:"Absolutely the Best"
});

const Apple = new Fruits({
  name:"Apple",
  Rating:8,
  Review:"OK"
});

const Kiwi = new Fruits({
  name:"kiwi",
  Rating:7,
  Review:"Haven't ate it yet"
});

// Fruits.insertMany([Mango,Apple,Kiwi]).then(function(){
//   console.log("Data inserted")
// }).catch(function(error){
//   console.log(error)
// });

// Fruits.find({})
//   .then(function (fruits) {
//     fruits.forEach(function (fruit) {
//       console.log(fruit.name);                                //For Showing the names only or Filtering the names 
//     })
//   })
//   .catch(function (error) {
//     console.error(error);
//   })


const PersonSchema= new mongoose.Schema({
  Name:{
    type:String,
    required:[true,"Please insert your name here,this field is required"]
  },
  Age:{
    type:Number,
    min:23,
    max:65
  },
  favouriteFruit:FruitsSchema
});

const Person = mongoose.model("Person",PersonSchema);

const people=new Person({
  Name:"Johhny",
  Age:30
});

// people.save();
const Pineapple= new Fruits({
  name:"Pineapple",
  Rating:6,
  Review:"Too salty and Sour"
});
// Pineapple.save();


const employee= new Person({
  Name: "Amy",
  Age:28,
  favouriteFruit:Pineapple
});
// employee.save();
Person.updateOne({Name:"Johhny"},{favouriteFruit:Mango}).then(function(){
  console.log("Sucessfull");
}).catch(function(err){
  console.log(err.message);
})





// Person.find({}).then(function(people){
//   people.forEach(function(peop){
//     console.log(peop.Name);
//  })
// }).catch(function(err){
//   console.log(err.message);
// })

// people.save();



// Person.deleteMany({Name:"Johhny"}).then(function(deletedCount){
//   console.log(deletedCount);
// }).catch(function(err){
//   console.log(err.message);
// })

const niqqaSchema = new mongoose.Schema({
  name:{
    required:[true,"name is required"],
    type:String
  },
  rating:{
    type:Number,
    min:1,
    max:10
  }
});

const Niqqa = mongoose.model("niqqa",niqqaSchema);             // If try to give out of bound length............

// const apple = new Niqqa({
//  name:"Apple",
//   rating:9
// });

const peach=new Niqqa({
  name:"peach",
  rating:8
});

const guava = new Niqqa({
  name: "guava",
  rating: 10
});

// Niqqa.insertMany([peach,guava]).then(function(){
//   console.log("Inserted");
// }).catch(function(err){
//   console.log(err.message);
// });

// apple.save();


// Niqqa.deleteOne({name:"peach"}).then(function(){                       ///Deleting Function
//   console.log("Succesfully deleted");
// }).catch(function(err){
//     console.log(err.message);
// })




// try {
//   apple.save();
// } catch (error) {
//   console.log(error.message);
// }

// Niqqa.find({})
// .then(function(fruits){
// fruits.forEach(function(fruit){
//   console.log(fruit.name);
// })
// })
// .catch (function(error){
//   console.log(error);
// })

// Niqqa.updateOne({_id:"64120bfd38720936171d9eff"},{name:"Chota Kela"})
// .then(function(updated){
//   console.log(updated.message);
// })
// .catch(function(error){
//   console.log(error.message);
// })

