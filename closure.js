let cats = [];
function Cat(name, weight) {
    if (!name || !weight) {
        document.write('Both `name` and `weight` should be provided');
    }
    Object.defineProperty(this, 'name', {
        value: name,
        writable: false,
        enumerable: true,
        configurable: false,
    });
    Object.defineProperty(this, 'weight', {
        value: weight,
        writable: true,
        enumerable: true,
        configurable: false,
    });
    cats.push(this);
}
Cat.averageWeight = function () {
    let totalWeight = 0;
    for (let i = 0; i < cats.length; i++) {
        totalWeight += cats[i].weight;
    }
    return totalWeight / cats.length;
};
const cat1 = new Cat('garfield', 25);
const cat2 = new Cat('felix', 15);
document.writeln("average weight is: "+Cat.averageWeight());
document.write("<br>");
cat2.weight = 55;
document.write("average weight is: "+Cat.averageWeight());
