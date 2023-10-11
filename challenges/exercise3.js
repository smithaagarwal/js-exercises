export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const smallerNumArr = [];
	nums.forEach(num => {
		if (num < 1)
			smallerNumArr.push(num);
	});
	return smallerNumArr;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const namesArr = [];
	names.forEach(name => {
		if (name.startsWith(char))
			namesArr.push(name);
	});
	return namesArr;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	const verbssArr = [];
	words.forEach(word => {
		if (word.startsWith('to '))
			verbssArr.push(word);
	});
	return verbssArr;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const intArr = [];
	nums.forEach(num => {
		if (Number.isInteger(num))
			intArr.push(num);
	});
	return intArr;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	const cities = [];
	users.forEach(user => {
		cities.push(user.data.city.displayName);

	});
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	const squareRootArr = [];
	nums.forEach(num => {
		squareRootArr.push(Number(Math.sqrt(num).toFixed(2)));
	});
	return squareRootArr;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	const sentencesHavingStrArr = [];
	sentences.forEach(sentence => {
		if (sentence.toLowerCase().includes(str.toLowerCase()))
			sentencesHavingStrArr.push(sentence);
	});
	return sentencesHavingStrArr;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	const longestSidesArr = [];
	triangles.forEach(triangle => {
		const tempTriangle = triangle;
		tempTriangle.sort(function (a, b) { return b - a });
		longestSidesArr.push(tempTriangle[0]);
	});
	return longestSidesArr;
}
