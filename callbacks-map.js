var words = ["ground", "control", "to", "major", "tom"];
  function map(arg,func) {
    var newArray = [];
    for (var i = 0; i <arg.length; i++) {
      newArray.push(func(arg[i]));

    }
    console.log(newArray)
  };


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
