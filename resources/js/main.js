//Inport required library 
const _express = require('express');
const _api = _express();

//For json parser
_api.use(express.json());
_api.use(express.urlencoded({extended: true}));

//To run api on port 3000
_api.listen(3000, () => {
  console.log('API up and running!');
});

//Get request to check api running or not
_api.get('/', (req, res) => {
    console.log(req);
    res.send('BMI calculation API is alive!');
  });

//post request to get json data
_api.post('/calculateBMI', (req, res) => {
    console.log(req.body);
    res.send("Got request with data: "+JSON.stringify(req.body));
   });

function CalculateTheBMI(data)
   {

   }