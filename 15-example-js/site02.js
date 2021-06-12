function myFunc1() {
    console.log(this); //==> Print "window" - the object that invoked the function!
}
myFunc1(); //==> window.myFunc1();

console.log("-----------------------------------");

function myFunc2() {
    console.log(this); //==> Print "myFunc2" - js created a new object that invoked the function!
}
new myFunc2();

console.log("-----------------------------------");

function myFunc3() {
    console.log(this); //==> Print "myFunc3" - js created a new object that invoked the function!
}
let object = new myFunc3();
console.log(object); //==> Print "myFunc3"

console.log("-----------------------------------");

function myFunc4() {
    this.x = 123;
    console.log(this); //==> Print "myFunc4 {x: 123}" - js created a new object that invoked the function!
}
let object2 = new myFunc4();
console.log(object2); //==> Print "myFunc4 {x: 123}"

console.log("-----------------------------------");

function myFunc5() {
    this.x = 123;
    console.log(this); //==> Print "window" and "x: 123" is inside it - js created a new object that invoked the function!
}
myFunc5(); //==> window.myFunc5();