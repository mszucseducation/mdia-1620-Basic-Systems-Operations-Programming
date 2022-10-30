var initial = 0.00;
var restaurantProfit = {};

restaurantProfit.dollarBills = 4;
restaurantProfit.coins = 20;

console.log(restaurantProfit);

// {cardOne: 'Master Card', cardTwo: 'Visa', dollarBills: 25, coins: 0.75}

console.log(`The restaurant started at $${initial.toFixed(2)}. We made $${restaurantProfit.dollarBills}.${restaurantProfit.coins} so far today.`);
