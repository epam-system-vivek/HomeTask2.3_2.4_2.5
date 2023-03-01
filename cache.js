const cache = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = args.join(':');
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
};
const complexFunction = (arg1, arg2) => {
  document.writeln("<br>");
  document.writeln('Executing complex function...');
  document.writeln("<br>");
  return arg1 + arg2;
};
const cachedFunction = cache(complexFunction);
document.writeln(cachedFunction('foo', 'bar')); // complex function should be executed
document.writeln("<br>");
document.writeln(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
document.writeln("<br>");
document.writeln(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments