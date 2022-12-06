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
  if (arr.length === 0) return difference = 0;
  for(let i = 0; i < arr.length; i++){

    if(max <= arr[i]){
      max = arr[i];
    }
    if(min >= arr[i]){
      min = arr[i];
    }
  }
  return difference = max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) return difference = 0;
  for(let i = 0; i < arr.length; i++){

    if(Math.floor(arr[i] / 2) == arr[i] / 2){
      sumEvenElement = sumEvenElement + arr[i];
    }
    else{
      sumOddElement = sumOddElement + arr[i];
    }
  }
return difference = sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) return average = 0;
  for(let i = 0; i < arr.length; i++){

    if(Math.floor(arr[i] / 2) == arr[i] / 2){
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
return average = sumEvenElement / countEvenElement;
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
