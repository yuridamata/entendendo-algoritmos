const {binarySearch} = require("./binary-search");

test("number is found", () => {
  const testArray = [1,10,30,31,35,85,99,1205,9999];
  for(let i = 0 ; i < testArray.length; i++){
    const index = binarySearch(testArray, testArray[i]);
    expect(index).toBe(i);
  }
})

test("array does not contains the number ", () => {
  const testArray = [1,10,30,31,35,85,99,1205,9999];
  const number = 11;
  const index = binarySearch(testArray, number);
  expect(index).toBeNull();
})

test("array is empty", () => {
  const testArray = [];
  const number = 30;
  const index = binarySearch(testArray, number);
  expect(index).toBeNull();
})

test("not an array", () => {
  const testArray = "notArray";
  const number = 30;
  const index = binarySearch(testArray, number);
  expect(index).toBeNull();
})

test("not an number", () => {
  const testArray = [1,10,30,31,35,85,99,1205,9999];
  const number = "2";
  const index = binarySearch(testArray, number);
  expect(index).toBeNull();
})