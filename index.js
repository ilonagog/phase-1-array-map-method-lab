const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  let t = tutorials;

  let cent = t.map((tutorial) => {
    let words = tutorial.split(" ");
    // console.log(result);
    let result = words.map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1)
    );

    return result.join(" ");
  });
  return cent;
  // if (tutorial.charAt(0)) {
  //   let word = tutorial.charAt(0).toUpperCase();
  //   console.log(word);
  // } else {
  //   return null;
};
console.log(titleCased());
