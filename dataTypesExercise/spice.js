/* function spice(yieldNumber) {
    let total = 0;
    let counter = 0;
    
    while (yieldNumber >= 100) {
        let spice = yieldNumber;
        counter ++;
        
        if (spice < 26) {
            spice = 0;
        }
        else {
            spice -= 26;
        }
        total += spice;

        yieldNumber -= 10;
    }

    if (total < 26) {
        total = 0;
    }
    else {
        total -= 26;
    }
    
    console.log(counter);
    console.log(total);
    
}
spice(111); */