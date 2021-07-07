var countCheese = 1;
var burgerId = null;

function addCheese() {
    if (burgerId === null && countMeat > 1) {
        const meatDiv = document.getElementById("Meat");  // document=DOM ==> DOM.. find me "Meat"
        const node6 = document.createElement("div");  // create <div></div>
        burgerId = "meat1";
        node6.id = burgerId;  // define "div" with id ==> <div id="meat1"></div>
        node6.className = "Meat"; // define "div" with className ==> <div class="Meat"></div>
        const img6 = document.createElement("img"); // create <img>
        img6.src = "images/Burger-7.png"; // define "img" src ==> src="images/Burger-7.png" 
        img6.alt = "Burger-7"; // define "img" alt ==> alt="Burger-7" 
        node6.appendChild(img6);  // enter the image to the div ==> <div id="meat1" class="Meat"> <img src="images/Burger-7.png" alt="Burger-7"> </div>
        // meetDiv.appendChild(node5);
        const toChange = document.getElementById("meat1");
        meatDiv.replaceChild(node6, toChange);

    } else {
        const cheeseDiv = document.getElementById("Cheese");  // document=DOM ==> DOM.. find me "Cheese"
        const node1 = document.createElement("div");  // create <div></div>
        node1.id = "cheese" + (countCheese++);  // define "div" with id ==> <div id="cheese1"></div>
        node1.className = "Cheese"; // define "div" with className ==> <div class="Cheese"></div>
        const img1 = document.createElement("img"); // create <img>
        img1.src = "images/Burger-5.png"; // define "img" src ==> src="images/Burger-5.png" 
        img1.alt = "Burger-5"; // define "img" alt ==> alt="Burger-5" 
        node1.appendChild(img1);  // enter the image to the div ==> <div id="cheese1" class="Cheese"> <img src="images/Burger-5.png" alt="Burger-5"> </div>
        cheeseDiv.appendChild(node1);  // execute the code
    }
}

function removeCheese() {
    if (burgerId && countCheese <= 1) {
        const meatDiv2 = document.getElementById("Meat");  // document=DOM ==> DOM... find me "Meat"
        const divToRemove5 = document.getElementById(burgerId);  // DOM... find the id that needs to be deleted
        burgerId = null;
        const node5 = document.createElement("div");  // create <div></div>
        node5.id = "meat1";  // define "div" with id ==> <div id="meat1"></div>
        node5.className = "Meat"; // define "div" with className ==> <div class="Meat"></div>
        const img5 = document.createElement("img"); // create <img>
        img5.src = "images/Burger-6.png"; // define "img" src ==> src="images/Burger-6.png" 
        img5.alt = "Burger-6"; // define "img" alt ==> alt="Burger-6" 
        node5.appendChild(img5);  // enter the image to the div ==> <div id="meat1" class="Meat"> <img src="images/Burger-6.png" alt="Burger-6"> </div>
        meatDiv2.replaceChild(node5, divToRemove5);
    } else if (countCheese <= 1) {
        return null;
    } else {
        const cheeseDiv = document.getElementById("Cheese");  // document=DOM ==> DOM... find me "Cheese"
        const id = "cheese" + (--countCheese);  // define the id that needs to be deleted
        const divToRemove = document.getElementById(id);  // DOM... find the id the needs to be deleted
        cheeseDiv.removeChild(divToRemove); // delete the id from the container
    }
}

var countLettuce = 1;

function addLettuce() {
    const lettuceDiv = document.getElementById("Lettuce");  // document=DOM ==> DOM.. find me "Lettuce"
    const node2 = document.createElement("div");  // create <div></div>
    node2.id = "lettuce" + (countLettuce++);  // define "div" with id ==> <div id="lettuce1"></div>
    node2.className = "Lettuce"; // define "div" with className ==> <div class="Lettuce"></div>
    const img2 = document.createElement("img"); // create <img>
    img2.src = "images/Burger-2.png"; // define "img" src ==> src="images/Burger-2.png" 
    img2.alt = "Burger-2"; // define "img" alt ==> alt="Burger-2" 
    node2.appendChild(img2);  // enter the image to the div ==> <div id="lettuce1" class="Lettuce"> <img src="images/Burger-2.png" alt="Burger-2"> </div>
    lettuceDiv.appendChild(node2);  // execute the code
}

function removeLettuce() {
    if (countLettuce <= 1) {
        return null;
    } else {
        const lettuceDiv2 = document.getElementById("Lettuce");  // document=DOM ==> DOM... find me "Lettuce"
        const id = "lettuce" + (--countLettuce);  // define the id that needs to be deleted
        const divToRemove2 = document.getElementById(id);  // DOM... find the id the needs to be deleted
        lettuceDiv2.removeChild(divToRemove2); // delete the id from the container
    }
}

var countOnion = 1;

