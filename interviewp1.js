// 1 -> how to find the duplicate elements in a array in js ?
const arr=[1,5,3,2,5,8,6,2]
const duplicate=arr.filter((ele,index) =>arr.indexOf(ele) !== index)
console.log("duplicate vales of arr is :",duplicate);

// 2 -> how to find max values in a given array in js ?
const arrNum=[1,8,16,45,66,12,5]
const maxNum= (arr) => {
    return arr.reduce(function(pre,cur){
        return pre>cur?pre:cur
    })
}
console.log("max value of array :",maxNum(arrNum));

// 3 -> how to find the min value in a given array in js ?

const minNum = arrNum.reduce((pre, cur) => pre < cur ? pre : cur);
console.log("Min value of array :",minNum);

// 4 -> what is the difference between '==' and '===' in js ?

/* ->both are comparison operators
-> the difference between both the operators is that, '==' is used to 
compare values whereas, '===' is used to compare both values and types */
const x=6;
const y='6';
console.log('double equal :',x==y);
console.log('triple equal :',x===y);

// 5 -> how to find second largest value, and remove first largest value in array ?
const intArr=[2,8,9,7] 
const largest=Math.max(...intArr)
index=intArr.indexOf(largest)
intArr.splice(index,1)// it is used to remove the largest number
const secondLargest=Math.max(...intArr)
console.log('second largest number of array',secondLargest);