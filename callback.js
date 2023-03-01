function createFunctions(n) {
    var callbacks = [];
    for (var i = 0; i < n; i++) {
        callbacks.push((function (i) {
            return function () {
                return i;
            };
        })(i));
    }
    return callbacks;
}
var obj = createFunctions(5);
document.writeln(obj[0]());
document.writeln(obj[4]());
document.writeln(obj[3]());