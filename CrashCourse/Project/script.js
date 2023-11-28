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

/*
const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible Year. Year must be less or equal to ${new Date().getFullYear()} year.`;
console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));

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
/*
*/

const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact[1]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn, isCorrect] = fact;
const newFact = [...fact, "society"];
console.log(newFact);

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times2 = [2, 4, 6, 8].map(function (el) {
//   return el * 2;
// });

const times2 = [2, 4, 6, 8].map((el) => el * 2);

console.log(times2);

/*
const factObj = {
  text: "Lisbon is the capital of Portugal",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return`The fact is ${this.text}. It is about ${this.createdIn} years old. It is probably ${this.is`
};

const { text, createdIn, isCorrect } = factObj;

console.log(factObj.createSummary());
*/

/*
const factObj = {
  text: "Lisbon is the capital of Portugal",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact is ${this.text}. It is about ${
      new Date().getFullYear() - this.createdIn
    } years old. It is probably ${
      this.isCorrect ? "correct" : "incorrect"
    } fact.`;
  },
};


// Destructuring assignment to extract properties from the object
const { text, createdIn, isCorrect } = factObj;

// Accessing the 'createSummary' method from the object
console.log(factObj.createSummary());

*/

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((category) => category.name);

console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2045,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible Year. Year must be less or equal to ${currentYear} year.`;
}

const factAges = initialFacts.map((fact) => calcFactAge(fact.createdIn));

console.log(factAges);
console.log(factAges.join(", "));
