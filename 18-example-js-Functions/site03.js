function doSomeThing(callback) {
    callback(new Cat("Mitzi", 4, "Black"));
    callback({name:"Pitzi", age:5, color:"White"});
}

doSomeThing(function(cat) {
    console.log("Hello World");
    console.log(cat.name, cat.age, cat.color);
});