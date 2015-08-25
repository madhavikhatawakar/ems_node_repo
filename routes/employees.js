 var Employee= require('../models/employee');
var express = require('express');
var router = express.Router();


router.route('/users')

   .get(function(req, res) {
  Employee.find(function(err, data) {
    if (err) {
	 
      return res.send(err);
    } 
	  console.log("inside get");

    res.json(data);
	res.end();
  });
})


   .post(function(req, res) {

var employee = new Employee(req.body);
employee.code = req.body.code;
 employee.name = req.body.name;
employee.city = req.body.city;

   employee.save(function(err,data) {
    if (err) {
      return res.send(err);
    }
 
    res.send( 'employee Added');
   res.json(data);
 });

  
});


  
router.route('/users/:id')
.put(function(req,res){
Employee.findOne({ _id: req.params.id }, function(err,emp) {
  
emp.code = req.body.code;
 emp.name = req.body.name;
emp.city = req.body.city;
	
    
		 emp.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        
         res.send(  'employee updated' );
		   
    });
  });
  
})

.get(function(req, res) {
  Employee.findOne({ _id: req.params.id }, function(err,emp) {
      if (err) {
	 
      return res.send(err);
    } 
	  //res.send(  'get employee' );
    res.json(emp);
	res.end();
  });
}) 


.delete(function(req, res) {
  Employee.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      return res.send(err);
    }
 
    res.send( 'emlpoyee deleted' );
  });
});



module.exports = router;
