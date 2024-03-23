const readlineSync = require('readline-sync');

let n1 = readlineSync.question("Enter a value: ");

if (n1 % 2 == 0) {
    console.log("n1 is even");
} else {
    console.log("n1 is odd");
}
