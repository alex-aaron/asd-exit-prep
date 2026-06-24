/*
Create a function called changeLetters that takes in a 2D array of individual letters. 
This function should use nested for loops to access each letter in the 2D array.
If the current letter is NOT 'A' the function should reassign that index to 'A'.
If the letter is 'A', the function should reassign the index to 'AA'. The
function should return the array at the end.
*/

function changeLetters(array){

}

var exampleArray = [
  ['A', 'B', 'C'],
  ['D', 'A', 'F']
];

var result = changeLetters(exampleArray);

// console.log(result);
/*
SHOULD RETURN => 
[
  ['AA', 'A', 'A'],
  ['A', 'AA', 'A']
]
*/