const loanAmount = 25_000;
const annualPercent = 2.5; // (to be compounded monthly)
const yearsToPay = 2;
const monthlyPayment =
  loanAmount /
  (((1 + annualPercent / 100 / 12) ** (yearsToPay * 12) - 1) /
    ((annualPercent / 100 / 12) *
      (1 + annualPercent / 100 / 12) ** (yearsToPay * 12)));
const monthlyPayment_rounded = Math.round(monthlyPayment * 100) / 100;
const monthlyPayment_formatted = monthlyPayment_rounded.toFixed(2);
console.log(monthlyPayment_formatted);
