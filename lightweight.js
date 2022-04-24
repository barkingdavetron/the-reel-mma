var express = require('express');
var router = express.Router();
var name;
var wins;
var association;
var nationality;
var height;
var weight;
var mma = require('mma-api');




/* GET home page. */
router.get('/', function(req, res ) {

  res.render('lightweight', {
    name,wins,association,nationality,height,weight
    
  })

});



router.post('/', async (req, res) => { 
  const search=req.body.search;
  mma.api(search, (data) => {
 
    wins=data.wins.total;
     name=data.name;
     association=data.association
     nationality=data.nationality
     height=data.height
     weight=data.weight
    
    
    
    
    });
  res.render('lightweight', {
   name,wins,association,nationality,height,weight
    
   
  })
  })


    

module.exports = router;