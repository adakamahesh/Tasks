// object.keys() -> it is used to find the keys names

const obj={
    a:'mahesh',
    b: 22,
    c: true,
};
console.log("keys of obj :",Object.keys(obj));

const arr=['a','b','c']
console.log("keys of arr :",Object.keys(arr));

console.log("keys of foo0 :",Object.keys("foo0"));

console.log(Object.keys(100));

// object.values() -> it is used to find the keys values

console.log("key values of obj :",Object.values(obj));

console.log("key values of arr :",Object.values(arr));

console.log("key values of foo :",Object.values("foo"));

// forin() -> 

for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
}

for (let index in arr) {
    console.log(index, arr[index]); 
  }  