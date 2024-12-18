let story = [];
function tellstory(item) {
  if (typeof item === "string") {
    story.push(item);
  }
}
let name = prompt("enter your name");
let mood = prompt("enter your mood");
let activity = prompt("activity");
tellstory(name);
tellstory(mood);
tellstory(activity);
let a = story[0];
let b = story[1];
let c = story[2];
console.log(`this is ${a}.and hes in  a ${b}.he has been ${c} all day.the end`);
