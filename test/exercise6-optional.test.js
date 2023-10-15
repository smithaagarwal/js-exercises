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
  test("return range of numbers as an array when step is posituve", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(-3, 12, 2)).toEqual([-3, -1, 1, 3, 5, 7, 9, 11]);
  });
  test("return range of numbers as an array when step is negative", () => {
    expect(createRange(11, 3, -2)).toEqual([11, 9, 7, 5, 3]);
    expect(createRange(-3, -12, -2)).toEqual([-3, -5, -7, -9, -11]);
  });
  test("return just the start element in the array if step is greater than difference between start and end", () => {
    expect(createRange(3, 7, 5)).toEqual([3]);
    expect(createRange(-10, -14, -6)).toEqual([-10]);
  });
  test("returns empty array if start is greater than end and step is positive", () => {
    expect(createRange(33, 11, 2)).toEqual([]);
    expect(createRange(3, -12, 2)).toEqual([]);
  });

  test("returns empty array if start is less than end and step is negative", () => {
    expect(createRange(3, 11, -2)).toEqual([]);
    expect(createRange(-3, 12, -2)).toEqual([]);
  });

  test("returns empty array if step = 0", () => {
    expect(createRange(3, 11, 0)).toEqual([]);
    expect(createRange(3, -12, 0)).toEqual([]);
  });

  test("returns empty array if start is greater than end and step is not passed", () => {
    expect(createRange(33, 11)).toEqual([]);
    expect(createRange(3, -12)).toEqual([]);
  });

  test("returns all elements from start to end in an array if start is less than end and step is not passed", () => {
    expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(createRange(3, 3)).toEqual([3]);
  });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 20, whatsApp: 40, facebook: 30, safari: 30 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },

    {
      username: "max_j_1989",
      name: "Max Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 30, whatsApp: 30, facebook: 30, safari: 20 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 30, whatsApp: 30, facebook: 30, safari: 10 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];

  test("it throws an error if users array  is not passed to the function", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");
  });
  test("it throws an error if the date is not passed to the function", () => {
    expect(() => {
      getScreentimeAlertList(users);
    }).toThrow("date is required");
  });

  test("return an array of usernames of users who have more than 100 minutes of screen time on a given date", () => {
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([
      "sam_j_1989",
      "max_j_1989",
    ]);
  });

  test("return empty array when there is a user with usage equal to 100 but not greater than 100 for the given date", () => {
    expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([]);
  });

  test("return an empty array when there are no users with screentime greater than 100 on the given date ", () => {
    expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
  });

  test("return an empty array when an empty array of users is passed ", () => {
    expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
  });

  test("return an empty array when the date passed is not recorded for any user ", () => {
    expect(getScreentimeAlertList(users, "2021-06-14")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("it throws an error when called without a parameter", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");
  });
  test("it throws an error when called with a parameter not following the format # followed by 6 hexadecimal digits", () => {
    expect(() => {
      hexToRGB("FF1133");
    }).toThrow(
      "the code passed should be of the format # followed by 6 hexadeimal digits"
    );
    expect(() => {
      hexToRGB("#FFZ133");
    }).toThrow(
      "the code passed should be of the format # followed by 6 hexadeimal digits"
    );
    expect(() => {
      hexToRGB("#FF113");
    }).toThrow(
      "the code passed should be of the format # followed by 6 hexadeimal digits"
    );
  });
  test("return RGB code for the hexadecimal color code passed", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    expect(hexToRGB("#EF1203")).toEqual("rgb(239,18,3)");
  });
});
