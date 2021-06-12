module.exports = {
//Create dataset with BMI and health risk
 dataSetWithBMI:function(data){
    var dataset=[];
    //reset ouver weight cout
    overWeightCount=0;
    data.forEach(function(item) { 
        dataset.push(getKeyValue(item));
    });
    return {"OverWeightCount":overWeightCount,"Result":dataset};
   }
}

//Get key value pair
function getKeyValue(e){
    let bmi = CalculateTheBMI(e.HeightCm,e.WeightKg);
    return {
            "Gender": e.Gender, 
            "HeightCm":e.HeightCm,
            "WeightKg":e.WeightKg,
            "BMI(kg/m)":bmi,
            "BMICategory":FindeBMICategory(bmi),
            "BMIRange(kg/m2)":FindBMIRange(bmi),
            "HealthRisk":FindHealthRisk(bmi)
            };
}

//Calculate BMI from weight and height
function CalculateTheBMI(HeightCm, WeightKg){
    let heightMt=(HeightCm/100);
    return (WeightKg/heightMt).toFixed(2);
}

//Find BMI category as per BMI value
function FindeBMICategory(bmi){
    if(bmi<=18.4){ return "Under Weight";}
    else if(bmi>=18.5 && bmi<=24.9){return "Normal Weight";}
    else if(bmi>=25 && bmi<=29.9){ overWeightCount++; return "Over Weight";}
    else if(bmi>=30 && bmi<=34.9){overWeightCount++; return "Moderately Obese";}
    else if(bmi>=35 && bmi<=39.9){overWeightCount++; return "Severely Obese";}
    else if(bmi>=40){overWeightCount++; return "Very Severely Obese";}
    else {return "Unknown BMI value";}
}

//Find BMI range from BMI value
function FindBMIRange(bmi){
    if(bmi<=18.4){ return "18.4 and Below";}
    else if(bmi>=18.5 && bmi<=24.9){return "18.5 - 24.9";}
    else if(bmi>=25 && bmi<=29.9){return "25 - 29.9";}
    else if(bmi>=30 && bmi<=34.9){return "30 - 34.9";}
    else if(bmi>=35 && bmi<=39.9){return "35 - 39.9";}
    else if(bmi>=40){return "40 and Above";}
    else {return "Unknown BMI value";}
}

//Find health risk as per BMI value
function FindHealthRisk(bmi){
    if(bmi<=18.4){ return "Malnutrition Risk";}
    else if(bmi>=18.5 && bmi<=24.9){return "Low Risk";}
    else if(bmi>=25 && bmi<=29.9){return "Enhanced Risk";}
    else if(bmi>=30 && bmi<=34.9){return "Medium Risk";}
    else if(bmi>=35 && bmi<=39.9){return "High Risk";}
    else if(bmi>=40){return "Very High Risk";}
    else {return "Unknown BMI value";} 
}