function numOfImagesAndLinks() {
    const ourDiv = document.getElementsByClassName("box");
    var count = 0;
    for (let i = 0; i < ourDiv.length; i++) {
        count++;
    }
    
    document.getElementById("counter").innerHTML = "The site have " + count + " images and " + count + " links !";
    var element = document.getElementById("hh");
    element.classList.toggle("dark-mode");

    var element2 = document.getElementsByClassName("movieLink");
    for (let j = 0; j < element2.length; j++) {
        element2[j].classList.toggle("movieLink2");
    }
}