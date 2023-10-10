export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	const square = x => Math.pow(x, 2);
	const squareArray = nums.map(square);
	return squareArray;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	let camelCaseWord = words[0];
	for (let index = 1; index < words.length; index++) {
		camelCaseWord = camelCaseWord.concat(words[index].slice(0, 1).toUpperCase(), words[index].slice(1));
	}
	return camelCaseWord;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	let numOfSubjects = 0;
	people.forEach(element => {
		numOfSubjects += element.subjects.length;
	});

	return numOfSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	let present = false;
	//comment for self learning
	//as I wanted to break out of the loop when the ingredient is present, 
	//I used 'every' to loop so that I can return false to break out of the loop
	//with foreach, there was no way to break out of the loop
	menu.every(item => {
		present = item.ingredients.includes(ingredient)
		if (present)
			return false;
		return true;
	}
	);
	return present;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
}
