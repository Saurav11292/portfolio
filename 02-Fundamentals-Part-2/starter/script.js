// how to add strict mode ?
// simply add the string given below:
// 'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive');


// FUCTION: A PIECE OF CODE THAT WE CAN REUSE OVER AND OVER AGAIN. IT CAN HOLD HOLE LINE OF CODE WHERE AS IN VARIABLE IT HOLDS VALUE.
// function logger(){
//     console.log('my name is Saurav');
// }

// //for calling / running / invoking fuction
// logger();
// logger();
// logger();


// // FUCTION CAN RECIEVE AND STORE DATA
// function fruitProcesser(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcesser(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcesser(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//FUNCTION DECLARATION: we can call these before they are defined in the code.
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1992);
                                  //these are the two function in java script
                                  //experssion produce value, fuctions are just value like string, boolean, number. there for it can be stored in variable.

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1992);
console.log(age1, age2); 

//ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

//calculate who many years is left for retirement?
// const yearsUntilRetirement = (birthYear, firstName) => {
// const age = 2022 - birthYear;
// const retirement = 65 - age;
//this how we get the return value
// return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1992, 'Saurav'));


//function calling other function

const cutFruitPieces = function (fruit) {
    return fruit * 4;
}
function fruitProcesser(apples, oranges) 
    {
        const applepieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);
        const juice = `Juice with ${applepieces} apples and ${orangePieces} oranges`;
        return juice;
    }
console.log(fruitProcesser(2, 3));
    

// reviewing function
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
const age = calcAge(birthYear);
const retirement = 60 - age;
return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1992, 'Saurav')); 


// code test
const calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(3, 4, 5));

let scoreDolphins = calcAvg(44, 23, 71);
let scoreKoalas = calcAvg(65, 54, 49); 
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin win (${avgDolphins}) vs. (${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
    } else {
        console.log('no one win');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(234, 567)

//Test 2
scoreDolphins = calcAvg(85, 54, 41);
scoreKoalas = calcAvg(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas); 