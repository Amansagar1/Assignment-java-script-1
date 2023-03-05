//Ans:-1

var str1 = "Today is";
var str2 = "a beautiful day";
var str3 = " In Hawaii.";
// Result = 'Today is a beautiful day In Hawaii.'
var Result = `${str1} ${str2.trim()} ${str3.trim()}`;
console.log(Result);

//Ans:-2

var x = "a";
x = x.toLowerCase();
if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
	if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
		console.log("Vowel");
	} 
	else {
		console.log("Consonant");
	}
} 
else {
	console.log("non-alphabet");
}

//Ans:-3


const number1 = parseFloat(prompt("Enter first Number: "));
const number2 = parseFloat(prompt("Enter second Number: "));
const operator = prompt("Enter Operator: either + , - , * or / ");
switch(operator){
	case "+":
		var result = number1 + number2;
		alert(`${number1} ${operator} ${number2} = ${result}`);
		break;
	case "-":
		var result = number1 - number2;
		alert(`${number1} ${operator} ${number2} = ${result}`);
		break;
	case "*":
		var result = number1 * number2;
		alert(`${number1} ${operator} ${number2} = ${result}`);
		break;
	case "/":
		var result = number1 + number2;
		alert(`${number1} ${operator} ${number2} = ${result}`);
		break;
	default:
		alert("Enter valid Operator");
}

//0Ans:-4

const a = prompt("enter first side: ");
const b = prompt("enter second side: ");
const c = prompt("enter third side: ");
if(a == b == c){
	prompt("The Triangle is equilateral.")
}
else if( a == b || a == c || b == c){
	prompt("The Triangle is Isosceles");
}
else if( a != b != c){
	prompt("Triangle is Scalene Triangle");
}

//Ans:-5

let units = 300;
let bill;
if (units <= 50) {
	bill = units * 0.5;
} else if (units <= 150) {
	bill = 50 * 0.5 + (units - 50) * 0.75;
} else if (units <= 250) {
	bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
} else if (units > 250) {
	bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
	bill = bill + bill * 0.2;
}
console.log(bill);