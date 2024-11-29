var stock = function(prices) {

  let min_Prices = Infinity
  let max_Profit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min_Prices) {
      min_Prices = prices[i]
    } else {
      let profit = prices[i] - min_Prices

      if (profit > max_Profit) {
        max_Profit = profit
      }
    }
  }

  return max_Profit

}

var prices = [7, 1, 5, 3, 6, 4]

console.log(stock(prices))
