function something(idk) {
  let sentance = "";
  //for loopot pocnuva od 0 sto e hello vo ovoj slucaj,proveruva dali e pogolemo od `idk` sto e nizata i ako e prestanuva ako ne e, go zgolemuva i za eden vo koj sto ide nakaj vtoroto mesto odnosno `there`
  for (let i = 0; i < idk.length; i++) {
    if (typeof idk[i] === "string") {
      sentance += idk[i] + " ";
    }
  }
  return sentance;
}
const idk = [`hello`, `there`, `my`, `name`, `is`, `mihail`];
console.log(something(idk));
