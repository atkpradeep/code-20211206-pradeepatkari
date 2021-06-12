//Inport required library 
const _express = require('express');
const _api = _express();
var _path = require('path');
var overWeightCount=0;
//For json parser
_api.use(_express.json());
_api.use(_express.urlencoded({extended: true}));
var bmiCalculation = require('./resource/js/BMICalculation');

//To run api on port 3000
_api.listen(3000, () => {
  console.log('BMI API is running!');
});

//Get request to check api running or not
_api.get('/', (req, res) => {
    console.log(req);
    res.send('BMI calculation API is alive!');
  });

//post request to get json data
_api.post('/calculateBMI', (req, res) => {
    //console.log(req.body);
   var result = bmiCalculation.dataSetWithBMI(req.body);
    res.send("Response result : "+JSON.stringify(result));
   });

