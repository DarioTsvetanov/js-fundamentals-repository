function solve(input) {

    let firstChar = input.shift();
    let firstCharAscii = firstChar.charCodeAt(0);
    
    let secondChar = input.shift();
    let secondCharAscii = secondChar.charCodeAt(0);

    let text = input[0];

    let sum = 0;

    for (let ch of text) {
        
        let chAscii = ch.charCodeAt(0);

        if (firstCharAscii > secondCharAscii) {

            if (chAscii < firstCharAscii && chAscii > secondCharAscii) {

                sum += chAscii;
            }
        }
        else {

            if (chAscii > firstCharAscii && chAscii < secondCharAscii) {

                sum += chAscii;
            }
        }
    }

    console.log(sum);
}

solve([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ])