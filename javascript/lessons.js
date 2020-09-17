let array1 = [2, 4, 6, 8, 10]
let array2 = [1, 3, 5, 7, 9]
let array3 = ["good", "better", "best", "great", "trying"]
let array4 = ["bad", "worse", "worst"]

//1. concat Joins two or more arrays, and returns a copy of the joined arrays
let array_concat = array3.concat(array4)
console.log(array_concat)

//2. toString - convert arrays to string
console.log(array3.toString())

//3. Copies array elements within the array, to and from specified positions
//Copy the first two array elements to the last two array elements:
console.log(array3.copyWithin(2, 0))

//4. entries. Create an Array Iterator object, and create a loop that iterates each key/value pair
let array_entry = array3.entries()
let h1 = document.createElement("h1")
for (a of array_entry) {
    h1.innerHTML += a
}
document.body.appendChild(h1)

//5. Checks if every element in an array pass a test
function checkOdd(num) {
    return num % 2 !== 0
}
console.log(array1.every(checkOdd))

//6. Fill all the array elements with a static value:
console.log(array4.fill("still good"))

//7. Creates a new array with every element in an array that pass a test
let mixed_arr = [1, 4, 2, 7, 9, 11, 18]

console.log(mixed_arr.filter(checkOdd))

//8. Returns the value of the first element in an array that pass a test
console.log(mixed_arr.find(checkOdd))

//9. Returns the index of the first element in an array that pass a test
console.log(mixed_arr.findIndex(checkOdd))

//10. Calls a function for each array element
mixed_arr.forEach(function (arr) {
    console.log(arr)
})

//11. Creates an array from an object, string etc.
console.log(Array.from("ABCDE"))

//12. Check if an array contains the specified element
console.log(array3.includes("best"))

//13. Search the array for an element and returns its position
console.log(array3.indexOf("best"))

//14. Check whether an object is an array
console.log(Array.isArray(array3))

//15. Convert the elements of an array into a string
console.log(array3.join())

//16. Returns a Array Iteration Object, containing the keys of the original array
console.log(array3.keys())

//17. Search the array for an element, starting at the end, and returns its position
console.log(array3.lastIndexOf("best"))

//18. 	Creates a new array with the result of calling a function for each array element
console.log(array1.map(Math.sqrt))

//19. Remove the last element of an array and return it
console.log("pop", array1.pop())

//20. Adds new elements to the end of an array, and returns the new length
console.log(array1.push(11))

//21. Reduce the values of an array to a single value (going left-to-right)
console.log(array1.reduce(function (a) {
    return a ** 2
}))

//22. Reduce the values of an array to a single value (going right-to-left)

//23. 	Reverses the order of the elements in an array
console.log(array2.reverse())

//24. Remove the first item of an array and return it
console.log(array2.shift())

//25. Selects a part of an array, and returns the new array
console.log(array1.slice(1, 3))

//26. Checks if any of the elements in an array pass a test
console.log(array1.some(checkOdd))

// Others are
// -splice
// unshift
// valueOf