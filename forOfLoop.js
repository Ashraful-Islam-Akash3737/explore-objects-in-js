const numbers = [26, 37, 48, 59, 29, 93];

// ---------------with for loop ---------------
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}



// --------------with for of loop ----------------
for(let number of numbers){
    console.log(number);
}