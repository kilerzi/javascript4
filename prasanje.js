function generateFullNames(firstNames, lastNames) {
  let fullNames = [];
  for (let i = 0; i < 2; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} + ${lastNames[i]}`);
  }

  return fullNames;
}

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];

let full = generateFullNames(first[0], first[1]);
console.log(full);
