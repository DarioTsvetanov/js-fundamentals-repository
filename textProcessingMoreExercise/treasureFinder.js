function solve(input) {

    let numberSeq = input.shift().split(' ').map(Number);

    let counter = 0;

    while (true) {

        let line = input.shift();

        if (line == 'find') return;

        let decrypted = [];

        for (let ch of line.split('')) {
            
            let ascii = ch.charCodeAt(0);

            ascii -= numberSeq[counter];

            counter ++;

            if (counter == numberSeq.length) counter = 0;

            decrypted.push(String.fromCharCode(ascii));
        }

        counter = 0;

        let firstAmp = decrypted.indexOf('&');
        let secondAmp = decrypted.indexOf('&', firstAmp + 1);
        
        let lessThan = decrypted.indexOf('<');
        let greaterThan = decrypted.indexOf('>');

        decrypted = decrypted.join('');

        let type = decrypted.substring(firstAmp + 1, secondAmp);
        
        let coordinates = decrypted.substring(lessThan + 1, greaterThan);
        
        console.log(`Found ${type} at ${coordinates}`);
    }
}

solve([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
  ])