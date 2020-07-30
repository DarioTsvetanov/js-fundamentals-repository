/* function houseParty(arr) {

    let guestsArray = [];

    while (true) {

        let curr = arr.shift();

        if (!curr) break;

        curr = curr.split(' ');
        
        if (curr[2] == 'going!') {
            
            if (guestsArray.includes(curr[0])) {
                
                console.log(`${curr[0]} is already in the list!`);
            }
            else {
                
                guestsArray.push(curr[0]);
            }
        }
        else {

            if (guestsArray.includes(curr[0])) {

                let index = guestsArray.indexOf(curr[0]);
                guestsArray.splice(index, 1);
            }
            else {

                console.log(`${curr[0]} is not in the list!`);
            }
        }
    }

    for (const guest of guestsArray) {

        console.log(guest);
    }
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']) */