function isArrayLengthOdd(numbers) {
  return !!(numbers.length % 2);
}
console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));

function isArrayLengthEven(numbers) {
  return !(numbers.length % 2);
}
console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));

function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}
console.log(addLailaToArray(["Mshary", "Hasan"]));

function eliminateTeam(teams) {
  return teams.pop();
}
console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    return fruits.slice(fruits.length / 2);
  } else {
    return [];
  }
}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwai",
    "blueberry",
  ])
);

function youGottaCalmDown(shout) {
  const firstExelamation = shout.indexOf(`!`);
  if (firstExelamation === -1) return shout;
  return shout.slice(0, firstExelamation + 1);
}
console.log(youGottaCalmDown("hellooo"));
