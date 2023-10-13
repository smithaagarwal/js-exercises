import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3])).toBe(8);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 654, 123, 65, 23, 1])).toBe(842);
    expect(sumMultiples([4, 22, 653, 122, 23, 1])).toBe(0);
    expect(sumMultiples([])).toBe(0);
  });

  test("return 0 if none of the numbers are  multiple of 3 or 5", () => {
    expect(sumMultiples([4, 22, 653, 122, 23, 1])).toBe(0);
    expect(sumMultiples([])).toBe(0);
  });

  test("return 0 if the array is empty", () => {
    expect(sumMultiples([])).toBe(0);
  });
});
