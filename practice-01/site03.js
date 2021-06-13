// Receive a String sentence and cut it's words, than revers the order of those words.
// for example: Sara Shara Shir Samehach  ==>  Samehach Shir Shara Sara

function reverse(sentence) {
    console.log(sentence.split(" ").reverse().join(" "));
}
reverse("Sara Shara Shir Samehach");
