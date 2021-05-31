
console.log("Sample - 1");
var a = 5;
if(a) {
    console.log("Not a False Value"); //==> This will be printed
} else {
    console.log("False Value");
}

console.log("Sample - 2");
var b = 0;
if(b) {
    console.log("Not a False Value");
} else {
    console.log("False Value"); //==> This will be printed
}

console.log("Sample - 3");
var c = -5;
if(c) {
    console.log("Not a False Value"); //==> This will be printed
} else {
    console.log("False Value");
}

console.log("Sample - 4");
var d;
if(d) {
    console.log("Not a False Value");
} else {
    console.log("False Value"); //==> This will be printed
}

console.log("Sample - 5");
if (undefined) {
    console.log("undefined is true");
} else {
    console.log("undefined is false"); //==> This will be printed
}

console.log("Sample - 6");
if (null) {
    console.log("null is true");
} else {
    console.log("null is false"); //==> This will be printed
}

console.log("Sample - 7");
if (NaN) {
    console.log("NaN is true");
} else {
    console.log("NaN is false"); //==> This will be printed
}

console.log("Sample - 8");
if ("") {
    console.log("Empty string is true");
} else {
    console.log("Empty string is false"); //==> This will be printed
}

console.log("Sample - 9");
if (false) {
    console.log("false is true");
} else {
    console.log("false is false"); //==> This will be printed
}