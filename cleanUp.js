// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?")
}

nameQuestion()

//My code: I cleaned and shorted the code, there was unnessacary parameter line at the end.
function nameQuestion() {
}
console.log("Hello, what is your name?")

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//My code: I do not see any reasons to change the code all lines are functioning and have a purpose. (a ; can be added to the end of
// line 24 but it doe not change anything when running the code)

// EX 3:
func makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();
//My code: Minor changes with adding a space betwen the first "){" and moving the closing "}" down one time to make
//everything easier to read, also completed declaring the function structure (func => function).
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
//  EX 4:
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}`.)
  }
// My code: I was not able to correctly find how to fix the code above but with some Google research I found another way
// to write code in JS that would output the average.
const arr = [1, 2];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average)
