var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, ele) {
  var arr = [ele, ...array];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  array.unshift(ele);
  return array;
}

