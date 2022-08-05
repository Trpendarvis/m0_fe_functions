// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called.
// Call this function 3 times.
function printGreeting () {
}
  console.log("Hello friend")
  console.log("Hello friend")
  console.log("Hello friend")

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
var favoriteColor = "Blue"
console.log(`The best color is ${favoriteColor} because ${favoriteColor} is the best`);

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company,
// and the numbers will represent the minimum and maximum of a pay range for a posted job.
// The function should print out a sentence that includes the name of the company and the range itself
// (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function payRange (highRange, lowRange) {
var diff = highRange - lowRange
console.log("Now hiring");{
  var jobPosting = {
    companyName: "Money Co",
    highRange: 100000,
    lowRange: 80000,
  }
console.log(Object.values(jobPosting));
  console.log("difference",diff)
}
      }
payRange(100000, 80000);

// 4: Write a function that satifies the following interaction pattern:
function checkStock(num,food){
if (num === 4 && food === "Coffee"){
  console.log("Coffee is stocked");
} else if (num === 3 && food === "Tortillas"){
  console.log("Tortillas - running LOW");
} else if (num === 0 && food === "Cheese"){
  console.log("Cheese - OUT of stock!");
} else if (num === 1 && food === "Salsa"){
  console.log("Salsa - running LOW");
} else {
  console.log("Buy food from McD");
}
};

checkStock(4, "Coffee");
// => "Coffee is stocked"

 checkStock(3, "Tortillas");
 // => "Tortillas - running LOW"

 checkStock(0, "Cheese");
 // => "Cheese - OUT of stock!"

 checkStock(1, "Salsa");
 // => "Salsa - running LOW"
checkStock(5, "Burgers");
