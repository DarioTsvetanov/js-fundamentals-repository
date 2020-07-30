/* function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let maxPass = Number(arr.shift());

    while (true) {

        let curr = arr.shift();

        if (!curr) break;

        curr = curr.split(' ');

        if (curr[0] == 'Add') {

            wagons.push(Number(curr[1]));
        }
        else {

            for (let i = 0; i < wagons.length; i ++) {

                if (wagons[i] + Number(curr[0]) <= maxPass) {

                    wagons[i] += Number(curr[0]);
                    break;
                }
            }
        }
        
    }

    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']); */