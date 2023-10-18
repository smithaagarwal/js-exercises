export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => Math.pow(x, 2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCaseWord = words[0];
  for (let index = 1; index < words.length; index++) {
    camelCaseWord = camelCaseWord.concat(
      words[index].slice(0, 1).toUpperCase(),
      words[index].slice(1)
    );
  }
  return camelCaseWord;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let numOfSubjects = 0;
  numOfSubjects = people.reduce(
    (total, person) => total + person.subjects.length,
    numOfSubjects
  );
  return numOfSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let present = false;
  //comment for self learning
  //as I wanted to break out of the loop when the ingredient is present, i cant use forEach
  //I used 'some' to loop so that I can break out of the loop when condition is true.
  return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  //last filter is to remove the duplicates
  return arr1
    .filter((item) => arr2.includes(item))
    .sort()
    .filter((elem, pos, self) => self.indexOf(elem) === pos);
}
