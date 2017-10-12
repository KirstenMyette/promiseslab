
//I did not write this! I had to go online and find the solution to try and decipher the instructions... 

(function() {
    var firstPromise, secondPromise;
  
    firstPromise = first();
  
    secondPromise = firstPromise.then(function(value) {
      return second(value);
    });
  
    secondPromise.then(console.log);
  
  }).call(this);