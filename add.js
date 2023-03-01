function add(num) {
  let sum = num;
  function addNext(nextNum) {
    sum += nextNum;
    return addNext;
  }
  addNext.valueOf = function() {
    return sum;
  }

  return addNext;
}
document.write("The result is :"+ add(1)(2)(3));