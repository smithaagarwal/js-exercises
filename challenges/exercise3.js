export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const smallerNumArr = nums.filter(num => {
		return (num < 1);
	});
	return smallerNumArr;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const namesArr = names.filter(name => {
		return (name.startsWith(char));
	});
	return namesArr;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	const verbssArr = words.filter(word => {
		return (word.startsWith('to '));
	});
	return verbssArr;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const intArr = nums.filter(num => {
		return (Number.isInteger(num));
	});
	return intArr;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	const cities = users.map(user => {
		return user.data.city.displayName;

	});
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	const squareRootArr = nums.map(num => {
		return (Number(Math.sqrt(num).toFixed(2)));
	});
	return squareRootArr;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	const sentencesHavingStrArr = sentences.filter(sentence => {
		return (sentence.toLowerCase().includes(str.toLowerCase()));
	});
	return sentencesHavingStrArr;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	const longestSidesArr = triangles.map(triangle => {
		const tempTriangle = triangle;
		tempTriangle.sort(function (a, b) { return b - a });
		return tempTriangle[0];
	});
	return longestSidesArr;
}
