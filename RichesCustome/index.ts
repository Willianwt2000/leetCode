function maximumWealth(accounts: number[][]): number {
  let maximTotalSum: number = 0;

  for (let i = 0; i < accounts.length; i++) {
    let currentSum: number = 0;

    for (let row of accounts[i]) {
      currentSum += row;
    }

    // if (currentSum > maximTotalSum) {
    //   maximTotalSum = currentSum;
    // }

    currentSum = Math.max(maximTotalSum,currentSum)
  }

  return maximTotalSum;
}

console.info(maximumWealth([[1,2,3],[5,6,8],[9,8,7]]))