/*
parameters - 3 types

1)normal parameters
2)rest parameters
3)optional parameters


rest (or) parameter->
purpose--->to expand an array or object 


use->to create copies of a given objects



*/

let arr1 = [1,2,3];


let arr2= [...arr1,4,5,6]
console.log(arr2)



// for objects
let obj1 = {
    a:1,
    b:'hii'
}
let obj2 = {
    ...obj1,
    c:'hello'
}
console.log(obj2)


// for functions
function test(...a){
    console.log("values of a are",a)
}
test(1,2,3,4,5)

// optional parameters

// in javascript 2 ways for optional params

// 1) logical or               ||


function test(a,b){
    b = b || 0;
    console.log("value of a is" + a + "value of b is " + b )
}

test(100);

// using assignment operator

function test1(a,b=0){
    console.log("value of a is" + a + " value of b is " + b )
}
test1(1);




