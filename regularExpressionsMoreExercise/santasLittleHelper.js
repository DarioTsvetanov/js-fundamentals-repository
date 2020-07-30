function solve(input) {

    let subtractNumber = Number(input.shift());

    let names = [];

    let pattern = /(?<name>@[a-zA-Z]+)[^\@\-\!\:\>]+!(?<type>[GN])!/;

    while (true) {

        let line = input.shift();

        if (line == 'end') break;

        line = line.split('');

        for (let i = 0; i < line.length; i ++) {

            let ch = line[i];

            let newCode = ch.charCodeAt(0) - subtractNumber;

            let newChar = String.fromCharCode(newCode);

            line[i] = newChar;
        }

        line = line.join('');
        // console.log(line);
        let match = pattern.exec(line);

        if (!match) continue;

        let name = match.groups.name;
        
        let type = match.groups.type;

        if (type == 'G') names.push(name.substring(1));
    }

    for (let name of names) {
        
        console.log(name);
    }
}