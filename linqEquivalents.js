// JS equivalents to C# LINQ: (notably Average, Distinct, and GroupBy)
// https://decembersoft.com/posts/typescript-vs-csharp-linq/
const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.reduce((acc, n) => acc + n, 0);
const areAllPositive = numbers.every((n) => n > 0);
const anyAbove5 = numbers.some((n) => n > 5);
const containsA7 = numbers.includes(7);

// Average:
const average = numbers.reduce((acc, n) => acc + n, 0) / numbers.length;

// Distinct:
const initialArray = [];
const distinct = [...new Set(numbers)];

const moreNumbers = [8, 9, 10];
const concatenatedNumbers = [...numbers, ...moreNumbers];

const labelledParity = numbers.map((n) => ({
  // (just some setup for GroupBy)
  isEven: String(n % 2 === 0),
  number: n,
}));

// GroupBy:
const initialGroupedObject = {};
const groupedByParity = labelledParity.reduce(
  (grouped, item) => ({
    ...grouped,
    [item.isEven]: [...(grouped[item.isEven] || []), item],
  }),
  initialGroupedObject
);
