// Check if a word contains in it another word
// Also pick up the position of the start of the word and the length

function isExist(str1, str2, position, length) {
    console.log(str1, str2.substr(position, length));
    return str1 === str2.substr(position, length);
}
console.log(isExist("Mos", "Moshe", 0, 3));
console.log(isExist("osh", "Moshe", 1, 3));
console.log(isExist("osh", "Moshe", 0, 3));

console.log("------------");

// another way to write this method:

const x = (str1, str2, position, length) => {
    console.log(str1, str2.substr(position, length));
    return str1 === str2.substr(position, length);
}
console.log(x("Mos", "Moshe", 0, 3));
console.log(x("osh", "Moshe", 1, 3));
console.log(x("osh", "Moshe", 0, 3));