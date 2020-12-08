// let a=10;
// console.log(a);
// let b=[1,2,3,4,5];
// console.log(b);
// console.log("hello world");
// //javascript
// //variables,arrays,fuctions,loops,classes,objects.
// c=20;//global variable
// var d=30;//function scope
// let e=50;//block scope

// function fun(){
//     let a=5;
//     if(a===5){
//         let f=10;
//         console.log("Inside",f);
//     }
//     console.log("Outside",f);
// }
// fun();

// function fun1(){
//     let a=5;
//     if(a===5){
//         var f=10;//let has a block scope and var has a function scope.
//         console.log("Inside",f);
//     }
//         console.log("Outside",f);
// }
// fun1();

//function declaration
// function fun2(){
//     let a=5;
//     if(a===5){
//          g=100;//let has a block scope and var has a function scope.
//         console.log("Inside",g);
//     }
//         console.log("Outside",g);
// }
// fun2();
// console.log("Global",g);
// square_root(10);

//function expression
// function square_root(n){
//     console.log(Math.sqrt(n));
//     console.log("In first sqrt Fn");
//     return "hello";
// }
// var sqrt_n=function(){
//     console.log("In second sqrt Fn");
//     return;
// }
// sqrt_n(10);

// a.push("banana"); //Insert at back
// a.pop(); //remove from back
// a.shift(); //remove from front
// a.unshift(); //insert at front
// a.indexof("kiwi"); // finds you the index


 //let arr=["apple","orange","guava"];
// console.log(arr);
// for(let i=0;i<5;i++)
// {
//     console.log(arr[i]);
// }

//  if(arr[0]=="apple"){
//     console.log("apple");
// }
// else{
//     console.log("no it is",arr[0]);
// }

//another way
// function Fruit(taste,color){
//     this.color=color;
//     this.taste=taste;
// }
// //new keyword

// let mango =new Fruit("sweet","yellow");
// let orange =new Fruit("sour","orange");




// //One Way
//   var apple={
//       taste:"sweet",
//       color:"red",
//   }
//   //Classs Keyword (ECMAScript 2015)
//   //class declaration
//   class FruitClass{
//       constructor(taste,color){
//           this.color=color;
//           this.taste=taste;
//       }
//   };
//   let kiwi = new Fruit("sour","green");
//   //class expression
//   let FruitClass2=class{
//       construction(taste,color){
//           this.color = color;
//           this.color = taste;
//       }
//   };
//   let kiwi2 =new Fruit("sour","green");






// one of way creating javascript(JSON) javascript object notation
/*var bird={
    x:100,
    y:20,
    color:"blue",
    eggs:[1,2,3,4],
    fly:function(){
        console.log("Bird is flying",this.x,this. y);
    }
};
//for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}
// for each loop
bird.eggs.forEach(function(val,idx)
{
   console.log(idx,val);
})*/


//strings
/*let p ='Arun';
let str = `this is ${p}'s string`;
console.log(str);
console.log(str.length);
console.log(p.length);
*/
//searching
// let s='this has some data here';
// let key = 'has';
// console.log(s.indexOf(key));
// let s1='this is a easy job';
// let s2='ab aab abbcd ba aab';
// console.log(s2.lastIndexOf('ab',16));
// console.log(s2.indexOf('ab',1));

// let mainStr="this is a long string";
// let smallStr = mainStr.slice(2,6)
// console.log(smallStr);
// let smallStr1 = mainStr.substring(7,10);
// console.log(smallStr1)
// let smallStr2 = mainStr.substr(1,9);
// console.log(smallStr2)

/*
let arr = [1,2,3]
//console.log(arr[1])
let arr2 = [1,'hello',false,[2,3]]
//console.log(typeof arr2[1]);
for (let i=0;i<arr2.length;i++){
    console.log(arr2[i])
}

for (let val of arr2){
    console.log(val);
}
for(let index in arr2){
    console.log(index);
    console.log(arr2[index]);
}
*/
/*let fruits=["apple","mango"]
//push and pop
fruits.push("melon","kiwi")
console.log(fruits)
fruits.pop()
console.log(fruits)

//shift and unshift
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi","grapes");
console.log(fruits);
*/
//slice
let notes =['do','re','mi','fa','so','la','ti','do'];
//console.log(notes.slice(4,6));
//console.log(notes);

//notes.splice(4);
//console.log(notes);
//let omit=notes.splice(4,2)
//console.log(omit);
//console.log(notes);


//splice -part 2
// notes.splice(0,3,'sa','re','ga');
// console.log(notes);

//concat
//console.log(notes.concat('sa','re','ga'))
//console.log(notes)

console.log(notes.concat(['sa','re','ga',]));
console.log(notes);































































