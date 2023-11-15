//Prompt user for a list of froyo flavors seperated by commas

const userFroFlav = prompt("Please enter your choice of froyo flavors seperated by commas.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee"); 

//Split the string of flavors into and array of strings 
const stringArray = userFroFlav.split(",");

//Convert the array of strings into an array of flavors
const flavors = [vanilla, strawberry, coffee];
for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const flavors = parseInt(str);
    flavors.push(number);
}

//Console work 
console.log(flavors);

///What we know:
//when user views the browser console, they observe an object listing how many of each flavor they have ordered.What array method could make this possible?
//What is an object

//To Do: 
//Create an array with few more flavors
//Create an object listing and find the array method to make this visible on user's end in the borwser console
//Think about loops and what conditions/iterations need ro be met
//Create functions for each, and declare variables necessary for this
//An object is used to keep count of how many orders there are of each flavor
//the program correctly counts the number of each flavor in the users input 
//a prompt message for if the flavor is out (>98 for inventory because if the most we do is 2 scoops...
//the logic for counting the frequencies of elemnts in an array is organized into a function that returns a =n obkect) 
//The console output chnages depending on the user's input 

//Create Flavors Arrays
const FroyoFlavors = [
    {id: 1, name: "strawberry", price: 2.00, categoryId: 1, inventory: 100},
    {id: 2, name: "chocolate", price: 2.00, categoryId: 1, inventory: 100},
    {id: 3, name: "vanilla" ,  price: 2.00, categoryId: 1, inventory: 100},
    {id: 4, name: "coffee"  ,  price: 2.00 , categoryId: 1, inventory: 100},
    {id: 5, name: "pistachio" , price: 3.00, categoryId: 2, inventory: 100},
    {id: 6, name: "hazelnut" , price: 3.00, categoryId: 2, inventory: 100},
    {id: 7, name: "passionfruit", price: 2.50, categoryId: 3, inventory: 100},
    {id: 8, name: "jackfruit-mango", price: 2.50, categoryId: 3, inventory: 100},
    {id: 9, name: "juneplum", price: 2.50, categoryID: 3, inventory: 100}
];

//Define an array
let myFlavors = ["strawberry" , "chocolate" , "vaniila" , "coffee" , "pistachio" , "hazelnut" , "passionfruit" , "jackfruit-mango" , "juneplum"];

//Invoke array Method 
myFlavors.forEach(logFroyoFlavors);

//Functions for..
//listing names of flavors in an array 
let myFlavors = ["strawberry", "chocolate", "vanilla", "coffee", "pistachio", "hazelnut", "passionfruit", "jackfruit-mango", "juneplum"];

for (let i = 0; i <myFlavors.length; i++)  {
    console.log(myFlavor[i]);

}
function logmyFlavors
return 
//getting length (number of flavors)

//Array methods for 
//listing the flavors and prices of of respective flavors
//filtering out flavors by the 3 category ids: dairy, non-dairy, nuts 
//filtering out flavors by allergen
//filtering out flavors by allergenic ingredients 
//concat fro double scoops( for combinging two flavors of choice)
//Size : 1 scoop, double scoop (same flavor, 2 different flavors)
//counting the frequencies of elements in an array  and returns an object...how to make sure of this?

