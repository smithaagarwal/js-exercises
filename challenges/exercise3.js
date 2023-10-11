export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const smallerNumArr = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 1)
			smallerNumArr.push(nums[i]);
	}
	return smallerNumArr;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const namesArr = [];
	for (let i = 0; i < names.length; i++) {
		if (names[i].startsWith(char))
			namesArr.push(names[i]);
	}
	return namesArr;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	const verbssArr = [];
	for (let i = 0; i < words.length; i++) {
		if (words[i].startsWith('to '))
			verbssArr.push(words[i]);
	}
	return verbssArr;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const intArr = [];
	for (let i = 0; i < nums.length; i++) {
		if (Number.isInteger(nums[i]))
			intArr.push(nums[i]);
	}
	return intArr;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	const cities = [];
	for (let i = 0; i < users.length; i++) {
		cities.push(users[i].data.city.displayName);
	}
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	const squareRootArr = [];
	for (let i = 0; i < nums.length; i++)
		squareRootArr.push(Number(Math.sqrt(nums[i]).toFixed(2)));
	return squareRootArr;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	const sentencesHavingStrArr = [];
	for (let i = 0; i < sentences.length; i++) {
		if (sentences[i].toLowerCase().includes(str.toLowerCase()))
			sentencesHavingStrArr.push(sentences[i]);
	}
	return sentencesHavingStrArr;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	const longestSidesArr = [];
	for (let i = 0; i < triangles.length; i++) {
		const tempTriangle = triangles[i];
		tempTriangle.sort(function (a, b) { return b - a });
		longestSidesArr.push(tempTriangle[0]);
	}
	return longestSidesArr;
}
