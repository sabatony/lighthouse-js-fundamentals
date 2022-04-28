/*const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 20) {
  console.log(chorus);
  repeat+= 5;
}
console.log("Until the sun comes up!");
*/

const chorus = "Let's dance!";
let repeat = 10;
while (repeat >= 0) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat--;
}
console.log("Until the sun comes up!");