const arr = [1, 2, 3, 4];

function sumFor(arr1) {
  let sum = 0;
  for (const n of arr1) {
    sum += n;
  }
  return sum;
}

console.log(sumFor(arr));

function sumWhile(arr2) {
  let sum = 0;
  let idx = 0;
  while (idx < arr2.length) {
    sum += arr2[idx];
    idx += 1;
  }
  return sum;
}

console.log(sumWhile(arr));

function sumRecursion(arr3, idx) {
  if (idx <= 0) return 0;
  return sumRecursion(arr3, idx - 1) + arr3[idx];
}
console.log(sumRecursion(arr, arr.length));

function sumTheSimpleWay(arr4) {
  return _.reduce(arr4, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(arr));
