function Sum(numbers) {
  const [number1, number2, number3, number4, number5] = numbers;
  return number1 + number2 + number3 + number4 + number5;
}
let arrayOfNumbers = [10, 20, 30, 40, 50];
console.log(Sum(arrayOfNumbers));
function validateNumber(number) {
  if (typeof number === "number") {
    console.log(`this is a number`);
  } else {
    console.log(`this is not a number`);
  }
}
arrayOfNumbers.forEach(validateNumber);
