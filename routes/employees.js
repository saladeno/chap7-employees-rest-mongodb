var express = require('express');
var router = express.Router();


var Employee = require("../models/Employee");

// This is a fake representation of data
// This will be fixed later in order to get
// real/fresh data from the database
// var all = [
//     {
//         name: "* Salah GEITH From Server",
//         dateOfBirth: new Date(),
//         position: "Software Engineer",
//         salary: 8000
//     },
//     {
//         name: "* Jaafar Youssef From Server",
//         dateOfBirth: new Date(),
//         position: "Senior Software Engineer",
//         salary: 8000
//     },
//     {
//         name: "* Romdhani Mohamed From Server",
//         dateOfBirth: new Date(),
//         position: "Angular Trainer",
//         salary: 8000
//     }

// ];

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log("=== My LOG : In controller, serving getAll !!")
    Employee.find( function (err, data) {
            console.log(" ==== My LOG : data is : "+data);
            res.json( data);
    } );


    //res.json(all);   // Send back the json data !
});

module.exports = router;