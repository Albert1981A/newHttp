let a = 100;

function f() {

    console.log("Printing let inside function:");
    console.log(a, typeof(a)); // receiving a from outside - print 100

    let b = 200
    console.log(b, typeof(b)); // created b inside - print 200

    if(true) {
        let c = 300;
        console.log("Printing let inside if bar:");
        console.log(a, typeof(a)); // receiving a from outside - print 100
        console.log(b, typeof(b)); // receiving b from outside - print 200
        console.log(c, typeof(c)); // created c inside - print 300
    }

    console.log("Printing let inside function:");
    console.log(a, typeof(a)); // receiving a from outside - print 100
    console.log(b, typeof(b)); // created b inside - print 200
    console.log(c, typeof(c)); // c is created in the if bar (it is scoped) - NOT PRINTED - Error printed: ReferenceError: c is not defined
}

f();