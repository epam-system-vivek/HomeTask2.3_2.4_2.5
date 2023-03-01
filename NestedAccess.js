Object.prototype.hash = function(path) {
  return path.split('.').reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, this);
};

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

document.writeln(obj.hash('person.name')); // Output: 'joe'
document.writeln("<br>");
document.writeln(obj.hash('person.history.bio')); // Output: { funFact: 'I like fishing.' }
document.writeln("<br>");
document.writeln(obj.hash('person.history.homeStreet')); // Output: undefined
document.writeln("<br>");
document.writeln(obj.hash('person.animal.pet.needNoseAntEater')); // Output: undefined
