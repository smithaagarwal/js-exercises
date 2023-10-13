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

describe("isValidDNA", () => {
  test("return true for strings containing characters C, G, T or A only", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("C")).toBe(true);
  });

  test("return false for strings containing spaces with characters C, G, T or A only", () => {
    expect(isValidDNA("CG  TA")).toBe(false);
    expect(isValidDNA("C ")).toBe(false);
    expect(isValidDNA(" C ")).toBe(false);
  });

  test("return false for strings containing other characters with characters C, G, T or A only", () => {
    expect(isValidDNA("CGBTA")).toBe(false);
    expect(isValidDNA("CGTA7N")).toBe(false);
  });

  test("return false for strings containing characters c, g, t or a in lowercase", () => {
    expect(isValidDNA("CGTa")).toBe(false);
    expect(isValidDNA("cGTA")).toBe(false);
  });

  test("return false for empty string", () => {
    expect(isValidDNA("")).toBe(false);
    expect(isValidDNA(" ")).toBe(false);
  });
});
