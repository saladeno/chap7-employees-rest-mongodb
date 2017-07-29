var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var employeeSchema  = new Schema({
     name: String,
     dateOfBirth : Date,
     position: String,
     salary : Number
   });

module.exports = mongoose.model('Employee', employeeSchema);