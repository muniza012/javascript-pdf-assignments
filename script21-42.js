////////////////////// ------Chap 21-25 "STRING METHODS"-------

//////////  Ques # 1

// let firstName=prompt('Enter your first name');
 // let lastName=prompt('Enter your lasst name');

 // let fullName =`Hi! ${firstName} ${lastName}`
  // console.log(fullName);

//////////  Ques # 2

// let mobModel=prompt('Enter your favourite mobile phone model');
// let modelLength=mobModel.length
// console.log(`My favourite mobile phone model is:${mobModel}
//   Length of String is :${modelLength}`);



//////////  Ques # 3

// let word='Pakistani';
// console.log(word.indexOf('n'));



//////////  Ques # 4
// let string='Hello world'
// console.log(string.lastIndexOf('l'));

//////////  Ques # 5
// console.log(string.charAt(3));

//////////  Ques # 6

// let firstName=prompt('Enter your first name');
//  let lastName=prompt('Enter your lasst name');

//  let fullName =firstName.concat(lastName)
//   console.log(fullName);

//////////  Ques # 7
// let words='hyderabad';
// console.log(words.replace('hyder','Islam'));


//////////  Ques # 8

// let message='Ali and Sami are best friends.They play cricket and footbal together'
// console.log(message.replaceAll('and','&'));

// let message='Ali and Sami are best friends.They play cricket and footbal together'
// console.log(message.replace(/and/gi,'&'));

//////////  Ques # 9
// let strNum='456';
// let num=Number(strNum)
// console.log(num);

//////////  Ques # 10

// let input='peanuts';
// let res=input.toUpperCase()
// console.log(res);

//////////  Ques # 11

// let str = "javascript";
// let result = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(result); 

//////////  Ques # 12

// let num = 33.56;
// let result = Math.floor(num * 100).toString();
// console.log(result); // "3350"

//////////  Ques # 13


// let username = prompt("Enter your username:");

// let isValid = true;

// for (let i = 0; i < username.length; i++) {
//   let code = username.charCodeAt(i);

//   if (code === 33 || code === 44 || code === 46 || code === 64) {
//     isValid = false;
//     break;
//   }
// }

// if (isValid) {
//   console.log("Valid username:", username);
// } else {
//   console.log("Invalid username! Please avoid @ . , !");
// }

//////////  Ques # 14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter item to search:");

// let searchItem = userInput.toLowerCase();

// let found = false;

// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === searchItem) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log(searchItem + " is available in the list");
// } else {
//   console.log(searchItem + " is NOT available in the list");
// }

//////////  Ques # 15
// let password = prompt("Enter your password:");

// let hasAlpha = false;
// let hasNumber = false;

// if (password.length < 6 || (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57)) {
//   console.log("Invalid password ");
// } else {

//   for (let i = 0; i < password.length; i++) {
//     let code = password.charCodeAt(i);

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//       hasAlpha = true;
//     }

//     if (code >= 48 && code <= 57) {
//       hasNumber = true;
//     }
//   }

//   if (hasAlpha && hasNumber) {
//     console.log("Valid password ");
//   } else {
//     console.log("Invalid password ");
//   }
// }

//////////  Ques # 16

// var university = "University of Karachi";
// var arr = university.split("");
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//   document.writeln(arr[i] + "<br>");
// }

//////////  Ques # 17

// let str = "The quick brown fox jumps over the lazy dog";

// let count = 0;
// let words = str.toLowerCase().split(" ");

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// console.log("Occurrences of 'the':", count);



////////////////////// ------Chap 26-30 "MATH METHODS"-------

//////////  Ques # 1

// let num=3.45214;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));




//////////  Ques # 2

// let num=-2.673;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

//////////  Ques # 3

// let num=-4;
// console.log(Math.abs(num));

//////////  Ques # 4
// let diceValue=Math.floor(Math.random()*6)+1
// console.log(diceValue);


//////////  Ques # 5
// let coinValue=Math.floor(Math.random()*2)+1
// let result;
// if (coinValue===1) {
//   result='heads';
// } else {
//   result='tails';
  
// }
// console.log(coinValue,result);


//////////  Ques # 6
// let Value=Math.floor(Math.random()*100)+1
// console.log(Value);

//////////  Ques # 7
// function showWeight() {
//   let input = document.getElementById("weightInput").value;
//   let weight = parseFloat(input);

//   if (isNaN(weight)) {
//     document.getElementById("result").innerText = "Please enter a valid weight!";
//   } else {
//     document.getElementById("result").innerText = "Your weight is " + weight + " kg";
//   }
// }

//////////  Ques # 8
// let randomValue=Math.floor(Math.random()*10)+1

// document.getElementById('btn').addEventListener('click',  guess)
// function guess(){

//   let input=document.getElementById('input')
//   let value=+input.value
//   if (randomValue===value) {
//     console.log('congratulation');
    
//   } else {
//     console.log('try again');
    
//   }
//   input.value=''
// input.focus()
// }