function addOnion() {
    const onionDiv = document.getElementById("Onion");  // document=DOM ==> DOM.. find me "Onion"
    const node3 = document.createElement("div");  // create <div></div>
    node3.id = "onion" + (countOnion++);  // define "div" with id ==> <div id="onion1"></div>
    node3.className = "Onion"; // define "div" with className ==> <div class="Onion"></div>
    const img3 = document.createElement("img"); // create <img>
    img3.src = "images/Burger-3.png"; // define "img" src ==> src="images/Burger-3.png" 
    img3.alt = "Burger-3"; // define "img" alt ==> alt="Burger-3" 
    node3.appendChild(img3);  // enter the image to the div ==> <div id="onion1" class="Onion"> <img src="images/Burger-3.png" alt="Burger-3"> </div>
    onionDiv.appendChild(node3);  // execute the code
}

function removeOnion() {
    if (countOnion <= 1) {
        return null;
    } else {
        const onionDiv2 = document.getElementById("Onion");  // document=DOM ==> DOM... find me "Onion"
        const id = "onion" + (--countOnion);  // define the id that needs to be deleted
        const divToRemove3 = document.getElementById(id);  // DOM... find the id the needs to be deleted
        onionDiv2.removeChild(divToRemove3); // delete the id from the container
    }
}

var countTomato = 1;

function addTomato() {
    const tomatoDiv = document.getElementById("Tomato");  // document=DOM ==> DOM.. find me "Tomato"
    const node4 = document.createElement("div");  // create <div></div>
    node4.id = "tomato" + (countTomato++);  // define "div" with id ==> <div id="tomato1"></div>
    node4.className = "Tomato"; // define "div" with className ==> <div class="Tomato"></div>
    const img4 = document.createElement("img"); // create <img>
    img4.src = "images/Burger-4.png"; // define "img" src ==> src="images/Burger-4.png" 
    img4.alt = "Burger-4"; // define "img" alt ==> alt="Burger-4" 
    node4.appendChild(img4);  // enter the image to the div ==> <div id="tomato1" class="Tomato"> <img src="images/Burger-4.png" alt="Burger-4"> </div>
    tomatoDiv.appendChild(node4);  // execute the code
}

function removeTomato() {
    if (countTomato <= 1) {
        return null;
    } else {
        const tomatoDiv2 = document.getElementById("Tomato");  // document=DOM ==> DOM... find me "Tomato"
        const id = "tomato" + (--countTomato);  // define the id that needs to be deleted
        const divToRemove4 = document.getElementById(id);  // DOM... find the id the needs to be deleted
        tomatoDiv2.removeChild(divToRemove4); // delete the id from the container
    }
}

var countMeat = 1;

function addMeat() {
    const meetDiv = document.getElementById("Meat");  // document=DOM ==> DOM.. find me "Meat"
    const node5 = document.createElement("div");  // create <div></div>
    node5.id = "meat" + (countMeat++);  // define "div" with id ==> <div id="meat1"></div>
    node5.className = "Meat"; // define "div" with className ==> <div class="Meat"></div>
    const img5 = document.createElement("img"); // create <img>
    img5.src = "images/Burger-6.png"; // define "img" src ==> src="images/Burger-6.png" 
    img5.alt = "Burger-6"; // define "img" alt ==> alt="Burger-6" 
    node5.appendChild(img5);  // enter the image to the div ==> <div id="meat1" class="Meat"> <img src="images/Burger-6.png" alt="Burger-6"> </div>
    meetDiv.appendChild(node5);  // execute the code
}

function removeMeat() {
    if (countMeat <= 1) {
        return null;
    } else {
        const meatDiv2 = document.getElementById("Meat");  // document=DOM ==> DOM... find me "Meat"
        const id = "meat" + (--countMeat);  // define the id that needs to be deleted
        const divToRemove5 = document.getElementById(id);  // DOM... find the id that needs to be deleted
        meatDiv2.removeChild(divToRemove5); // delete the id from the container
    }
}

var countKetchup = 1;

function addKetchup() {
    const ketchupDiv = document.getElementById("Ketchup");  // document=DOM ==> DOM.. find me "Ketchup"
    const node6 = document.createElement("div");  // create <div></div>
    node6.id = "ketchup" + (countKetchup++);  // define "div" with id ==> <div id="ketchup1"></div>
    node6.className = "Ketchup"; // define "div" with className ==> <div class="Ketchup"></div>
    const img6 = document.createElement("img"); // create <img>
    img6.src = "images/Burger-8.png"; // define "img" src ==> src="images/Burger-8.png" 
    img6.alt = "Burger-8"; // define "img" alt ==> alt="Burger-8" 
    node6.appendChild(img6);  // enter the image to the div ==> <div id="ketchup1" class="Ketchup"> <img src="images/Burger-8.png" alt="Burger-8"> </div>
    ketchupDiv.appendChild(node6);  // execute the code
}

function removeKetchup() {
    if (countKetchup <= 1) {
        return null;
    } else {
        const ketchupDiv2 = document.getElementById("Ketchup");  // document=DOM ==> DOM... find me "Ketchup"
        const id = "ketchup" + (--countKetchup);  // define the id that needs to be deleted
        const divToRemove6 = document.getElementById(id);  // DOM... find the id that needs to be deleted
        ketchupDiv2.removeChild(divToRemove6); // delete the id from the container
    }
}