// 16 -> how to merge two arrays and sort them in js ? 
const arr1=[1,3,5,7]
const arr2=[2,4,6,8]
// const arr=arr1.concat(arr2)
// console.log(arr.sort());
const result=[...arr1,...arr2]
console.log('merge two arrays :',result.sort());

// 17 ->how to find factors of a given integer in js ?
function findFactor(num){
    const factors=[]
    for(let i=1;i<=num;i++){
        if(num%i===0){
            factors.push(i);
        }
    }
    return factors
}
console.log('factors of give num is :',findFactor(15));

// 18 -> how to make calculator in js?
function calculator(a,b,operator){
    switch (operator){
        case "+" :
            return a+b;
        case '-' :
            return a-b;
        case "*" :
            return a*b;
        case "/" :
            if(b!==0){
                return a/b;
            } else {
                return 'Error' 
            }
        default:
            return "Error: Invalid operator"
    }
}
console.log('calculator :',calculator(5,3,'-'));

// 19 -> how to compare two arrays are equal or not in js?
function arrayEqual(arr1,arr2){
    if(arr1.length !== arr2.length) return false;//check length

    for(i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false; //check elements
    }
    return true;
}
const array1=[1,2,3,4]
const array2=[4,3,2,1]
const array3=[2,3,4,1]
const array4=[1,2,3,4]
console.log('compare two arrays equal or not :',arrayEqual(array1,array4));

// 20 -> how to find intersection of two arrays or sets in js ?
function intersection(arr1,arr2){
    return arr1.filter((value)=> arr2.includes(value));
}
const arr3=[1,2,3,4,5,6]
const arr4=[5,6,7,8,2,9]
console.log('intersection of two arrays :',intersection(arr3,arr4));