////////////////////// ------Chap 31-34 "DATE METHODS"-------

//////////  Ques # 1
// let date =new Date()
// console.log(date);


//////////  Ques # 2
// let date =new Date()
// let month=date.getMonth()
// let months=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']

// console.log(months[month]);




//////////  Ques # 3
// let day=prompt('enter day')
// console.log(day.slice(0,3));



//////////  Ques # 4

// let today = new Date();
// let day = today.getDay();

// if (day === 6 || day === 0) {
//   console.log("It's Fun day");
// } else {
//   console.log("It's not Fun day");
// }

//////////  Ques # 5
// let today = new Date();
// let date = today.getDate();
//  if (date<16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }


//////////  Ques # 6

//  let currentDate = new Date();
//   let milliseconds = currentDate.getTime();
//   let minutes = milliseconds / (1000 * 60);

//   console.log("Minutes since Jan 1, 1970:", minutes);


//////////  Ques # 7
// let now = new Date();
// let hours = now.getHours();

// if (hours < 12) {
//   alert("Its AM");
// } else {
//   alert("Its PM");
// }


//////////  Ques # 8
// let date=new Date('December 31, 2020')
// console.log(date);

//////////  Ques # 9
// let ramadanStart=new Date('June 18, 2015')
// let today = new Date();
// let diff = today - ramadanStart;
// let daysPassed = diff / (1000 * 60 * 60 * 24);

// alert("Days since 1st Ramadan: " + Math.floor(daysPassed));

//////////  Ques # 10
//  let start2015 = new Date(2015, 0, 1);
//   let milliseconds = start2015.getTime();
//   let seconds = milliseconds / 1000;
// console.log(seconds);

//////////  Ques # 11
// let today = new Date();
// let hrs=today.getHours()
// let newhr=today.setHours(hrs+1)
// console.log(today.getHours())

//////////  Ques # 12
// let today = new Date();
// today.setFullYear(today.getFullYear() - 100);
// alert(today);


//////////  Ques # 13
// let age=+prompt('how old are you')
// let today = new Date();
// let year=today.getFullYear()-age
// console.log(year);


//////////  Ques # 14
//  let customerName = "Ali Khan";
  // let currentMonth = new Date().toLocaleString('default', { month: 'long' });
  // let units = 410;
  // let chargesPerUnit = 16;
  // let lateSurcharge = 350
  //  let netAmount = units * chargesPerUnit;
  // let grossAmount = netAmount + lateSurcharge;
  // netAmount = netAmount.toFixed(2);
  // grossAmount = grossAmount.toFixed(2);
  // chargesPerUnit = chargesPerUnit.toFixed(2);
  // lateSurcharge = lateSurcharge.toFixed(2);


////////////////////// ------Chap 35-38 "Functions"-------

//////////  Ques # 1
// function date(){
//   let date=new Date()
//   console.log(date);
  
// }
// date()

//////////  Ques # 2
// function name() {
//   let fname='sara';
//   let lname='ali';
//   console.log(fname+' '+lname);
  
// }
// name()

//////////  Ques # 3

// let num1=+prompt('enter a number')
// let num2=+prompt('enter second number')
// function sum(num1,num2) {
//   return num1+num2
// }


// console.log(sum(num1,num2));

//////////  Ques # 4

//  let num1=+prompt('enter a number');
// let operator=prompt('enter operator');

// let num2=+prompt('enter second number');
// function calculate(num1, operator, num2) {
//   if (operator === '+') return num1 + num2;
//   if (operator === '-') return num1 - num2;
//   if (operator === '*') return num1 * num2;
//   if (operator === '/') return num1 / num2;

//   return "Invalid operator";
// }

// console.log(calculate(num1, operator, num2));

//////////  Ques # 5
//  let num=+prompt('enter a number');

// function square(num) {
// return  num*num
// }

// console.log(square(num));


//////////  Ques # 6
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));


//////////  Ques # 7
// function num(){
//  let startNum=+prompt('enter a number');
//  let endNum=+prompt('enter a number');
// for(let i=startNum;i<=endNum;i++){
// console.log(i);

// }

// }
// num()


//////////  Ques # 8

// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }

//   let hypotenuseSquare =
//     calculateSquare(base) + calculateSquare(perpendicular);

//   let hypotenuse = Math.sqrt(hypotenuseSquare);

//   return hypotenuse;
// }
// let base = +prompt("Enter base:");
// let perpendicular = +prompt("Enter perpendicular:");

// console.log(calculateHypotenuse(base, perpendicular));

//////////  Ques # 9
// let width=9
// let height=10
// function area(width,height) {
//   let area=width*height;
//   return area
// }
// console.log(area(4,9));
// console.log(area(width,height));

//////////  Ques # 10
// function isPalindrome(str) {
  
//   let cleanedStr = str.toLowerCase()
// let reversedStr = cleanedStr.split("").reverse().join("");

//   if (cleanedStr === reversedStr) {
//     return "Palindrome";
//   } else {
//     return "Not Palindrome";
//   }
// }

