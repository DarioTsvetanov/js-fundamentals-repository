function solve(input) {

    let mail = input.shift();

    for (let line of input) {
        
        if (line == 'Make Upper') {

            mail = mail.toUpperCase();

            console.log(mail);
        }
        else if (line == 'Make Lower') {

            mail = mail.toLowerCase();

            console.log(mail);
        }
        else if (line == 'GetUsername') {

            if (!mail.includes('@')) {
                
                console.log(`The email ${mail} doesn't contain the @ symbol.`);

                continue;
            }

            let index = mail.indexOf('@');

            let username = mail.substring(0, index);

            console.log(username);
        }
        else if (line == 'Encrypt') {

            let output = [];

            for (let ch of mail) {
                
                output.push(ch.charCodeAt(0));
            }

            console.log(output.join(' '));
        }
        else {

            let [command, symbol] = line.split(' ');
            
            if (command == 'GetDomain') {
                
                let num = Number(symbol);

                let output = [];

                for (let i = mail.length; i > mail.length - num - 1; i --) {

                    output.unshift(mail[i]);
                }

                console.log(output.join(''));
            }
            else if (command == 'Replace'){

                mail = mail.split('');

                for (let i = 0; i < mail.length; i ++) {

                    let ch = mail[i];

                    if (ch == symbol) mail[i] = '-';
                }

                mail = mail.join('');

                console.log(mail);
            }
        }
    }
}
solve([
    'Mike123@somemail.com',
    'Make Lower',
    'GetDomain 3',
    'GetUsername',
    'Replace m',
    'Complete'
]);