const a = 100;

function f() {

    a = 140; // ERROR: ==> TypeError: Assignment to constant variable.
    // const won't let us change the object.
    // the code will fell here and won't go on...

    console.log("Printing const inside function:");
    console.log(a, typeof(a)); // receiving a from outside - print 100

    const b = 200
    console.log(b, typeof(b)); // created b inside - print 200

    if(true) {
        const c = 300;
        console.log("Printing const inside if bar:");
        console.log(a, typeof(a)); // receiving a from outside - print 100
        console.log(b, typeof(b)); // receiving b from outside - print 200
        console.log(c, typeof(c)); // created c inside - print 300
    }

    console.log("Printing const inside function:");
    console.log(a, typeof(a)); // receiving a from outside - print 100
    console.log(b, typeof(b)); // created b inside - print 200
    console.log(c, typeof(c)); // c is created in the if bar (it is scoped) - NOT PRINTED - Error printed: ReferenceError: c is not defined
}

f();

//2:44