# code-20211206-pradeepatkari
 Take json input for person weight, height in cm and gender, calculate BMI on given data and return health risk, 
 BMI range, BMI category along with total count for all above normal weight persons.
 
 # Input Json
 [{"Gender": "Male", "HeightCm": 176, "WeightKg": 40 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 167, "WeightKg": 82}]

# Run application from terminal using command
1. node .\main.js
2. run url on browser to check api is running : http://localhost:3000/
3. see the out put on browser : BMI calculation API is alive!

# Post json data through postman
1. URL: http://localhost:3000/calculateBMI
2. Method: POST
3. Body-> Raw-> Input data (Json)
4. in Raw tab select JSON as content-type

# Out put for above input

Response result :
{"OverWeightCount":5,"Result":[{"Gender":"Male","HeightCm":176,"WeightKg":40,"BMI(kg/m)":"22.73","BMICategory":"Normal
Weight","BMIRange(kg/m2)":"18.5 - 24.9","HealthRisk":"Low
Risk"},{"Gender":"Male","HeightCm":161,"WeightKg":85,"BMI(kg/m)":"52.80","BMICategory":"Very Severely
Obese","BMIRange(kg/m2)":"40 and Above","HealthRisk":"Very High
Risk"},{"Gender":"Male","HeightCm":180,"WeightKg":77,"BMI(kg/m)":"42.78","BMICategory":"Very Severely
Obese","BMIRange(kg/m2)":"40 and Above","HealthRisk":"Very High
Risk"},{"Gender":"Female","HeightCm":166,"WeightKg":62,"BMI(kg/m)":"37.35","BMICategory":"Severely
Obese","BMIRange(kg/m2)":"35 - 39.9","HealthRisk":"High
Risk"},{"Gender":"Female","HeightCm":150,"WeightKg":70,"BMI(kg/m)":"46.67","BMICategory":"Very Severely
Obese","BMIRange(kg/m2)":"40 and Above","HealthRisk":"Very High
Risk"},{"Gender":"Female","HeightCm":167,"WeightKg":82,"BMI(kg/m)":"49.10","BMICategory":"Very Severely
Obese","BMIRange(kg/m2)":"40 and Above","HealthRisk":"Very High Risk"}]}
 
 