// console.log(isPalindrome("madam"));

//////////  Ques # 11
// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("the quick brown fox"));

//////////  Ques # 12

// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longest = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }

//   return longest;
// }

// console.log(findLongestWord("Web Development Tutorial"));

//////////  Ques # 13
// function countLetter(str, letter) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === letter.toLowerCase()) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter('JSResourceS.com', 'o'));

//////////  Ques # 14

// function calcCircumference(radius) {
//   let circumference = 2 * Math.PI * radius;
//   console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//   let area = Math.PI * radius * radius;
//   console.log("The area is " + area);
// }

// calcCircumference(5);
// calcArea(5);

////////////////////// ------Chap 39-42 "FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS"-------

//////////  Ques # 1
// function power(a, b) {
//   let result = 1;

//   for (let i = 0; i < b; i++) {
//     result = result * a;
//   }

//   return result;
// }

// console.log(power(2, 3)); 



//////////  Ques # 2

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }
// let year = +prompt("Enter a year:");
// console.log(isLeapYear(year));



//////////  Ques # 3

// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//   let S = calculateS(a, b, c);
//   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }
// let a = 3, b = 4, c = 5;
// onsole.log("Area of triangle is: " + calculateArea(a, b, c));

//////////  Ques # 4

// function calculateAverage(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }
// function calculatePercentage(m1, m2, m3) {
//   let totalMarks = 300; 
//   let obtained = m1 + m2 + m3;
//   return (obtained / totalMarks) * 100;
// }

// function mainFunction(m1, m2, m3) {
//   let avg = calculateAverage(m1, m2, m3);
//   let per = calculatePercentage(m1, m2, m3);

//   console.log("Average: " + avg);
//   console.log("Percentage: " + per + "%");
// }

// mainFunction(80, 90, 70);

//////////  Ques # 5
// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i; 
//     }
//   }
//   return -1;
// }
// console.log(customIndexOf("hello", "l")); 


//////////  Ques # 6
// function removeVowels(sentence) {
//   return sentence.replace(/[aeiouAEIOU]/g, "");
// }

// console.log(removeVowels("hello world"));

//////////  Ques # 7


// function countVowelPairs(text) {
//   let count = 0;

//   for (let i = 0; i < text.length - 1; i++) {
//     let first = text[i].toLowerCase();
//     let second = text[i + 1].toLowerCase();

//     let pair = first + second;

//     switch (pair) {
//       case "aa":
//       case "ae":
//       case "ai":
//       case "ao":
//       case "au":

//       case "ea":
//       case "ee":
//       case "ei":
//       case "eo":
//       case "eu":

//       case "ia":
//       case "ie":
//       case "ii":
//       case "io":
//       case "iu":

//       case "oa":
//       case "oe":
//       case "oi":
//       case "oo":
//       case "ou":

//       case "ua":
//       case "ue":
//       case "ui":
//       case "uo":
//       case "uu":
//         count++;
//         break;
//     }
//   }

//   return count;
// }
// console.log(
//   countVowelPairs("Pleases read this application and give me gratuity")
// )

//////////  Ques # 8

// function toMeters(km) {
//   return km * 1000;
// }

// function toFeet(km) {
//   return km * 3280.84;
// }

// function toInches(km) {
//   return km * 39370.1;
// }

// function toCentimeters(km) {
//   return km * 100000;
// }
// function convertDistance() {
//   let km = parseFloat(prompt("Enter distance between two cities (in km):"));

//   document.write("Distance in Meters: " + toMeters(km) + "<br>");
//   document.write("Distance in Feet: " + toFeet(km) + "<br>");
//   document.write("Distance in Inches: " + toInches(km) + "<br>");
//   document.write("Distance in Centimeters: " + toCentimeters(km) + "<br>");
// }
// convertDistance();

//////////  Ques # 9

// function calculateOvertimePay(hoursWorked) {
//   let overtimePay = 0;

//   if (hoursWorked > 40) {
//     let overtimeHours = hoursWorked - 40;
//     overtimePay = overtimeHours * 12;
//   }

//   return overtimePay;
// }
// function main() {
//   let hours = parseInt(prompt("Enter total hours worked:"));

//   let pay = calculateOvertimePay(hours);

//   document.write("Overtime Pay: Rs. " + pay);
// }
// main();

//////////  Ques # 10

// function calculateNotes() {
//   let amountInHundreds = parseInt(prompt("Enter amount in hundreds:"));

//   let amount = amountInHundreds * 100;

//   let hundredNotes = Math.floor(amount / 100);
//   amount = amount % 100;

//   let fiftyNotes = Math.floor(amount / 50);
//   amount = amount % 50;

//   let tenNotes = Math.floor(amount / 10);
//   amount = amount % 10;

//   document.write("100 Rs notes: " + hundredNotes + "<br>");
//   document.write("50 Rs notes: " + fiftyNotes + "<br>");
//   document.write("10 Rs notes: " + tenNotes + "<br>");
// }

// calculateNotes();
