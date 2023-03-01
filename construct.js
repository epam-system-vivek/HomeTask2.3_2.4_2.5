function Greeting(name) {
    this.name = name;
  }
  Greeting.prototype.sayHello = function() {
    return "Hello " + this.name;
  };
  Greeting.prototype.sayBye = function() {
    return "Bye " + this.name;
  };

  function factory() {
    return {
      createGreeting() {
        return construct(Greeting, arguments);
      }
    }
  }
  function construct(Class,...args) {  
    return new Class(...args);
  }
  var greeting = construct(Greeting, 'John');
  console.log(greeting.sayBye());
