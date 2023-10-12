export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let nextNum = null;
  nums.some((num, index) => {
    if (index < nums.length - 1 && num === n) nextNum = nums[index + 1];
    return nextNum;
  });
  return nextNum;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const numOfOnesAndZeros = {
    1: 0,
    0: 0,
  };
  if (str.match(/1/g)) numOfOnesAndZeros["1"] = str.match(/1/g).length;
  if (str.match(/0/g)) numOfOnesAndZeros["0"] = str.match(/0/g).length;

  return numOfOnesAndZeros;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const str = n.toString();
  return Number(str.split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  sum = arrs.reduce((total, subArr) => {
    return (
      total +
      subArr.reduce((total, num) => {
        return total + num;
      }, sum)
    );
  }, sum);
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  const shiftedArr = arr.map((elem, index) => {
    if (index === 0) return arr[arr.length - 1];
    else if (index === arr.length - 1) return arr[0];
    else return elem;
  });
  return shiftedArr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack).some((property) =>
    property.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
