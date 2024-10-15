/*-> introduction
 ->let / const
 ->arrow functions
 ->classes
  ->destructuring
  ->spread operator
  ->map / filter */

/*
   -> Introduction
   ->what is javascript ?
   ->javascript  is a scripting language which is used on both server-side 
   and clint-side, we are using javascript in real-time networking apps,
   web/ mobile applications, command-line Tools and gamings
*/

/*
    ->let/const
    ->let is used and work as scope of the block it not work in the out of
    block
    ->const is used to constent values onely which is not replace the values
    of the const values  
*/

/*
    ->Arrow functions
    ->arrow function is a single line or double line of code. it can declared
    const */
    const test=(number1,number2)=>number1+number2
    console.log("addition of two numbers :",test(10,20));
    
/*
    ->Classes 
    ->classes have a constructor
    ->the main consept of the constructor is to insilize the object values*/
    class Add{
        constructor(number1,number2){
            this.number1=number1;
            this.number2=number2;
        }
        addition(){
            console.log(this.number1+this.number2);
        }
    }
    let ref=new Add(10,30)
    ref.addition();

/*   
    ->Async/Await
    ->the Async... Await syntax in Es6 use to handel the http promises 
    requests */

/* 
    ->Destructuring
    ->it is used to the destructur the object and array data by using key
    names */
    const person={
        name:'Mahesh',
        age:23,
        mail:"mahesh@gmail.com"
    }
    const {name,age,mail}=person
    console.log(mail);
    
/*
    ->Spread Operator
    ->spread operator takes an iterable objects and expands it into individual
    elements
    -> it is used to concat the two arrays */
    let arr1=[10,20,30]
    let arr2=[40,50,60]
    let arr=[...arr1,...arr2]
    console.log(arr);

/*
    ->Map/filter
    ->map is used to read the all elements of array and satsifie the condition
    and return the true otherwise false
    ->filter is used to filter the data of arrays */
    let filter=arr.filter((element)=>element>10)
    console.log(filter);

    let map=arr.map((element)=>element*2)
    console.log(map); 