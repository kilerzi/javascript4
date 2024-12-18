function tellStory(elements) {
  //ne sum siguren dali const [name,mood,activity] comandata sme ja robotele.
  const [name, mood, activity] = elements;

  return `One day, ${name} was feeling very ${mood}. To feel better, ${name} decided to ${activity} and ended up having a great time!`;
}

const storyInput = ["Alice", "happy", "go for a long walk"];
console.log(tellStory(storyInput));
