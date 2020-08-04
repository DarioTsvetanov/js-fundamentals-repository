function solve(input) {

    let number = Number(input.shift());

    let pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[\w]{5,}[\d]+)P@\$/;

    let timesSucceeded = 0;

    for (let i = 0; i < number; i ++) {

        let line = input[i];

        let valid = pattern.exec(line);

        if (!valid) {

            console.log('Invalid username or password');

            continue;
        }

        console.log('Registration was successful');

        console.log(`Username: ${valid.groups.username}, Password: ${valid.groups.password}`);

        timesSucceeded ++;
    }

    console.log(`Successful registrations: ${timesSucceeded}`);
}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);