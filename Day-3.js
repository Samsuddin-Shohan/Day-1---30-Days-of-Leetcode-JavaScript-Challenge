
 var createCounter = function(init) {
    const initialValue = init;
    function increment() {
        return ++init;
    }
    function decrement() {

        return --init;
    }
    function reset() {
        init=initialValue;
        return  init;
    }
    return{
        increment,decrement,reset
    }
};


const counter = createCounter(5)
console.log( counter.increment() );
console.log( counter.reset() );
console.log( counter.decrement() );
console.log( counter.decrement() );
console.log( counter.decrement() );
console.log( counter.reset() );
console.log( counter.reset() );
console.log( counter.increment() );



 