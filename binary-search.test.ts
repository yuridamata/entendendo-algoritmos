const binarySearch = require("./binary-search");

test("Testing", () => {
  const testArray = [1,10,30,31,35,85,99,1205,9999];

const number = 30;

const index = binarySearch(testArray, number);
  expect(index).toBe(2);
})