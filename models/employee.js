var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var employeeSchema = new Schema({
    code : Number,
  name : String,
city: String
 
});
 
module.exports = mongoose.model('employees', employeeSchema);