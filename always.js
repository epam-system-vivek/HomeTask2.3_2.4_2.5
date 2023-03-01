function always(n) {
  return function () {
    return n;
  };
}
function funcInfunc(){
var x=document.getElementById("num").value;
var example = always(x);
document.write("The value is : "+example());
}