var promise = new Promise(function(resolve, reject){
    resolve(setTimeout(function(){}, 300));
});

promise
    .then(function(resolve){
        console.log("FULFILLED!")
    })