function sumOfMaxAndMin(numbers) {
  let max = Math.max(numbers);
  let min = Math.min(numbers);

  return max + min;
}

let numbers = [10, 20, 5, 8, 100];
console.log("Sum of Max and Min:", sumOfMaxAndMin(numbers));
