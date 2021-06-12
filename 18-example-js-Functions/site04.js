function showTime() {
    let time = new Date();
    console.log(time.toLocaleTimeString());
}
showTime();

console.log("----------------------");

setInterval(()=>{
    let time2 = new Date();
    console.log(time2.toLocaleTimeString());
}, 1000);