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
