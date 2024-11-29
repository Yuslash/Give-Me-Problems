var stock = function(prices) {
}

min_prices = infinity
max_profit = 0

// we need two variables which is min_prices and max_profit

// you can see first 
if (prices[i] < min_prices) //if this true then
{
  min_prices = prices[i]
}

currentValue = prices[i] //now you cansee that prices i is also 7 right

current_profit = currentValue - min_prices

if (currentProfit > max_profit) {
  max_profit = currentProfit
}

//but it should be in loop because its should have to check every indieces from the array

var prices = [7, 1, 5, 3, 6, 4]

stock(prices)
