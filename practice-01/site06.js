// Add 8 hours to the current time and than reduce 20 minutes.
// Print the new time on the screen.

function newTime() {
    const timeNow = new Date();
    console.log(timeNow.toLocaleTimeString());
    timeNow.setHours(timeNow.getHours() + 8);
    console.log(timeNow.toLocaleTimeString());
    timeNow.setMinutes(timeNow.getMinutes() - 20);
    console.log(timeNow.toLocaleTimeString());
}
newTime();

console.log("---------------");

// Another way to write this method:

const myTime = () => {
    let timeNow2 = new Date();
    timeNow2.setHours(timeNow2.getHours() + 8);
    timeNow2.setMinutes(timeNow2.getMinutes() - 20);
    console.log(timeNow2.toLocaleTimeString());
}
myTime();
