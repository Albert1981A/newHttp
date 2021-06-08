
(function myFunc() {
    var x = 123;
    console.log(window.x); //==> undefined

    function f() {
        console.log("I'm inside f !");
    }
    window.f(); // ==> Uncaught TypeError: window.f is not a function
})();

// myFunc(); ==> no need to invoke the function