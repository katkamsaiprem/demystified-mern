//5/12/25


// getElementById
const unOrderedList = document.querySelector(".unordered-list");
// console.log(unOrderedList);

const firstListItem = document.querySelector(".list-item");
// console.log(firstListItem);

const allListItems = document.querySelectorAll(".list-item");
//console.log(allListItems); 

// console.log(typeof allListItems);
// console.log(allListItems.length);


const listItemsArray = [];  // Initializing 'listItemsArray' variable to an empty array.

for(let key = 0; key < allListItems.length; key++){
    // console.log(key);
    const listItem = allListItems[key]; // allListItems[0], allListItems[1], allListItems[2]
    // console.log(listItem);
    listItemsArray.push(listItem)
}

// console.log(listItemsArray);


// for(initialization; condition; Operation){
//     // Lines of Instructions
//     // Repeated Logic
// }


// console.log(allListItems[0]);
// console.log(allListItems[1]);
// console.log(allListItems[2]);




// num ++ => num+1 && -- => num-1
// let num = 1;
// num = num++; // post-increment->increments variable value after operation
// console.log(num);

// num = ++num; // pre-increment->first increments variable value and then does some operations
// console.log(num);




/**
 * 1. Selecting html elements via id, class -> querySelector -> first element
 * 2. Selecting all html elements having/posses id/class -> querySelectorAll -> NodeList -> Object {0/1/etc., -> htmlelement}
 * 3. array => initialization
 * 4. for loop
 * 5. post increment vs pre increment
 * 6. operation on array: push, at
 * 7. Object - > length, accessing the object values through ObjectName["key"] ObjectName.key
 * 8. if condition
 * 9. truthly, falsy values
 */



const user = {};
const evenNums = [];
let username = "";

if(user){
    console.log(user);//true-objects are always truthy in js
}

if(evenNums){
    console.log(evenNums);//true-arrays are objects , so always truthy
}

if(username){
    console.log(username);//false
}

// type coersion vs type convertion


//Behavior of if condition with numbers

if(0){
    console.log("Inside 0")//false
}

if(-1){
    console.log("Inside -1")//true-all non-zero numbers are truthy
}

if(1){
    console.log("Inside 1")//true
}

//Behavior of if condition with strings

if(""){
    console.log("Inside Empty String")//false
}

if("h"){
    console.log("Inside h string")//true-all non-empty strings are truthy
}