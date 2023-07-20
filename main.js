function countChocolates(totalMoney, costPerChocolate) {
    // Extracting the total money and cost of one chocolate from the input strings
    const totalMoneyMatch = totalMoney.match(/-?\d+/);
    const costPerChocolateMatch = costPerChocolate.match(/\d+/);
  
    if (!totalMoneyMatch || !costPerChocolateMatch) {
      return "Invalid Input";
    }
  
    const totalMoneyInt = parseInt(totalMoneyMatch[0]);
    const costPerChocolateInt = parseInt(costPerChocolateMatch[0]);
  
    if (totalMoneyInt < 0) {
      return "Invalid Input";
    }
  
    // Calculate the initial number of chocolates Ashi can buy
    let chocolatesBought = Math.floor(totalMoneyInt / costPerChocolateInt);
    let totalChocolates = chocolatesBought;
  
    // Exchange wrappers for additional chocolates
    while (chocolatesBought >= 3) {
      const additionalChocolates = Math.floor(chocolatesBought / 3);
      totalChocolates += additionalChocolates;
      chocolatesBought = additionalChocolates + (chocolatesBought % 3);
    }