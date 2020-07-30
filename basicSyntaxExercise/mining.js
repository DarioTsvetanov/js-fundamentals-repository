/* function mining(input){
    let firstPurchasedBTC = 0;
    let dailyBoughtBTC = 0;
    let money = 0;
    let allBTC = 0;

    for (let i = 1; i <= input.length; i ++) {

        let dailyGold = input[i - 1];
        
        if (i % 3 == 0 && i !== 0) {
            dailyGold -= (dailyGold * 0.3);
        }

        money += dailyGold * 67.51;

        if (money >= 11949.16) {

            dailyBoughtBTC = Math.floor(money / 11949.16);


            if (firstPurchasedBTC == 0) {
                firstPurchasedBTC = i;
            }

            allBTC += dailyBoughtBTC
            money = money - (dailyBoughtBTC * 11949.16);
        }
    }
    
    console.log(`Bought bitcoins: ${allBTC}`);

    if (allBTC > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchasedBTC}`);
        
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
    
}
mining([100, 200, 300]); */
/* function mining(input){
    let firstPurchasedBTC = 0;
    let dailyBoughtBTC = 0;
    let money = 0;
    let allBTC = 0;
    let counter = 0;

    for (let i = 0; i < input.length; i ++) {

        let dailyGold = input[i];
        
        if ((i + 1) % 3 == 0 && i !== 0) {
            dailyGold -= (dailyGold * 0.3);
        }

        money += dailyGold * 67.51;

        if (money >= 11949.16) {

            dailyBoughtBTC = Math.floor(money / 11949.16);
            counter ++;

            if (counter == 1) {
                firstPurchasedBTC = i + 1;
            }

            allBTC += dailyBoughtBTC
            money = money - (dailyBoughtBTC * 11949.16)
        }
    }
    
    console.log(`Bought bitcoins: ${allBTC}`);

    if (allBTC > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchasedBTC}`);
        
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
    
}
mining([100,200,300]); */