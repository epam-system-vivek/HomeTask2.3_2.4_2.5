const Array = {
    Array1: [1, 2, 3, 4],
    square(){//square:function(){
        var copyArray = []
        for (var i = 0; i < this.Array1.length; i++) {
            copyArray.push(this.Array1[i] * this.Array1[i])
        }
        return copyArray;
    },
    cube() {
        var copyArray = []
        for (var i = 0; i < this.Array1.length; i++) {
            copyArray.push(this.Array1[i] * this.Array1[i] * this.Array1[i])
        }
        return copyArray;
    },
    average() {
        var sum1 = 0
        for (var i = 0; i < this.Array1.length; i++) {
            sum1 += this.Array1[i]
        }
        return sum1 / this.Array1.length;
    },
    sum(){
        var sum = 0
        for (var i = 0; i < this.Array1.length; i++) {
            sum += this.Array1[i]
        }
        return sum;
    },
    even() {
        var copyArray = []
        for (var i = 0; i < this.Array1.length; i++) {
            if (this.Array1[i] % 2 === 0) {
                copyArray.push(this.Array1[i])
            }
        }
        return copyArray;
    },
    odd() {
        var copyArray = []
        for (var i = 0; i < this.Array1.length; i++) {
            if (this.Array1[i] % 2 !== 0) {
                copyArray.push(this.Array1[i])
            }
        }
        return copyArray;
    }
}
document.write("Gievn array is:"+Array.Array1);document.writeln("<br>");
document.write("square of array elements as follows:"+Array.square());document.writeln("<br>");
document.write("cube of array elements as follows::"+Array.cube());document.writeln("<br>");
document.write("average of array elements as follows::"+Array.average());document.writeln("<br>");
document.write("sum of array elements as follows::"+Array.sum());document.writeln("<br>");
document.write("Even elements in array:"+Array.even());document.writeln("<br>");
document.write("odd elemenst in array:"+Array.odd());document.writeln("<br>");
