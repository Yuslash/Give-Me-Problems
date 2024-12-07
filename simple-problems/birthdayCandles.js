//ok what is the problem we are giving birthday cake for a child and we need to find how many tallest candles in the cake 
//candles = [3,2,1,3]
// so the tallest candle in the candles is 3 units so how many of 3 units there 2 so we have to return 2

function birthdayCakesCandles(candles) {
  
  let maximum = 0
  let count = 0

 for (let i = 0; i < candles.length; i++) {
    if(candles[i] > maximum) {
 
      maximum = candles[i] 

      count = 1

    } else if(candles[i] === maximum) {
      count++
    }
  } 
  
  console.log(count)
  
}

let candles = [3,2,1,3]

birthdayCakesCandles(candles)
