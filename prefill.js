function prefill(length, value) {
  const lengthInt = parseInt(length);
  if (Number.isNaN(lengthInt) || length % 1 !== 0 || lengthInt < 0) {
    throw new TypeError(`${length} is invalid`);
  }
  if (lengthInt === 0) {
    return [];
  }
  return new Array(lengthInt).fill(value);
}
function funcInfunc(){
  var l=document.getElementById("l").value;
  var v=document.getElementById("v").value;

  document.write("The value is : "+prefill(l, v));

  }

// document.writeln(prefill(3, 1));
// document.writeln(prefill(2, "abc"));
// document.writeln(prefill("1", 1));
// document.writeln(prefill(3, prefill(2, '2d')));
// document.writeln(prefill("xyz", 1));
