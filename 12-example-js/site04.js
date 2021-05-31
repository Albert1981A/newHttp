var a = 100;

function f() {

    console.log("Printing var inside function:");
    console.log(a, typeof(a)); // print 100

    var b = 200
    console.log(b, typeof(b)); // print 200

    if(true) {
        var c = 300;
        console.log("Printing var inside if bar:");
        console.log(a, typeof(a)); // print 100
        console.log(b, typeof(b)); // print 200
        console.log(c, typeof(c)); // print 300
    }

    console.log("Printing var inside function:");
    console.log(a, typeof(a)); // print 100
    console.log(b, typeof(b)); // print 200
    console.log(c, typeof(c)); // print 300
}

f();

