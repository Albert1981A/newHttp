// Get the button object
const myButton1 = document.getElementById("myBtn1");

// Add click Event to the button
myButton1.addEventListener("click", function(){
    this.style.backgroundColor = "green";
});

// this and that
const myButton2 = document.getElementById("myBtn2");
myButton2.addEventListener("click", function() {
    const that = this;
    setTimeout(function() {
        that.style.backgroundColor = "purple";
    }, 2000);
});

// the bind solution
const myButton3 = document.getElementById("myBtn3");
myButton3.addEventListener("click", function() {
    setTimeout(function() {
        this.style.backgroundColor = "pink";
    }.bind(this), 2000);
});

// Lambda solution
const myButton4 = document.getElementById("myBtn4");
myButton4.addEventListener("click", function() {
    setTimeout(() => {
        this.style.backgroundColor = "blue";
    }, 2000);
});