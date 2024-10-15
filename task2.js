const fruits=["Banana","Orange","Apple","Mango"]

// length ->it is used to find the length of array
console.log("length of fruits is :",fruits.length);
console.log("2 element of fruits is :",fruits[1]);
console.log("last element of the fruits :",fruits[fruits.length-1]);
fruits[0]="Kiwi"//it is renaming the first element of array 
console.log(fruits);
// indexof() -> it is used to find the array element position by identifing by index number  
console.log('find index of apple :',fruits.indexOf('Apple'));//if it is present at array show index number
console.log('find index of apple :',fruits.indexOf("kiwi"));//if it is not present at array show -1 

// pop() -> it is used to remove the last element of the array
fruits.pop()
console.log('pop remove last element :',fruits);

//push() -> it is used to add the new element of the array (end of the array)
fruits.push("mango","kiwi")
console.log('push add last element :',fruits);

//shift() -> it is used to remove the first element of the array
fruits.shift()
console.log('shift remove first element :',fruits);

//unshift() -> it is used add the new element of array (start of the array)
fruits.unshift("Banana")
console.log('unshift add first element :',fruits);

//splice() -> it is used to add new element of the array in particular position
fruits.splice(2,0, "Lemon" );//2 is position and 0 is how meany element delete in the array 
console.log("splice :",fruits);

//slice() -> it is used to delete the element of the array in particular position
fruits.slice(2) //pending
console.log('slice :',fruits);
 

//concat() -> it is used to comboin the two arrays 
const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
const arr=arr1.concat(arr2);
console.log('concat the two arrays :',arr);

//copywithin() -> it is used to copies array elements to the another position
fruits.copyWithin(0,2)
console.log(fruits);

//flat() -> it is used to creates new array with sub-array elements concatenated
const data=[[1,2],[3,4],[5,6]]
console.log("flat is concat the sub arrays :",data.flat());

//every() -> it is used to check the every element of array to the condition all elements are sastefing  it will be return true other wise it returns false
const isBelowThreshold = (currentvalue)=> currentvalue<40;
const array1=[1,30,6,15,28];
console.log(array1.every(isBelowThreshold));

//some() -> it is used to check the every element of array to the condition at list one elements are sastifie it will be return true other wise it return false          
const even=(element)=> element % 2 ===0;
console.log(array1.some(even));


//filter() -> it is used to filter the every element of array to the condition it returns filtered elements onely
const fruits1=["Banana","Orange","Apple","Mango","kiwi"]
function word(word) {
    return word.length>=5;
}
console.log("filtering fruits1 :",fruits1.filter(word));

// map() -> it is used to check the every element of array to the condition it returns the condition sastifie element remaning  elements replace undefine
const array2=[1,10,6,8,12]  
const map=array2.map((i)=> i*2)
console.log("Map elements :",map);
                                               
// forEach() -> it is used to like a for loop it is used to read the every  element of the array
array2.forEach((element)=> console.log('forEach elements :',element));



