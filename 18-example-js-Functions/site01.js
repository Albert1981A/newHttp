// Inline function
const myFunc1 = function funcName(x){
    console.log(x*x);
}

myFunc1(1); //==> 1
myFunc1(2); //==> 4
myFunc1(4); //==> 16 
myFunc1(6); //==> 36

console.log("--------------------------");

// Anonymous function
const myFunc2 = function(x){
    console.log(x*x);
}

myFunc2(1); //==> 1
myFunc2(2); //==> 4
myFunc2(4); //==> 16 
myFunc2(6); //==> 36

console.log("--------------------------");

// Lambda expression
const myFunc3 = (x)=>{console.log(x*x);}

myFunc3(1); //==> 1
myFunc3(2); //==> 4
myFunc3(4); //==> 16 
myFunc3(6); //==> 36

//1:16