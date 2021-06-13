// Write a program that shows the user the clock in digital format of - HH:MM:SS

function beautifyTime(myTime) {
    console.log(myTime.getHours() + ":" + myTime.getMinutes() + ":" + myTime.getSeconds());
}
beautifyTime(new Date());

console.log("----------------");

// Another way to write this method:

const beautifyTime2 = (myTime2) => {
    console.log(myTime2.getHours() + ":" + myTime2.getMinutes() + ":" + myTime2.getSeconds());
}
beautifyTime2(new Date());