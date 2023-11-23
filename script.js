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

//2.
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
