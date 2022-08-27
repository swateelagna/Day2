//q1
let string_1 =
  "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(string_1);
//q2
let string =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"  by Mother Teresa";
console.log(string);
//q3
let num = 10;
let num2 = typeof num;
console.log(num == num2);
//q4
let gNum = "9.81";
let numFloat = parseFloat(gNum);
console.log(numFloat == 10);
console.log(Math.round(numFloat));
//q5
let str_1 = "jargon";
let str_2 = "python";
console.log(str_1.match("on"));
console.log(str_2.match("on"));
//q6
let string_N = "I hope this course is not full of jargon.";
console.log(string_N.search("jargon"));
//q7
const number = Math.random() * 100;
console.log(number);
//q8
const number_1 = Math.random() * 50 + 50;
console.log(number_1);
//q9
const num_Q9 = Math.random() * 250;
console.log(num_Q9);
//q10
let stringJ = "JavaScript";
let randomNum = Math.random() * 9;
let numberFloor = Math.floor(randomNum);
console.log(stringJ[numberFloor]);
//q11
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");
//q12
let stringS =
  "'You cannot end a sentence with because because because is a conjunction'";
console.log(stringS.substring(0, 32) + stringS.substring(55, 73));
//55,72 32,54
