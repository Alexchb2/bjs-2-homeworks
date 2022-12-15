"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d=b**2-4*a*c;

  if (d==0){
    let x1=-b/(2*a);
    arr=[x1];

  } else if (d>0){
    let x1=(-b + Math.sqrt(d) )/(2*a);
    let x2=(-b - Math.sqrt(d) )/(2*a);
    arr=[x1,x2];

  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(Number.isNaN(percent) || Number.isNaN(contribution) || Number.isNaN(amount) || Number.isNaN(countMonths)){
    return false
  }
  let P = percent/100/12;
  let S = amount - contribution;
  let payment = ((S * (P + (P / (((1 + P)**countMonths) - 1)))) * countMonths).toFixed(2);
  return Number(payment);
}