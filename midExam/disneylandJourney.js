function disneylandJourney(arr) {

    let cost = arr.shift();
    let months = arr.shift();

    let budget = 0;

    for (let i = 1; i <= months; i ++) {

        if (i % 2 !== 0 && i !== 1) {

            budget -= (budget * 0.16);
        }

        if (i % 4 == 0) {

            budget += (budget * 0.25);
        }
        
        budget += (cost * 0.25);
    }

    let diff = budget - cost;

    if (diff > 0) {

        console.log(`Bravo! You can go to Disneyland and you will have ${diff.toFixed(2)}lv. for souvenirs.`);
    }
    else {

        console.log(`Sorry. You need ${Math.abs(diff).toFixed(2)}lv. more.`);
    }
}
disneylandJourney([3265, 3])