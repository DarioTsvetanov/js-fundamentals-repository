/* function gladiator(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetBroke = 0;
    let swordBroke = 0;
    let shieldBroke = 0;
    let armorBroke = 0;

    
    for (let i = 1; i <= lostFight; i ++) {

        if (i % 6 == 0) {
            shieldBroke ++;

            if (shieldBroke % 2 == 0) {
                armorBroke ++;
            }
        }

        if (i % 2 == 0) {
            helmetBroke ++;
        }

        if (i % 3 == 0) {
            swordBroke ++;
            
        }
    }

    let expenses = (helmetBroke * helmetPrice) + (swordBroke * swordPrice) + (shieldBroke * shieldPrice) + (armorBroke * armorPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    
}
gladiator(23, 12.50, 21.50, 40, 200);
gladiator(8, 2, 3, 4, 5); */