function solve(input) {

    let pattern = /([^\d]+)(\d+)/g;

    let sequences = input[0].match(pattern);

    let output = '';

    let uniqueSymbols = [];

    for (let sequence of sequences) {
        
        let string = '';

        let stringNumber = '';

        for (let i = 0; i < sequence.length; i ++) {

            let ch = sequence[i];

            let ascii = ch.charCodeAt(0);

            if (ascii >= 48 && ascii <= 57) stringNumber += ch;
            else string += ch.toUpperCase();
        }

        stringNumber = Number(stringNumber);

        for (let i = 0; i < stringNumber; i ++) {

            output += string;
        }

        string = '';

        stringNumber = '';
    }

    for (let ch of output) {
        
        if (!uniqueSymbols.includes(ch)) uniqueSymbols.push(ch)
    }

    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
    console.log(output);
}

solve(['aSd2&d5s@1'])