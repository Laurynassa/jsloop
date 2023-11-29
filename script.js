"use strict";
//1.
// for (let index = 0; index < 11; ++index) {
//   console.log(index);
// }
//2.
// for(let index= 10; index>0;index--){
//   console.log(index)
// }
//3.
// for(let index=1;index<11 ;index+=2 ){
//   console.log(index)
// }
//4.
// for(let index=0;index<11 ;index++ ){
//   let skaiciai = index *2
//   console.log(skaiciai)
// }
//5.
// for(let index=0;index<6 ;index++ ){
//   if(index==3){
//     break
//   }else{
//   console.log(index)
//   }
// }
//6.
// for (let i = 0; i < 11; i++) {
//   console.log(`tekxtas ${i}`);
//   if (i === 7) {
//     continue;
//   }
//   console.log(i);
// }

// let person = {
//   name: "sam",
//   age: 33,
//   job: "officer",
//   hobbies: {
//     1: "swimming",
//     2: "reading",
//     3: "skating",
//   },
// };
// for (let key in person.hobbies) {
//   let hobby = person.hobbies[key];
//   console.log(`My hobby is: ${hobby}`);
// }
// for (let key in person) {
//   if (key === "hobbies") {
//     for (let hobby in person[key]) {
//       console.log(`My hobby is: ${person[key][hobby]}`);
//     }
//   }
//   console.log(key);
// }

//for in skaidre uzd
//1.
// const leFamily = {
//   me: 33,
//   father: 55,
//   mother: 53,
//   sister: 32,
//   brother1: 28,
//   brother2: 25,
//   aunt: 61,
//   uncle: 60,
//   cousin1: 37,
//   cousin2: 37,
//   grandfather1: 79,
//   grandmother1: 77,
//   grandfather2: 81,
//   grandmother2: 80,
//   cat: 3,
//   dog: 7,
//   parrot: 2,
// };
// let kiek = 0;
// for (let key in leFamily) {
//   if (leFamily[key] > 65) {
//     // console.log(key);
//     kiek++;
//     console.log(kiek);
//   }
// }

// 2.
// const leFamily = {
//   me: 33,
//   father: 55,
//   mother: 53,
//   sister: 32,
//   brother1: 28,
//   brother2: 25,
//   aunt: 61,
//   uncle: 60,
//   cousin1: 37,
//   cousin2: 37,
//   grandfather1: 79,
//   grandmother1: 77,
//   grandfather2: 81,
//   grandmother2: 80,
//   cat: 3,
//   dog: 7,
//   parrot: 2,
// };
// let lyginis = 0;
// let nelyg = 0;
// for (let key in leFamily) {
//   if (leFamily[key] % 2 === 0) {
//     // console.log(key);
//     lyginis++;
//   } else {
//     nelyg++;
//   }
// }
// console.log(`Nelyginiu skaiciu yra tiek ${nelyg}`);
// console.log(`Lyginiu skaiciu yra tiek ${lyginis}`);

//3.

// const numbers = [2, 34, 54, 67, 77, 1, 99];
// let kiek = 0;
// for (let i of numbers) {
//   kiek+=i;
// }
// console.log(kiek);

// const words = ["Geros", "dienytes", "skanios", "kavytes"];

// for (let word of words) {
//   console.log(word);
// console.log(word.length);
// }

// const words = ["Geros", "dienytes", "skanios", "kavytes"];

// for(let i of words){
//     let kiek = 0
//     for(let a of i ){
//         kiek++
//     }
//     console.log(kiek)
//     console.log(`${i}=${kiek},${i.length}`)
// }

// 15

// let skaicius = 1;

// while (skaicius < 11) {
//   console.log(skaicius);
//   skaicius++;
// }

// let skaicius = 10;
// while (skaicius > 0) {
//   console.log(skaicius);
//   skaicius--;
// }

// let skaicius = 1;
// while (skaicius <= 10) {
//   if (skaicius % 2 !== 0) {
//     console.log(skaicius);
//     skaicius++;
//   } else {
//     skaicius++;
//     continue;
//   }
// }

//17

// let sk = 0;
// let suma = 0;
// let vidurkis = 0;
// let skaic = 0;
// do {
//   skaic = parseInt(prompt(`Iveskite skaiciu`));
//   if (skaic >= 0) {
//     sk++;
//     suma += skaic;
//   } else {
//     vidurkis = suma / sk;
//     console.log(vidurkis);
//     break;
//   }
// } while (skaic >= 0);

// function getRandomToTen(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   const randomNum = getRandomToTen(1, 10);

//   do {
//     let num = parseInt(prompt("spek numeri nuo 1 iki 10: "))
//     if (num === randomNum) {
//       alert("you guessed it right!");
//       break;
//     } else if (num < randomNum) {
//       alert("too low. try again");
//     } else {
//       alert("too high. try again");
//     }
//   } while (true);

//20

//1

// let sk = -9;
// while (sk <= 9) {
//   console.log(sk);
//   sk++;
// }
//kitas var
// for (let i=-9; i<10; i++){
//   console.log(i)
// }
//2

// for (let i = -9; i < 10; i++) {
//     let kelimas = i ** 2;
//     console.log(kelimas);
//  }

//3
// for (let i = 10; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
//4
// let sk = prompt(`Iveskite skaiciu`);
// for (let i= 1; i <= sk; i++) {
//   console.log(i);
// }
//5
// let i = 0;
// const pradzia = parseInt(prompt(`Iveskite pradini skaiciu `));
// const pabaiga = parseInt(prompt(`Iveskite galutini skaiciu`));

// for (i = pradzia; i <= pabaiga; i++) {
//   console.log(i);
// }
//6
// const vardas = prompt(`Iveskite savo varda`);
// const kartai = parseInt(prompt(`Iveskite kiek kartu norite kartoti`));

// for (let i = 0; i < kartai; i++) {
//   console.log(vardas);
// }
//7
// const skaicius = parseInt(prompt(`Iveskite skaiciu`));

// for (let i = 1; i < 11; i++) {
//     let suma= skaicius*i
//   console.log(`${skaicius} * ${i} = ${suma}`);1
// }
//8

// const x = -10;
// let y = 7 * 2 + 5 * x - 3;
// console.log(y);

// const x = 10;

// while (y > 0) {
//   if (y > 0) {
//      y = 7 * 2 + 5 * x - 3;
//     console.log(y);
//   } else {
//     console.log(y);
//   }
// }
