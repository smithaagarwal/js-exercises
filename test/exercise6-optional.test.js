import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("it throws error if number is not passed", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });
  test("return the sum of the digits of the number", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(99)).toBe(18);
  });
  test("return the sum of digits if a decimal number is passed", () => {
    expect(sumDigits(12.3)).toBe(6);
    expect(sumDigits(0.36)).toBe(9);
    expect(sumDigits(-1.1)).toBe(2);
  });
  test("return the sum of digits if a negative number is passed", () => {
    expect(sumDigits(-1.1)).toBe(2);
  });
});

describe("createRange", () => {
  test("it throws an error if start is not passed to the function", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");
  });
  test("it throws an error if end is not passed to the function", () => {
    expect(() => {
      createRange(3);
    }).toThrow("end is required");
  });
  test("return range of numbers as an array as per the input", () => {
    expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
    expect(createRange(-3,12,2)).toBe([-3,-1,1,3, 5, 7, 9, 11]);

    expect(createRange(11,3,-2)).toBe([11,9,7,5,3]);
    expect(createRange(-3,-12,-2)).toBe([-3,-5,-7,-9, -11]);
  });
  test("return just the start element in the array if step is greater than difference between start and end", () => {
    expect(createRange(3, 7, 5)).toBe([3]);
    expect(createRange(-10,-14,-6)).toBe([-10]);
  });
  test("returns empty array if start is greater than end and step is positive", () => {
    expect(createRange(33, 11, 2)).toBe([]);
    expect(createRange(3,-12,2)).toBe([]);
  });

  test("returns empty array if start is less than end and step is negative", () => {
    expect(createRange(3, 11, -2)).toBe([]);
    expect(createRange(-3,12, -2)).toBe([]);
  });

  test("returns empty array if start is greater than end and step is not passed", () => {
    expect(createRange(33, 11)).toBe([]);
    expect(createRange(3,-12)).toBe([]);
  });

  test("returns all elements from start to end in an array if start is less than end and step is not passed", () => {
    expect(createRange(3, 11)).toBe([3,4,5,6,7,8,9,10,11]);
    expect(createRange(3,3)).toBe([3]);
  });
});
