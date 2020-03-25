// Challenge 1 of 3 (Easiest | 8th Kyu)
// Given Array of all fam members ages (all whole numbers... 5 months = 0 ) in ANY order
var ages = [];

// Return NEW array with [Youngest Age, Oldest Age, Age difference btw Oldest & youngest]

// Pseudocode:
    // // Step one, create a new array to put in numbers we've found
    // var ageDiffArr = [];

    // // Find Youngest age (using Math.min and spread operator)
    // let youngest = Math.min(...ages);
    //     // and push into ageDiff / new array 
    //     ageDiffArr.push(youngest);
    //         // Check array
    //         console.log(ageDiffArr);
    // // Find Oldest age (using Math.max and spread operator);
    // let oldest = Math.max(...ages);
    //     // and push into ageDiff / new array 
    //     ageDiffArr.push(oldest);
    //         // Check array
    //         console.log(ageDiffArr);
    // // Subtract Oldest from Youngest age
    // let ageDiff = oldest - youngest;
    //     // and push into ageDiff / new Array
    //     ageDiffArr.push(ageDiff);
    //         // Check array
    //         console.log(ageDiffArr);

// Solution:
function differenceInAges(ages) {
    // Your code goes here
    // Step one, create a new array to put in numbers we've found
    var ageDiffArr = [];

    // Find Youngest age (using Math.min and spread operator)
    let youngest = Math.min(...ages);
    // and push into ageDiff / new array 
    ageDiffArr.push(youngest);

    // Find Oldest age (using Math.max and spread operator);
    let oldest = Math.max(...ages);
    // and push into ageDiff / new array 
    ageDiffArr.push(oldest);
    // Subtract Oldest from Youngest age
    let ageDiff = oldest - youngest;
    // and push into ageDiff / new Array
    ageDiffArr.push(ageDiff);

    console.log(ageDiffArr);
}

differenceInAges([82, 15, 6, 38, 35]);
differenceInAges([57, 99, 14, 32]);