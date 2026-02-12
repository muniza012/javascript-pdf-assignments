////////////////////// ------Chap 1 "ALERTS"-------

//////////  Ques # 1

// alert('Welcome to this website')

//////////  Ques # 2

// alert('Error!Please enter a valid password')

//////////  Ques # 3

// alert('Welcome to JS Land...\nHappy Coding!')

//////////  Ques # 4

// alert('Welcome to JS Land')
// alert('Happy Coding!\nPrevent this page from creating additional dialogs')

//////////  Ques # 5

// console.log("Hello... I can run JS through my web browser's console");

////////////////////// ------Chap 2 "VARIABLES FOR STRINGS"-------

//////////  Ques # 1

// let username;

//////////  Ques # 2

// let myName='Muniza Iqbal';

//////////  Ques # 3

// let message='Hello World';
// alert(message);

//////////  Ques # 4

// let name='John Doe';
// let age= 15;
// let education='Certified Mobile Application Development';

// alert(`${name}
// ${age} years old
// ${education}`);

//////////  Ques # 5

// let word=`pizza\npizz\npiz\npi\np`
// alert(word);

//////////  Ques # 6

// let email='abc@gmail.com';
// alert('My email address is'+' ' + email);

//////////  Ques # 7

// let book= 'A smarter way to learn Javascript'
// alert('I am trying to learn from the Book' + " " + book);

//////////  Ques # 8

document.writeln(`<h2>Yeah I can write HTML content through Javascript</h2>`);

//////////  Ques # 9

// alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬')

////////////////////// ------Chap 3 "VARIABLES FOR NUMBERS"-------

//////////  Ques # 1

// let age=20;
// alert('I am'  + " " + age + " "  + 'years old.' );

//////////  Ques # 2

// let visited=14;
// alert('You have visited this page' + " "+ visited + " " + 'times');

//////////  Ques # 3

let birthYear = 2005;
document.writeln(`<p>My birth year is ${birthYear}</p>
<p>Data type of my declared variable is number </p>`);

//////////  Ques # 4

let name = "John Doe";
let product = "T-shirts (s)";
let quantity = 3;
document.writeln(
  `<p><b>${name}</b> has ordered <b>${quantity} ${product}</b> from XYZ Clothing store”.</p>`,
);

////////////////////// ------Chap 4 "VARIABLE NAMES: LEGAL & ILLEGAL"-------

//////////  Ques # 1

// let name, age, email;

//////////  Ques # 2

//legal names:
// let user_info ,age ,$salary , user123 ,name;

//illegal names:
// let 123name,user-profile,my email,@practice;

//////////  Ques # 3

console.log(`A heading stating “Rules for naming JS variables” `);
console.log(
  `Variable names can only contain _ , characters , $ and numbers in the middle and end.`,
);
console.log(`Variables must begin with a $name, _name or name.`);
console.log(`Variable names are case sensitive`);
console.log(`Variable names should not be JS keywords`);

////////////////////// ------Chap 5 "MATH EXPRESSIONS"-------

//////////  Ques # 1
// let a=3;
// let b=5;
// let result=a+b;
// console.log(`sum of ${a} and ${b} is ${result}`);

//////////  Ques # 2
// let a=3;
// let b=5;
// let result=a-b;
// console.log(`subtraction of ${a} and ${b} is ${result}`);

// let a=3;
// let b=5;
// let result=a*b;
// console.log(`multiplication of ${a} and ${b} is ${result}`);

// let a=3;
// let b=5;
// let result=a/b;
// console.log(`division of ${a} and ${b} is ${result}`);

// let a=3;
// let b=5;
// let result=a%b;
// console.log(`modulus of ${a} and ${b} is ${result}`);

//////////  Ques # 3
// let a;
// console.log(`Value after variable declaration is: ${a}`);
// a=5;
// console.log(`Initial value: ${a}`);
// a +=1;
// console.log(`Value after increment is: ${a}`);
// a +=7
// console.log(`Value after addition is: ${a}`);
// a -=1;
// console.log(`Value after decrement is: ${a}`);
// a %=3;
// console.log(`The remainder is ${a} `);

