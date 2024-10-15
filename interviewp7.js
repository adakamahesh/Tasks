// 27 -> program to find number of occurrences of a character in a string in js?
function occurrences(str,char){
    let count = 0;

    for(let i=0; i<str.length;i++){
        if(str[i] === char){
            count++;
        }
    }
    return count;
}
const string="aarush";
const character='a';
const occur =occurrences(string,character);
console.log(`The character '${character}' occurs '${occur}' times in string`);

// 28 -> program to print the table of any user defined number using function in js ?
const table=(number)=>{
    for(let i=1; i<=10;i++){
        const res=i*number;
        console.log(`${number} x ${i} = ${res}`);
    }
}
table(5);

// 29 -> program to check Armstrong number in js ?
// abcd=an+bn+cn+dn...
function isArmstrong(num){
    const numStr=num.toString()
    const numDigits=numStr.length;
    let sum=0;

    for(let i=0; i< numDigits; i++){
        const digit=parseInt(numStr[i]);
        sum=sum+Math.pow(digit,numDigits);
    }
    return sum===num;
}

const num=153;
if(isArmstrong(num)){
    console.log(`${num} is an Armstrong number`);
}else{
    console.log(`${num} is not an Armstrong number`);
    
}