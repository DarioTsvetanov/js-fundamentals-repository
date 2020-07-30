function schedule(arr) {

    let flightsList = arr.shift();
    let changesList = arr.shift();
    let flightStatus = arr.shift()[0];

    let flightObject = {};

    for (let flight of flightsList) {
        
        let [id, location] = flight.split(' ');

        flightObject[id] = {
            Destination: location,
            Status: 'Ready to fly'
        };
    }    

    for (let change of changesList) {
        
        let [id, status] = change.split(' ');

        if (!flightObject[id]) continue;

        flightObject[id].Status = status;
    }

    for (let key in flightObject) {
        
        if (flightStatus !== flightObject[key].Status) continue;

        console.log(flightObject[key]);
    }
}
schedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])

