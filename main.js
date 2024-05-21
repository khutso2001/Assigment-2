// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

//-----------------------Youngest user---------------------------

const user = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function young(user) {
  let youngest = user[0];

  for (let i = 0; i < user.length; i++) {
    if (user[i].age < youngest.age) {
      youngest = user[i];
    }
  }
  return youngest.name;
}

console.log("Younger User is: " + young(user)); // Lasha

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს
// იგივე მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს
const copyUser = user.map(function (element) {
  return element;
});
console.log("user array");
console.log(user);
console.log("Copy new user array:");
console.log(copyUser);

// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს
// მანამ, სანამ არ გაგორდება, რომელიც
// უფრო ნაკლებ ცდაში გააგორებს სამიანს ის
// არის გამარჯვებული
function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollThree() {
  let tryRoll = 0;
  let roll = 0;
  while (roll !== 3) {
    roll = randomNumber();
    tryRoll++;
  }
  return tryRoll;
}

function winner() {
  let diceOne = rollThree();
  let dicTwo = rollThree();
  console.log(`rolled  3 in ${diceOne} tries.`);
  console.log(`rolled  3 in ${dicTwo} tries.`);

  if (diceOne < dicTwo) {
    console.log("first dice  is the winner!");
  } else if (dicTwo < diceOne) {
    console.log("second dice is the winner!");
  }
}

winner();
