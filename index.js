const rls = require("readline-sync");

let num = rls.question("Enter any number: ");
while (num < 1000) {
  console.log("Try again");
  num = Number(rls.prompt());
}
console.log("You won!");
