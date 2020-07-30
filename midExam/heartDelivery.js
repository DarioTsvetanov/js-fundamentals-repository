function solve(input) {

    let neighborhood = input.shift().split('@').map(Number);

    let counter = 0;

    while (true) {

        let line = input.shift();

        if (line == 'Love!') break;

        let [command, length] = line.split(' ');
        length = Number(length);

        for (let i = 0; i < length; i ++) {

            counter ++;
        }

        if (counter >= neighborhood.length) counter = 0;
        
        if (neighborhood[counter] == 0) {

            console.log(`Place ${counter} already had Valentine's day.`);
            continue;
        }

        neighborhood[counter] -= 2;

        if (neighborhood[counter] == 0) {

            console.log(`Place ${counter} has Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${counter}.`);

    let failedHousesNumber = 0;

    for (let house of neighborhood) {
        
        if (house > 0) failedHousesNumber ++;
    }

    if (failedHousesNumber == 0) console.log('Mission was successful.');
    else console.log(`Cupid has failed ${failedHousesNumber} places.`);
}

solve([
    '2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
  ])