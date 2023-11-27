const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible Year. Year must be less or equal to ${currentYear} year.`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

const calcFactAge2 = (year) => new Date().getFullYear() - year;
console.log(calcFactAge2(2015));

let votesInteresting = 20;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equaly int and mind");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting Fact!");
} else {
  console.log("Smth else");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse ? "The fact is true" : "The fact is false";
console.log(message);

const text = "React is being developed by Meta (formerly facebook)";
const upperText = text.toUpperCase();

const str = `The next fact is: "${upperText}". It is about ${age1} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
} `;

console.log(str);

let createHelloWorld = () => "Hello World";

console.log(createHelloWorld());
