// let name = prompt("Enter Your Name");
// alert(name)

// let num = prompt("Enter a number")

// let num2 = Number(num)
// let bool = Boolean(num2)

// alert(typeof bool) //type

// alert(bool) //value

// let name1 = prompt("Enter the first name")
// let name2 = prompt("Enter the second name")
// let name3 = prompt("Enter the third name")

// if (name1 === name2) {
//     alert("correct")
// }
// else {
//     alert("wrong")
// }

// switch (name1) {
//     case name2:
//         alert("Name 1 Correct")
//         break;
//     case name3:
//         alert("Name 2 Correct")
//         break;
//     default:
//         alert("Wrong")
// }

// let num = 10
// let i = 0

// for (let i = 0; i <= num; i++) {
//     alert(i)
// }

// while (true) {
//     alert(i)
//     i++
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let newArr = []
//1. Loop through arr
//2. raise each of them to the power of 2
//3. push what you get to newArr

//Traditional For Loop

// for (let i = 0; i < arr.length; i++) {
//     //raise to the power of 2
//     let power = Math.pow(arr[i], 2)
//     //push the values to our array
//     newArr.push(power)
// }

//1. ES6 for-of

// for (let myArr of arr) {
//     //raise to the power of 2
//     let power = myArr ** 2
//     newArr.push(power)
// }

//2. forEach

// arr.forEach(function (myArr) {
//     let power = Math.pow(myArr, 2)
//     newArr.push(power)
// })

// console.log(newArr)


function myName() {
    let newfuncArr = []
    for (let myArr of arr) {
        let power = myArr ** 3
        newfuncArr.push(power)
    }
    return myfuncArr
}

let elem = document.getElementsByClassName("me")
let newElem = document.createElement("h1")
let text = document.createTextNode("Hey You")
newElem.appendChild(text)
document.body.appendChild(newElem)
