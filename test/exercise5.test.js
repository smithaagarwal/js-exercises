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

  test("it throws error if array is not passed", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
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

  test("it throws error if string is not passed", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
});

describe("getComplementaryDNA", () => {
  test("return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G and vice versa", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("CC")).toBe("GG");
    expect(getComplementaryDNA("GG")).toBe("CC");
    expect(getComplementaryDNA("TTTTTTTTT")).toBe("AAAAAAAAA");
    expect(getComplementaryDNA("AAAAAAAAA")).toBe("TTTTTTTTT");
  });

  test("it throws error if string is not passed", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });
});

describe("isItPrime", () => {
  test("return true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(61)).toBe(true);
    expect(isItPrime(111)).toBe(false);
    expect(isItPrime(0)).toBe(false);
  });
  test("returns false if a decimal number is passed", () => {
    expect(isItPrime(1.1)).toBe(false);
  });
  test("it throws error if number is not passed", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items.", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(2, "fin")).toEqual([
      ["fin", "fin"],
      ["fin", "fin"],
    ]);
    expect(createMatrix(1, "h")).toEqual([["h"]]);
  });
  test("it throws error if number is not passed", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required");
  });
  test("it throws error if fill is not passed", () => {
    expect(() => {
      createMatrix(2);
    }).toThrow("fill is required");
  });
});

describe("areWeCovered", () => {
  test("return true when there are 3 or more staffs with the given day in rota ", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "John",
            rota: ["Saturday", "Monday", "Tuesday", "Wednesday"],
          },
        ],
        "Tuesday"
      )
    ).toBe(true);
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Saturday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "John",
            rota: ["Saturday", "Monday", "Tuesday", "Wednesday"],
          },
          { name: "Tom", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
        ],
        "Saturday"
      )
    ).toBe(true);
  });
  test("return false when there are less than 3 staffs with the given day in rota ", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Saturday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          { name: "John", rota: ["Saturday", "Tuesday", "Wednesday"] },
          { name: "Tom", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
        ],
        "Monday"
      )
    ).toBe(false);
  });
  test("return false when one of the staff has the same day mentioned twice and that adds up to 3 days ", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Saturday", "Saturday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          { name: "John", rota: ["Tuesday", "Wednesday"] },
          { name: "Tom", rota: ["Monday", "Tuesday", "Wednesday"] },
        ],
        "Saturday"
      )
    ).toBe(false);
  });

  test("return false when there are less than 3 staffs listed ", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
        ],
        "Monday"
      )
    ).toBe(false);
  });

  test("it throws an error if array not passed", () => {
    expect(() => {
      areWeCovered();
    }).toThrow("staff is required");
  });

  expect(() => {
    areWeCovered([
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      {
        name: "Pedro",
        rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
      },
    ]);
  }).toThrow("day is required");
});
