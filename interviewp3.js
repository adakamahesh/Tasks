// 11 -> how to find prime number in js ?
// -> prime numbers are those which are divide by itself or one
function isPrime(num){
  if(num <=1) return false;//one are below numbers are not prime numbers
  if(num===2||num===3) return true; // 2 and 3 are prime numbers

  if(num%2===0 || num%3===0) return false;

  for(i=5; i*i<=num; i+=6){
    if(num%i===0 || num%(i+2)===0) return false;
  }
  return true
}
console.log("check prime number are not :",isPrime(31));

// 12 -> how to find vowels from string in js?
function findVowels(str) {
    const matches = str.match(/[aeiouAEIOU]/g); // Regular expression to match vowels
    return matches || []; // Return matches or an empty array if none found
  }
  const inputString = "Hello World!";
  console.log("find vowels in a given string :",findVowels(inputString)); // Output: ['e', 'o', 'o']

// 13 -> how to reverse a string in js ?
function reverseString(str) {
    let reversed = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];   
    }
    
    return reversed;
  }
  const String = "Mahesh";
  const reversedString = reverseString(String);
  console.log("revers string is :",reversedString);  

// 14 -> how to find palindrome in js ?
/* -> a word, verse, or sentence (such a madam) or a number (such as 181)
 that reads the same backward and forward*/
 function isPalindrome(value){
  value=value.toString().toLowerCase().replace(/[^a-z0-9]/g,'')
  const len=value.length;

  for(i=0;i<len/2;i++){
    if(value[i] !== value[len-1-i]){
      return false;
    }
  }
  return true;
 }
 console.log('check palindrome are not :',isPalindrome('madam'));
 
// 15 -> how to swap two variables without using third variable
let a=10;
let b=5;
[a,b]=[b,a] 
console.log(`values of a is ${a} and value of b is ${b}`);
