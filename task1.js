const arr = [1, 5, 3, 1, 1, 5];

let uniqe = [...new Set(arr.sort())];
// console.log(uniqe);
// output of uniqe array = [1, 3, 5];



let output = uniqe.map((value,index) => { 
    // console.log("uniqe array value with index" , value, index);
  return [
    value,
    arr.filter((existingArrayElement,existingArrayIndex) => {
        // console.log("existingArrayElement with index",existingArrayElement,existingArrayIndex);
      return existingArrayElement === value;
    }).length,
  ];
});
console.log(output);

// let output=[]
// for(let i of arr){
//     console.log(output.indexOf(i));

//     if(output.indexOf(i) === -1){
//         output.push(i);//
//         // console.log(output);

//     }
// }
// console.log(output.sort());

// const set= new Set(arr)
// const myarr=[...set]
// const output=myarr.sort()
// console.log(output);
