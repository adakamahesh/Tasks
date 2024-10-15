// 21 -> how to find union of two arrays in js ?
const arr1=[1,3,5,6,8]
const arr2=[2,4,1,5,7]
const union=[...arr1,...arr2]
console.log("union of two arrays :",[... new Set(union.sort())]);

// 22 -> how to convert celsius to fahrenheit or fahrenheit to celsius in js ?
/*-> celsius to fahrenheit formula
       fahrenheit = celsius * 1.8 + 32 
  -> fahrenheit to celsius formula
       celsius= 5/9 x (fahrenheit-32)*/
 function celsiusToFahrenheit(celsius){
    return (celsius * 9/5)+32;
 }
 function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
 } 
 
 console.log('celsiusToFahrenheit :',celsiusToFahrenheit(25));
 console.log('fahrenheitToCelsius :',fahrenheitToCelsius(77));
 
 // 23 -> how to convert kilometer(km) to into miles in js ?
 /*   1km =0.621371
       miles=kilometer*factor  */
function kilometerToMiles(kilometer){
    return kilometer*0.621371;
}
console.log('kilometerToMiles :',kilometerToMiles(5));

// 24 -> program to convert first letter of a string in to uppercase in js ?
function capitalizeFirstLetter(str){
    if (!str) return '';
    return str.charAt(0).toUpperCase()+str.slice(1);
}
console.log('capitalizeFirstLetter :',capitalizeFirstLetter("maheshbabu"));

// 25 -> program to find fibonacci  sequence in js ?
function fibonacci(n){
    const sequence =[0,1];

    for(i=2;i<n;i++){
        sequence.push(sequence[i-1]+sequence[i-2])
    }
    return sequence;
}

console.log('fibonacci :',fibonacci(10));
