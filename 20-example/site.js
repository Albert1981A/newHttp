var result1 = document.getElementsByTagName("a");
console.log("There are " + result1.length + " \"a\" tags");
document.getElementById("counter1").innerHTML = "There are " + result1.length + " \"a\" tags";

var result2 = document.getElementsByTagName("img");
console.log("There are " + result2.length + " \"img\" tags");
document.getElementById("counter2").innerHTML = "There are " + result2.length + " \"img\" tags";

var flag = true;

function btnHeader() {
    if (flag) {
        console.log("in fish");
        document.getElementById("myCaption").innerHTML = "<u>Fish and Chips</u>";
    } else {
        console.log("in jelly");
        document.getElementById("myCaption").innerHTML = "Jellyfish";
    }
    flag = !flag;
}

var flagLinks = true;

function btnLinks() {
    var arr = document.getElementsByTagName("a");
    for (let i = 0; i < arr.length; i++) {
        if (flagLinks) {
            arr[i].style.color = "orange";
        } else {
            arr[i].style.color = "blue";
        }
    }
    flagLinks = !flagLinks;
}



// function buttonClicked() {
//     var ourHeader = document.getElementById("container1");
//     var theOld = document.getElementById("myCaption");
//     var theNew = document.createElement("h1");
//     theNew.innerHTML = "<u>Fish and Chips</u>";
//     ourHeader.replaceChild(theNew, theOld);
// }



