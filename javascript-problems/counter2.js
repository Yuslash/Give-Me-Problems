var createCounter = function(init) 
{
    let count = init 

    function increment() 
    {
      count++
      return count
    }

    function decrement() {
      count-- 
      return count
    }

    function reset() {
      count = init
      return count
    }

    return {
      increment:increment,
      decrement: decrement,
      reset:reset
    }


  }

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
