const compose = (...funcs) => {
  return function (arg) {
    return funcs.reduceRight(function (result, fn) {
      return fn(result);
    }, arg);
  };
};
const addOne = function (a) {
  return a + 1;
}
const multTwo = (b) => b * 2;
const subtractThree = (c) => c - 3;

const addOneMultTwoSubtractThree = compose(subtractThree, multTwo, addOne);
document.writeln("The value after performing composition is:" + addOneMultTwoSubtractThree(5));