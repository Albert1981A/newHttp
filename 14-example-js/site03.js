// when using "use strict" we will need to define the variables. 
// if not will get error "not defined".
// "use strict" eliminates the use of the "window" element of the browser. 
"use strict"

tmp = 123;  // ==> Uncaught ReferenceError: tmp is not defined
console.log(tmp);
window.tmp = 234;
console.log(window.tmp);