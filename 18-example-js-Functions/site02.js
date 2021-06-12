function callback(a, b){
    console.log(a+b);
}
callback(7,8);

console.log("--------------------");

function myCallback(x) {
    x();
}
myCallback(()=>{console.log("Moshe");});
myCallback(()=>{console.log("Yossi");});

console.log("--------------------");

function doSomething(myCallback2){
    myCallback2(10, 20, 30);
}
doSomething(function(a, b, c) {
    console.log("Hello World");
    console.log(a, b, c); //==> 10 20 30 
});