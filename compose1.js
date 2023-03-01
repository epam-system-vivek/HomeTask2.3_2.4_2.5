const compose = (f, g) => {
  return function(arg){
    return f(g(arg));
  };
};
const addOne = (n) => n + 1;
const multTwo = (n) => n * 2;
const addOneMultTwo = compose(multTwo, addOne);

document.write("The result of compose is: " + addOneMultTwo(7));

