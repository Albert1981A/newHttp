// Build a lottery program that gives the user five numbers between 1 and 100
// Plus the lucky number.

function lottery(length) {
    const numbers = [];
    for (let i = 0; i < length; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}
console.log(lottery(6));

console.log("-------------------------");

// Another way to write this method:

const lottery2 = (len) => {
    const numbers = [];
    for (let i = 0; i < len; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }
    return numbers;
}
console.log(lottery2(6));

