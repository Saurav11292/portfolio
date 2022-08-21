
    // //   let js = 'amazing';
    // //  console.log(40  + 8 + 23 - 10);

    // //  console.log("jonas");
    // //  console.log(23);
      
    // // let firstName = "jonas";
    // // console.log(firstName);


    // let javascriptIsFun = true;
    // console.log(javascriptIsFun);

    // // console.log(typeof true);
    // console.log(typeof javascriptIsFun);
    // // console.log(typeof 23);
    // // console.log(typeof 'jonas');

    // javascriptIsFun = 'YES!';
    // console.log(typeof javascriptIsFun);
    
    // let year;
    // console.log(year);
    // console.log(typeof year);

    // year = 1991;
    // console.log(typeof year);
    // */
    // const now = 2030;
    // const ageSaurav = now - 1992;
    // const ageYash = now - 2002; 
    // console.log(ageSaurav, ageYash)
    // console.log(ageSaurav * 2, ageYash / 10, 2 ** 3);
    // //2 ** 3 - 2 means to the power of 3

    // // const firstName ='Saurav';
    // // const lastName = 'Verma';
    // // console.log(firstName + '' + lastName);

    // //math operators are executed before the comparision operator
    // //math operators are executed left to right

    // let x, y;
    // x = y = 25 - 10 - 5; //x = y = 10, from right to left
    // console.log(x. y);

    // const averageAge = (ageSaurav + ageYash) / 2;
    // console.log(ageSaurav, ageYash, averageAge);

 
// code challenge1
    // const markHeight = 78;
    // const markMass = 1.69;
    // const johnHeight = 92;
    // const johnMass = 1.95;
    
    // const markBMI = markMass / markHeight ** 2;
    // const johnBMI = johnMass / (johnHeight * johnHeight);
    // const markHigherBMI = markBMI > johnBMI;

    // console.log(markBMI, johnBMI, markHigherBMI);

// string and templet
    // const firstName = 'Saurav';
    // const job = 'ui developer';
    // const birthYear = 1991;
    // const year = 2037;

    // const saurav = "I'm" + firstName + ',a' + year - birthYear + ' years old ' + job + '!';
    // console.log(saurav);

    // const sauravNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
    // console.log(sauravNew);
    // multilinstring
    // console.log(`String with \n\ multiple \n\ lines`);
// taking desision: if/else Statement
    // if/else control structure
    // const age = 16;

    // if(age >= 18){
    //     console.log('Saurav can code');
    // } 
    // else {
    //     const yearsLeft = 18 - age;
    //     console.log(`Saurav is too young. Wait another ${yearsLeft} years :)`)
    // }

    // const birthYear = 2012;

    // let century
    // if(birthYear <= 2000)
    // {
    //     let century = 20;
    // }
    // else{
    //     let century = 21
    // }
    // console.log(century);

    // code challenge2
    // const markHeight = 78;
    // const markMass = 1.69;
    // const johnHeight = 92;
    // const johnMass = 1.95;
    
    // const markBMI = markMass / markHeight ** 2;
    // const johnBMI = johnMass / (johnHeight * johnHeight);
    // const markHigherBMI = (markBMI, johnBMI);

    // if(markBMI > johnBMI) {
    // console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
    // } 
    //     else {
    //         console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI})!`)
    //     }
    

    // typeconversion
    // from num to string
    // const inputYear = 1992;
    // console.log(Number(inputYear));
    // console.log(Number(inputYear) + 18);

    // typecoversion
    // console.log('I am ' + 29 + ' years old');

    // let n = '1' + 1; //this is equal to 11 because anything in the '' is a string.
    // n = n - 1; // 11-1 = 10
    // console.log(n); 

    // TRUELY AND FALSELY CONVERSION (this can be use when you are creating an budget app.)
    // note so when we use falsy value such as (0, '', undefined, null, NaN) the code directly runs else statement because the value is converted into boolean.
    // const money = 100;
    // if(money) {
    //     console.log("don't spend it all ;)");
    // }
    // else{
    //     console.log('you should get a job');
    // } 

    //EQUALITY OPERATORS: == (loose eqality operator it also does type coversion) VS === (its called the strict eqaulity operator so it only returns true when both values are exactly the same.)
    // const age = 18;
    // if(age === 18) console.log('You just became an adult (strict)');


    // if(age == 18) console.log('You just became an adult (loose)');
    
    // const favourite = Number(prompt("What's your favourite number?"));
    // console.log(favourite);
    // console.log(typeof favourite);

    // if(favourite === 23)
    // {// '23' == 23 (!== is the strict difference != is loose diference)
    //     console.log('Cool! 23 is an amazing number!');
    // } else if(favourite === 7){
    //     console.log('7 is also a cool number')
    // } else{
    //     console.log('number is not 23 or 7')
    // }

    // const hasDriverLicence = true;// A
    // const hasGoodVision = true // B

    // console.log(hasDriverLicence && hasGoodVision);
    // console.log(hasDriverLicence || hasGoodVision);
    // console.log(!hasDriverLicence);
    
    // const shouldDrive = hasDriverLicence && hasGoodVision

    // if(hasDriverLicence && hasGoodVision){
    //     console.log('Yash is able to Drive')
    // } else{
    //     console.log('Someone else should drive...')
    // }

    // const isTired = true;
    // // console.log(hasDriverLicence && hasGoodVision && isTired);

    // if(hasDriverLicence && hasGoodVision && !isTired){
    //     console.log('Yash is able to Drive')
    // } else{
    //     console.log('Someone else should drive...')
    // }
