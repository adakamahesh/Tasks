// 6 -> what is difference between filter() and  find() Method in js ?
const empArr=[
    {name:"mahesh",age:23},
    {name:"jay",age:20},
    {name:"mani",age:15},
    {name:"sai",age:13},
    {name:"aarush",age:5},
]
const filterItem=empArr.filter((item)=>item.age<=15)
console.log('filterItem is :',filterItem);
const findItem=empArr.find((item)=>item.age>15)
console.log('findItem is :',findItem);//it is used to match the first value of array it is stooped

// 7 -> find the missing numbers in a given array of 1 to 10 in js?
const arrNum=[1,3,5,8,10]
const missingArr=[]
const minValue=Math.min(...arrNum)
const maxValue=Math.max(...arrNum)
for(i=minValue; i<maxValue; i++){
    if(arrNum.indexOf(i)<0){
        missingArr.push(i)
    }
}
console.log('missing array',missingArr);

// 8 -> how to find even or odd numbers in a given array in js ?
const number=[1,2,4,3,9,15,16,18] 
const even=number.filter((item)=> item%2==0)
console.log('even values in arr is :',even);
const odd=number.filter((item)=> item%2!==0)
console.log('odd values in arr is :',odd);

//9 -> how to find the sum of all elements in a given array in js ?
const arr=[1,5,9,4,6]
const sumOfAll= arr.reduce((pre,cur) => pre+cur)
console.log('sum of all elements is :',sumOfAll);

// 10 -> how to find factorial(n!) of a given number in js ?
function factorial(n){
    if(n<0) return 'factorial not defined for negative numbers';
    let result=1;

    for(let i=1; i<=n ; i++){
        result=result*i;
    }
    return result;
}
console.log("factorial number:",factorial(4));
