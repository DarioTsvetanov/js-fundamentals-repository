/* function radioCrystal(arr) {

    let goal = arr.shift();
    
    let cuttingStep = (goal, current) => {
        let counter = 0;
        while (true) {

            if (current / 4 >= goal) {
                current = current / 4;
                counter ++;
            }
            else break;
        }

        if (counter > 0) {
            console.log(`Cut x${counter}`);
            current = transport(current);
        }
        return current;
    };

    let transport = (current) => {

        console.log(`Transporting and washing`);
        return Math.floor(current);
    };

    let lapStep = (goal, current) => {
        let counter = 0;

        while (true) {
            
            if (current - current * 0.2 >= goal) {
                current -= current * 0.2;
                counter ++;
            }
            else break;
        }

        if (counter > 0) {
            console.log(`Lap x${counter}`);
            current = transport(current);
        }
        return current;
        
    };

    let grindStep = (goal, current) => {
        counter = 0;

        while (true) {

            if (current - 20 >= goal) {
                current -= 20;
                counter ++;
            }
            else break;
        }

        if (counter > 0) {
            console.log(`Grind x${counter}`);
            current = transport(current);
        }
        return current;
    };

    let etchStep = (goal, current) => {
        let counter = 0;

        while (true) {

            if (current - 2 >= goal || current - 2 == goal - 1) {
                current -= 2;
                counter ++;
            }
            else break;
        }

        if (counter > 0) {
            console.log(`Etch x${counter}`);
            current = transport(current);
        }
        return current;
    };

    let xrayStep = (goal, current) => {

        if (current + 1 == goal) {
            current += 1;
            console.log(`X-ray x1`);
        }

        return current;
    };

    while (true) {
        let current = arr.shift();

        if (!current) break;
        
        console.log(`Processing chunk ${current} microns`);
    
        if (current > goal) {
            current = cuttingStep(goal, current);
        }
        
        if (current > goal) {
            current = lapStep(goal, current);
        }

        if (current > goal) {
            current = grindStep(goal, current);
        }

        if (current > goal) {
            current = etchStep(goal, current);
        }

        current = xrayStep(goal, current);

        console.log(`Finished crystal ${goal} microns`);
    }
     
}
radioCrystal([1375, 50000]) */