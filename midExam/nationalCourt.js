function solve(input) {

    let firstWorkerHours = Number(input.shift());
    let secondWorkerHours = Number(input.shift());
    let thirdWorkerHours = Number(input.shift());

    let sumHours = firstWorkerHours + secondWorkerHours + thirdWorkerHours;

    let peopleCount = Number(input.shift());

    let counter = 1;
    let hoursNeeded = 0;

    while (true) {

        if (peopleCount <= 0) break;

        if (counter % 4 == 0) {

            hoursNeeded ++;
            counter ++;
        }
        else {

            hoursNeeded ++;
            peopleCount -= sumHours;
            counter ++;
        }
    }

    console.log(`Time needed: ${hoursNeeded}h.`);
}

solve([ '1', '1', '1', '12' ]);