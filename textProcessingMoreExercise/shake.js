function solve(input) {

    let text = input.shift();

    let patern = input.shift();

    while (true) {

        let firstMatch = text.indexOf(patern);

        let lastMatch = text.lastIndexOf(patern);

        if (firstMatch < 0 || lastMatch < 0 || firstMatch == lastMatch) {

            console.log('No shake.');
            console.log(text);
            return;
        }

        text = text.split('');

        text.splice(lastMatch, patern.length);
        text.splice(firstMatch, patern.length);

        console.log('Shaked it.');

        text = text.join('');

        let paternIndex = patern.length / 2;

        patern = patern.split('');

        patern.splice(paternIndex, 1);

        patern = patern.join('');

        if (patern.length == 0 || text.length == 0) {

            console.log('No shake.');
            console.log(text);
            return;
        }
    }
}

solve([ 'aaaaa', 'a'])