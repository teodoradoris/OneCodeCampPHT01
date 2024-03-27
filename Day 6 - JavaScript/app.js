//Array

// let fruit = "Mango";
// console.log(fruit);
// console.log(typeof(fruit));

let fruits = ["Mango","Banana", "Apple", "Cherry"];
console.log(fruits);
//Access element
console.log(fruits[2]);
console.log(fruits[7]); //undefined

//Length of the Index
console.log(fruits.length);

// Update elements
fruits[1] = 'Avocado';
console.log(fruits);

//Adding elements
//add element at the end of the array
fruits.push("Dewberry");
console.log(fruits);

//Adding elements
//add element at the beggining of the array
fruits.unshift("Banana");
console.log(fruits);

//Deleting elements
//Deleting element at the end of the array
fruits.pop();
console.log(fruits);

//Deleting elements
//Deleting element at the beggining of the array
fruits.shift();
console.log(fruits);

//Sorting
//Alphabetically
fruits.sort();
console.log(fruits);

//reverse
fruits.reverse();
console.log(fruits);

//Searching
//Index of Method
let index = fruits.indexOf('Avocado');
console.log("Index", index);

//Checking if an element is present
//Includes Method
console.log("Is Apple in fruits: ",fruits.includes("Apple"));

//Joining
// Join Method
console.log("Joined fruits:", fruits.join("-"));

//Slice Method
// let Slice_fruits = fruits.slice(1, 3);
// console.log(Slice_fruits);
console.log(fruits);

// Splice Method
// let splice_fruits = fruits.splice(0, 2);
// console.log(splice_fruits);

//Looping through the element
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

//For Loop
// for  (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// //Reverse For Loop
// for (let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

//For Of Loop
for (fruit of fruits){
    console.log(fruit);
}
