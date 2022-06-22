const a = 5; // variable that will never change
const b = 2;
// var oldRule = 10;
// var is old js syntex. can be changed anywhere. don't use this. rather, use const and var.
let myName = "Keunmo"; // variable that can be updated in future

const amIFat = null;
let something;

console.log(something, amIFat);

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "KooKeunmo";

console.log("your new name is " + myName);

// const mon = 'monday';
// const tue = 'tuesday';
// const wed = 'wednesday';
// const thu = 'thuesday';
// const fri = 'friday';
// const sat = 'saturday';
// const sun = 'sunday';

const week = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(week);
console.log(week[5]);
console.log(week[6]);

week.push("sun");
console.log(week);
console.log(week[6]);

const player = {
  name: "Keunmo",
  points: 10,
  fat: true,
  sayHi: function (otherPersonName) {
    console.log("Hi, " + otherPersonName);
  },
};

console.log(player);
console.log(player.name);
player.fat = false;
console.log(player);
player.lastname = "Koo";
console.log(player);
// player.fat = "maybe";
// console.log(player); // 아오.. 이게 되네.. (대충 boolean type fat에 string을 넣었는데 되서 골아프단뜻)
player.points++;
player.points += 5;
player.points = player.points + 7;
console.log(player);

function sayHello(nameOfPerson = "HongGilDong", age = 100) {
  console.log("Hello " + nameOfPerson + "!");
  console.log("Your age is " + age);
}

sayHello("keunmo", 25);
sayHello("hayoung", 30);
sayHello("3102", 3102);
sayHello();

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(20, 5);
divide(20, 7);

player.sayHi("Keunmo");

const calc = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calc.plus(2, 3);
const minusResult = calc.minus(plusResult, 10);
const timesResult = calc.times(10, minusResult);
const divideResult = calc.divide(timesResult, plusResult);
const powerResult = calc.power(divideResult, minusResult);

// const age = prompt("How old are you?");

// console.log(typeof age); // js정말 개극혐이네요.. typeof를 이딴식으로 하다니..
// console.log(typeof age, typeof parseInt(age));
// console.log(age, parseInt(age));

const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age >= 50 && age <= 80) {
  console.log("You should exersise.");
} else if (age === 100){
  console.log("You are 100 years old.")
} else if (age > 80) {
  console.log("Do whatever you want to do.");
}