//////////  Ques # 4
// let ticketPrice = 600;
// let totalCost = ticketPrice * 5;
// document.writeln(
//   `<h3>Total cost to buy 5 Tickets to a movie is ${totalCost}PKR</h3>`,
// );

//////////  Ques # 5
let num = 4;
for (let i = 1; i <= 10; i++) {
  document.writeln(`
    ${num} x ${i} = ${num * i}<br>
`);
}

//////////  Ques # 6
let celsius = 25;
document.writeln(` <p>${celsius}C is ${(celsius * 9) / 5 + 32}F</p> `);
let fahrenheit = 70;
document.writeln(` <p>${fahrenheit}F is ${((fahrenheit - 32) * 5) / 9}C</p> `);

//////////  Ques # 7

let item1Price = 650;
let item1Quantity = 3;
let item2Price = 100;
let item2Quantity = 7;
let shippingCharges = 100;
let item1Total = 650 * 3;
let item2Total = 100 * 7;

document.writeln(`<h2>Shopping Cart</h2>
<p>price of item 1 is ${item1Price}</p>
<p>Quantity of item 1 is ${item1Quantity}</p>
<p>price of item 2 is ${item2Price}</p>
<p>Quantity of item 2 is ${item2Quantity}</p>
<p>Shipping Charges ${shippingCharges} </p><br>
<p>Total cost of your order is ${item1Total + item2Total + shippingCharges}</p>`);

//////////  Ques # 8
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.writeln(`<h3>Marksheet</h3>
  <p>Total Marks ${totalMarks}</p>
<p>Marks Obtained ${marksObtained}</p>
<p>Percentage ${percentage}</p><hr>`);

//////////  Ques # 9
let usDollars = 10;
let saudiRiyals = 25;
let totalCurrency = 10 * 104.8 + 25 * 28;

document.writeln(`<p>Total currency is ${totalCurrency}<p/><hr>`);

//////////  Ques # 10
let number = 4;
let exp = ((number + 5) * 10) / 2;
console.log(exp);

//////////  Ques # 11
let currentYear = 2026;
let birth_Year = 2000;
let age = currentYear - birth_Year;
document.writeln(`<p>Current Year: ${currentYear}</p>
  <p>Birth Year: ${birth_Year}</p>
  <p>Your Age is: ${age}</p>`);

//////////  Ques # 12
let r = 20;
let circumference = 2 * 3.142 * r;
let area = 3.142 * r ** 2;
document.writeln(`<p>Radius of a circle: ${r}</p>
  <p>The circumference is: ${circumference}</p>
  <p>The area is: ${area}</p>`);

//////////  Ques # 13
let favSnack = "waffer";
let currentAge = 20;
let maxAge = 50;
let amountPerDay = 2;
let totalSnack = (maxAge - currentAge) * amountPerDay;
document.writeln(
  `<p>You will need ${totalSnack} waffers to last you until the ripe old aage of ${maxAge}</p>`,
);

////////////////////// ------Chap 6-9 "MATH EXPRESSIONS"-------

//////////  Ques # 1
let value = 10;
document.writeln(`<h4>Result:</h4>
  <p>The value of a is ${value}<p/>
  <p>The value of ++a is ${++value}<p/>
  <p>Now the value of a is ${value}<p/>
  <p>The value of a++ is ${value++}<p/>
  <p>Now the value of a is ${value}<p/>
  <p>The value of --a is ${--value}<p/>
  <p>Now the value of a is ${value}<p/>
  <p>The value of a-- is ${value--}<p/>
  <p>Now the value of a is ${value}<p/>
  `);
//////////  Ques # 2

// let c = 2;
// let d = 1;
// console.log(--c);
// console.log(--c - --d);
// console.log(--c - --d + ++d);
// console.log(--c - --d + ++d + d--);
// console.log("ra is -2 d is -1 result is -1");

//////////  Ques # 3
// let userName=prompt('what is your name');
// alert(`welcome ${userName}`)

//////////  Ques # 4

// let inputNum = +prompt("Enter a number");