// CODING CHALLENGE 3
// const scoreDolphinTotal = (96 + 108 + 89)/3;
// const scoreKoalasTotal = (88 + 91 + 110)/3;
// console.log(scoreDolphinTotal, scoreKoalasTotal);

// if(scoreDolphinTotal > scoreKoalasTotal){
//     console.log('Dolphins wins')
// } else{
//     console.log('Koalas wins')
// }


// bonus
// const scoreDolphinTotal = (97 + 112 + 101)/3;
// const scoreKoalasTotal = (109 + 95 + 106)/3;
// console.log(scoreDolphinTotal, scoreKoalasTotal);

// if(scoreDolphinTotal > scoreKoalasTotal && scoreDolphinTotal >= 100) {
//     console.log('Dolphins got fucked');
// } else if(scoreKoalasTotal > scoreDolphinTotal && scoreKoalasTotal >= 100) {
//     console.log('Koalas got fucked');
// } else if (scoreDolphinTotal === scoreKoalasTotal && scoreDolphinTotal >= 100 && scoreKoalasTotal >= 100) {
//     console.log('BOTH GOT FUCKED');
// }else{
//     console.log('THE GAME IS A PIECE OF SHIT');
// }

// THE SWITCH STATEMENT
//    const day = 'tuesday';
   
//    switch(day) {
//     case 'monday':
//     console.log('go to gym');
//     console.log('chest');
//     break;
//     case 'tuesday':
//         console.log('back');
//         break
//     case 'wednesday':
//         console.log('write code');
//         break;
//     case 'thursday' :
//         console.log('DEAD');
//         break;
//     default:
//         console.log('not a valid day')        
//    }

// if(day === 'monday'){
//     console.log('go to gym');
// } else if(day === 'tuesday'){
//     console.log('back');
// } else if(day === "wednesday" || day === "thrusday"){
//     console.log('DEAD');
// }else{
//     console.log('not valid');
// }

// STATEMENT AND EXPRESSION. EXPRESSION HAS VALUE AND STATEMENT DOES NOT HAVE VALUES.
// CONDITIONAL STATEMENT
//    if else statement in one line
// const age = 15;
// age >= 18 ? console.log('i like to drink wine') : console.log('drink water');
// const age = 23;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);


// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// }else {
//     drink2 = 'water';
// }
// console.log(drink2);


// code challenge 4
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

