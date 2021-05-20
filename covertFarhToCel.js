// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
//convertFahrToCelsius function name using the declaration notation
function convertFahrToCelsius(tempMeasureInF){
  let tempMeasureInFDataType = typeof(tempMeasureInF);
 
  if(tempMeasureInFDataType === "number"){
    let tempConvertResult = (tempMeasureInF-32)* 5/9;
    let finalResult ="`"+tempConvertResult.toFixed(4)+"`";
    return finalResult;

  }
  else if(tempMeasureInFDataType === "string"){
    let tempConvertResult = (Number(tempMeasureInF)-32)* 5/9;
    let finalResult = "`"+tempConvertResult.toFixed(4)+"`";
    return finalResult;
    
  }
 else if(Array.isArray(tempMeasureInF) === true){
    // data type object- therefore improvise return string; 
    let tempMeasureInFArray = JSON.stringify(tempMeasureInF);
    let finalResult = "`"+`${tempMeasureInFArray} is not a valid number but a/an array.`+"`";
    return finalResult;
 }

   else if(tempMeasureInFDataType === "object"){
     let tempMeasureInFObject = JSON.stringify(tempMeasureInF);
     let finalResult = "`"+`${tempMeasureInFObject} is not a valid number but a/an ${tempMeasureInFDataType}.`+"`";
     return finalResult;   
    
  } 
  
} 
//Function call
let x = convertFahrToCelsius([1,2]);
console.log(x);

//  2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.
function checkYuGiOh(n){
  //covert parameter to string data type
  let nParameterRawString = JSON.stringify(n);
  //convert parameters in string to Number data type
  let nParameterNumber = Number(n);
  //Get boolean for valid and invalid numbers using Number.isNaN()
  let nParameterNumberCheck = Number.isNaN(nParameterNumber);
  //check if the value of the number-converted parameter is a valid number or invalid
  if (nParameterNumberCheck === false ){
    let yugiohArray = [];
    yugiohArray.length = n;
    for(let i=0;i<yugiohArray.length;i++){
      let arrayElement = i+1;
       if ((arrayElement % 2 === 0)&&(arrayElement % 3 === 0)&& (arrayElement % 5 === 0)){
        arrayElement = "yu-gi-oh";
       }
       else if ((arrayElement % 2 === 0)&&(arrayElement % 3 === 0)){
        arrayElement = "yu-gi";
       }
       else if ((arrayElement % 2 === 0)&&(arrayElement % 5 === 0)){
        arrayElement = "yu-oh";
       }
       else if ((arrayElement % 3 === 0)&&(arrayElement % 5 === 0)){
        arrayElement = "gi-oh";
       }
       if (arrayElement % 2 === 0) {
        arrayElement = "yu";
       }
       else if (arrayElement % 3 === 0) {
        arrayElement = "gi";
       }
       else if (arrayElement % 5 === 0) {
        arrayElement = "oh";
       }

      yugiohArray[i] = arrayElement;
    }
   return yugiohArray;
  }
  
   else {
    let invalidInput = `invalid parameter: ${nParameterRawString}`;
     return invalidInput;
   } 

}
//...........................end of function..................
//Function call 2
let yugiohResult = checkYuGiOh("60");
console.log(yugiohResult);
//...........End of Assignment...........................................
let fname ="Christabel Anyango Onyango";
let whatsThis = "Made This 2 Fuctions";
console.log(fname + "  " +whatsThis);