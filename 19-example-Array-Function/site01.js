const arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 101));
}
console.log(arr);

console.log("-----------------------------");

const evens1 = [];
for (let j = 0; j < arr.length; j++) {
    if (arr[j]%2==0) {
        evens1.push(arr[j]);
    }
}
console.log(evens1);

console.log("-----------------------------");

let evens2 = [];
//evens2 = arr.filter(function(x) {return x % 2 === 0;});
evens2 = arr.filter(x => x % 2 === 0);

console.log(evens2);