// if (!inputNum) {
//   inputNum = 5;
// }
// for(let i=1;i<=10;i++){
// document.writeln(`
//   ${inputNum} x ${i} = ${inputNum * i}<br>

// `);
// }

//////////  Ques # 5
// let subject1 = prompt("Enter first subject name:");
// let subject2 = prompt("Enter second subject name:");
// let subject3 = prompt("Enter third subject name:");
// let marks1 = +prompt(`Enter obtained marks for ${subject1} :`);
// let marks2 = +prompt(`Enter obtained marks for ${subject2} :`);
// let marks3 = +prompt(`Enter obtained marks for ${subject3} :`);
// let total_Marks=300;
// let obtMarks=marks1+marks2+marks3;
// let totalPercentage=obtMarks/total_Marks*100;
// document.writeln(`<table>
//   <tr>
//     <th>Subject</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th>
//   </tr>
//   <tr>
//     <td>${subject1}</td>
//     <td>100</td>
//     <td>${marks1}</td>
//     <td>${marks1/100*100}%</td>
//   </tr>
//    <tr>
//     <td>${subject2}</td>
//     <td>100</td>
//     <td>${marks2}</td>
//     <td>${marks2/100*100}%</td>
//   </tr>
//    <tr>
//     <td>${subject3}</td>
//     <td>100</td>
//     <td>${marks3}</td>
//     <td>${marks3/100*100}%</td>
//   </tr>
//      <tr>
//     <td></td>
//     <td>${total_Marks}</td>
//     <td>${obtMarks}</td>
//     <td>${totalPercentage}%</td>
//   </tr>
// </table>`)

////////////////////// ------Chap 9-11 "USER INPUT & CONDITIONAL STATEMENT"-------

//////////  Ques # 1
// let input='karachi';;
// let userInput=prompt('enter city name').toLowerCase();
// if(userInput===input){
//   console.log('Welcome to city of lights');

// }

//////////  Ques # 2
// let gender=prompt('your gender?').toLowerCase();
// if(gender==='male' || gender==='female'){
// if(gender === 'male'){
// console.log(`Welcome sir`);
// }else{
//   console.log(`Welcome madam`);
// }

// }else{
//   console.log('enter valid gender');

// }

//////////  Ques # 3
// let userInput=prompt(' enter color of road traffic signal')
// if(userInput==='red' || userInput==='yellow' || userInput==='green' ){
// if(userInput==='red'){
//   console.log('Must Stop')
// }else if(userInput==='yellow'){
// console.log('Ready to move');
// }else{
//   console.log('Move now');

// }
// }else{
//   console.log('enter color only from red yellow or green');

// }

//////////  Ques # 4
// let fuel= +prompt('Enter remaining fuel in car in litres')
// if(fuel<0.25){
// console.log('Please refill the fuel in your car');

// }else{
//   console.log('you are good to go');

// }

//////////  Ques # 5
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

//////////  Ques # 6

// let subject1 = prompt("Enter first subject name:");
// let marks1 = +prompt(`Enter obtained marks for ${subject1} :`);

// let subject2 = prompt("Enter second subject name:");
// let marks2 = +prompt(`Enter obtained marks for ${subject2} :`);

// let subject3 = prompt("Enter third subject name:");
// let marks3 = +prompt(`Enter obtained marks for ${subject3} :`);
// let total_Marks=300;
// let obtMarks=marks1+marks2+marks3;
// let totalPercentage=obtMarks/total_Marks*100;
// let grade;
// let remarks;

// if (totalPercentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// }
// else if (totalPercentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// }
// else if (totalPercentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// }
// else {
//   grade = "Fail";
//   remarks = "Sorry";
// }
// document.writeln(`
//   <p>Total Marks:${total_Marks}</p>
//   <p>Marks Obtained ${obtMarks}</p>
//   <p>Percentage:${totalPercentage}%</p>
//   <p>Grade:${grade}</p>
//   <p>Remarks:${remarks}</p>

// `)

//////////  Ques # 7
// let secretNum=3;
// let userGuess=+prompt('Guess the secret number');

// if(  userGuess===secretNum){
//   console.log('Bingo! Correct answer');

