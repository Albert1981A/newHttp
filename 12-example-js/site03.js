
/* 
Operator "==="
1. Checks if their the same type
2. Checks if their the same value
*/

//abstract comparison
console.log("0==false", 0 == false) //==> Print true
console.log("undefined==false", undefined == false) //==> Print false
console.log("undefined==''", undefined == "") //==> Print false
console.log("undefined==null", undefined == null) //==> Print true
console.log("false==''", false == "") //==> Print true
console.log("0==''", 0 == "") //==> Print true

console.log("*********************");

//strict comparison
console.log("0===false", 0 === false) //==> Print false
console.log("undefined===false", undefined === false) //==> Print false
console.log("undefined===''", undefined === "") //==> Print false
console.log("undefined===null", undefined === null) //==> Print false
console.log("false===''", false === "") //==> Print false
console.log("0===''", 0 === "") //==> Print false