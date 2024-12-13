// Filtering an array
// write function that takes an array of numbers and returns a new array containing only even numbers

filterEventNumbers = (arr)=> {
    let evenNumbers = [];
    for (let i=0 ;i<arr.length ; i++){
        if (arr[i] % 2 ===0){
            evenNumbers.push(arr[i]);
        }
    }
    document.write(`the even number is ${evenNumbers}`)
}
filterEventNumbers([1,2,3,4,5,6,7,8,9,10]);

// find the largest number
// write function that takes an array of numbers and return the largest number in the array
maximumNumber = (arr)=> {
    let max = arr[0];
    for (let i=0 ;i<arr.length ; i++){
        if (arr[i] > max){
            max= arr[i];
        }
    }
    document.write(`<br>  the largest number is ${max}`);
}
maximumNumber([1,2,3,4,5,6,7,8,9,10,99]);


// reverse a string
// write function that take  astring as input and returns the same string but reversed
function stringReverse(string){
    let reversed ="";
    for (let i = string.length-1; i>=0 ; i--){
        reversed += string[i];
    }
    document.write(`<br> reverse string is ${reversed}`);
}
stringReverse("welcome");


// remove duplicates
// write function that takes array of numbers and returns a new array without duplicate numbers

let a =[1,1,2,3,3,4,4,4,5,6,7,7,7,8];
let b=[];
let length=a.length;

let ddd
a.sort();
for(let i=0 ; i<length; i++){
    if (a[i] !== ddd){
        b.push(a[i])
        ddd = a[i]
    }
}

console.log (b);