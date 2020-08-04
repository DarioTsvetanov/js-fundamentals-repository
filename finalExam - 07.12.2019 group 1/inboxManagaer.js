function solve(input) {

    let list = [];

    while (true) {

        let line = input.shift();

        if (line == 'Statistics') break;

        let [cmd, name, email] = line.split('->');

        let searchedUser = list.find(obj => obj.name == name);

        if (cmd == 'Add') {

            if (searchedUser) console.log(`${name} is already registered`);
            else {

                list.push({
                    name: name,
                    emails: [],
                    emailsCounter: 0
                });
            }
        }
        else if (cmd == 'Send') {

            searchedUser.emails.push(email);

            searchedUser.emailsCounter ++;
        }
        else if (cmd == 'Delete') {

            if (searchedUser) {

                let index = list.indexOf(searchedUser);

                list.splice(index, 1);
            }
            else console.log(`${name} not found!`);
        }
    }

    console.log(`Users count: ${list.length}`);

    list.sort((a, b) => b.emailsCounter - a.emailsCounter || a.name.localeCompare(b.name));

    for (let person of list) {
        
        console.log(`${person.name}`);

        for (let email of person.emails) {
            
            console.log(` - ${email}`);
        }
    }
}

solve([
  'Add->Mike',
  'Add->George',
  'Send->George->Hello World',
  'Send->George->Some random test mail',
  'Send->Mike->Hello, do you want to meet up tomorrow?',
  'Send->George->It would be a pleasure',
  'Send->Mike->Another random test mail',
  'Statistics'
]);