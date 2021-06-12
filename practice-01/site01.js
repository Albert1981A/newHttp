// Write a function that verifies that there is at least one @ within a String of an email
// for example - david@gmail.com = true
// for example - davidgmail.com = false

function isValidEmail(email) {
    return email.includes("@");
}
console.log(isValidEmail("david@gmail.com"));
console.log(isValidEmail("davidgmail.com"));

console.log("-------------");

// Another way to write this function:
const x = (email) => {return email.includes("@")}
console.log(x("david@gmail.com"));
console.log(x("davidgmail.com"));



