"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D=b**2-4*a*c;

  if (D==0){
    let x1=-b/(2*a);
    arr=[x1];

  } else if (D>0){
    let x1=(-b + Math.sqrt(D) )/(2*a);
    let x2=(-b - Math.sqrt(D) )/(2*a);
    arr=[x1,x2];

  } else if (D<0){
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  isNaN(percent);
  isNaN(contribution);
  isNaN(amount);
  isNaN(countMonths);
  let P = percent/100/12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  alert( payment.toFixed(2) );
}