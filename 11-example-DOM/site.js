
var count = 1;

function addCat() {
    const ourDiv = document.getElementById("container");  // document=DOM ==> DOM.. find me "container"
    const node = document.createElement("p");  // create me <p></p>
    node.id = "p"+(count);  // define "p" with id ==> <p id="p1"></p>
    node.innerHTML = "Hello World" + count++;  // enter text to the p ==> <p id="p1">Hello World</p>
    ourDiv.appendChild(node);  // execute the code
}

function removeCat() {
    const ourDiv = document.getElementById("container");  // document=DOM ==> DOM... find me "container"
    const id = "p" + --count;  // define the id that needs to be deleted
    const pToRemove = document.getElementById(id);  // DOM... find the id the needs to be deleted
    ourDiv.removeChild(pToRemove); // delete the id from the container
}