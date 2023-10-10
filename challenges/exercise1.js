export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	return (person.city === 'Manchester');

}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	if (people%40) {
		return (Math.floor(people/40) + 1);
	}
	else {
		return (people/40);
	}
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	let count = 0;
	arr.forEach(element => {
		if(element === 'sheep')
			count++;
	});
	return count;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	return ((person.address.postCode.startsWith("M")) && (person.address.city==='Manchester')) 
		
}