// }else if(userGuess<=5){
//   console.log('Close enough to the correct answer.');

// }else{
// console.log('wrong answer');
// }

//////////  Ques # 8
// let divisibleNum=+prompt('Enter a number');
// if(divisibleNum % 3 === 0){
// console.log('divisible by 3');

// }else{
//   console.log('not divisible');

// }

//////////  Ques # 9

// let numbers = +prompt("Enter a number:");

// if (numbers % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

//////////  Ques # 10

// let temp=+prompt('enter temperature')
//  let output;
// if(temp>70){
// console.log('invalid temperature');

// }else{
//    if (temp > 40) {
// console.log('It is too hot outside.');
// }
// else if (temp >30) {
//  console.log('The Weather today is Normal.');

// }
// else if (temp >20) {
// console.log('Today’s Weather is cool.');

// }
// else if(temp>10){
//   console.log('OMG! Today’s weather is so Cool.”');

// }
// }

//////////  Ques # 11
// let firstNum=+prompt('enter first number');
// let secNum=+prompt('enter second number');
// let operation=prompt('enter operator');

// if(operation==='+' || operation==='-' || operation==='*' || operation==='/'){
// if(operation==='+'){
// console.log(firstNum+secNum);

// }else if(operation==='-'){
// console.log(firstNum-secNum);

// } else if(operation==='*'){
// console.log(firstNum*secNum);

// } else if(operation==='/'){
// console.log(firstNum/secNum);

// }
// }else{
//   console.log('invalid operator');

// }

////////////////////// ------Chap 12-13 "IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS"-------

//////////  Ques # 1

// let input = prompt("Enter only one character:");
// let ascii = input.charCodeAt(0);

// if (input.length !== 1) {
//   console.log("Please enter exactly one character.");
// } else {
//   if (ascii >= 48 && ascii <= 57) {
//     console.log("It is a number.");
//   } else if (ascii >= 65 && ascii <= 90) {
//     console.log("It is an uppercase letter.");
//   } else if (ascii >= 97 && ascii <= 122) {
//     console.log("It is a lowercase letter.");
//   } else {
//     console.log("It is neither a number nor a letter.");
//   }
// }

//////////  Ques # 2
// let num1=+prompt('enter first integer');
// let num2=+prompt('enter second integer');

// if(isNaN(num1) || isNaN(num2)){
// console.log('enter only number');

// }else{
//   if(num1>num2){
// console.log(`${num1} is greater than ${num2}`);

// }else if(num2>num1){
// console.log(`${num2} is greater than ${num1}`);

// }else if(num1===num2){
// console.log('Both are equal');

// }
// }

//////////  Ques # 3
// let num1=+prompt('enter a number');
// if(isNaN(num1)){
// console.log('enter only number');

// }else{
//    if(num1===0){
// console.log('this number is zero');

//  }else if(num1>0){
// console.log('positive number');

//  }else{
//   console.log('negative number');

//  }
// }

//////////  Ques # 4
// let char = prompt("Enter a single character:").toLowerCase();

// if (char.length !== 1) {
//   console.log("Please enter exactly one character.");
// } else if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//////////  Ques # 5

// let  password = 'abc123'; 
// let userPassword = prompt('Enter your password');


// if (!userPassword || !userPassword.trim()) {
//   console.log('Please enter your password'); 
// } else if (userPassword !== password) {
//   console.log('Incorrect credentials');
// } else {
//   console.log('Correct! The password you entered matches the original password.');
// }

//////////  Ques # 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

//////////  Ques # 7
// let time= +prompt('Enter time in 24 hrs format')
// if(time>=0 && time <=24){
//  if( time<12){
// console.log('good morning');

// }else if(time>=12 && time <17){
// console.log('good afternoon');

// }else if(time>=17 && time <21){
// console.log('good evening');

// }else if(time>=21 && time <24){
// console.log('good night');

// }
// }else{
//   console.log('enter valid number');
  
// }


////////////////////// ------Chap 14-16 "ARRAYS"-------

////////////////////// ------Chap 17-20 "ARRAYS AND LOOP"-------
