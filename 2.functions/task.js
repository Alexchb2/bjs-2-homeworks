function getArrayParams(...arr) {

  let min = arr[0]; 
  let max = arr[0];
  let sum = 0;

  for(let i = 0; i < arr.length; i++){

    sum = sum + arr[i];

    if(max < arr[i]){
      max = arr[i];
    }
    if(min > arr[i]){
      min = arr[i];
    }
  }
  let avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0]; 
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){

    if(max <= arr[i]){
      max = arr[i];
    }
    if(min >= arr[i]){
      min = arr[i];
    }
  }
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++){

    if(Math.floor(arr[i] / 2) == arr[i] / 2){
      sumEvenElement = sumEvenElement + arr[i];
    }
    else{
      sumOddElement = sumOddElement + arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
return difference;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++){

    if(Math.floor(arr[i] / 2) == arr[i] / 2){
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  let average = sumEvenElement / countEvenElement;
return average;

}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for(let i = 0; i < arrOfArr.length; i++){
  let arrMax = func(...arrOfArr[i]);
  if(maxWorkerResult < arrMax){
    maxWorkerResult = arrMax;
  }
}
return maxWorkerResult;
}

