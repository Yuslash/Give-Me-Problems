class Counter {

  constructor(init) {
    this.init = init
    this.count = init
  }

  increment(){
      return ++this.count
  }

  decrement() {
    return --this.count 
  }

  reset() {
    this.count = this.init
    return this.count
  }

}

const counter = new Counter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
