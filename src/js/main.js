// // Напиши всі можливі варіанти створення функцій.
// // function declaration
function greetUser() {
    let userName = prompt('What is your name?');
    let message = `Hello, ${userName}!`;

    alert(message);
}

// //function expression

let greeting = function greet() {
    let user = prompt('What is your name?');
    alert(`Hello ${user}!`);
}

//Створи функцію, яка буде виводити кількість переданих їй аргументів.
function someFunc(a, b, c, d) {
    
}
console.log('Number of arguments is ' + someFunc.length);

/* Напиши функцію, яка приймає 2 числа і повертає :
   -1, якщо перше число менше, ніж друге; 
   1 - якщо перше число більше, ніж друге; 
    0 - якщо числа рівні.
*/

function returnNum(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

console.log(returnNum(4, 6));
console.log(returnNum(6, 4));
console.log(returnNum(4, 4));

//Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial(5));

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function getNumber() {
    let a = prompt('Enter first number');
    let b = prompt('Enter second number');
    let c = prompt('Enter third number');

    let d = a + b + c;

    d = Number(d);
    console.log(d);
}

getNumber();

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function area(length, width) {
    if (width === undefined) {
        squareArea = length ** 2;
        console.log(`The square area is ${squareArea}`);
    } else {
        rectArea = length * width;
        console.log(`The rectangular area is ${rectArea}`);
    }
}

console.log(area(5, 7)); 
console.log(area(5)); 


//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(number) {
    let sum = 0;
    for (i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }

    if (sum == number) {
        console.log(`${number} is a perfect number.`);
    } else {
        console.log(`${number} is not a perfect number.`)
    }
}

isPerfectNumber(28);