"use strict";

var Cat = (function() { // Belong to window
    function Cat(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    return Cat;
})();