prices = [7, 1, 5 ,3, 6,4]
console.log(bestTimeToBuySell(prices));
function bestTimeToBuySell(prices)
{
    buyPrice = Number.MAX_VALUE;
    maxProfit = 0;

    for(let i=0;i<prices.length; i++)
    {
        if (buyPrice < prices[i])
        {
            let profit = prices[i] - buyPrice;
            maxProfit =  Math.max(profit, maxProfit);
        }
        else{
            buyPrice = prices[i];
        }
    }
    return maxProfit;

}