var buyandsell = function(prices) {
  let min_prices = Infinity
  let max_profit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min_prices) {
      min_prices = prices[i]
    } else {
      let profit = prices[i] - min_prices

      if (profit > max_profit) {
        max_profit = profit
      }
    }
  }

  return max_profit

}

let prices = [7, 1, 5, 3, 6, 4]

console.log(buyandsell(prices))
