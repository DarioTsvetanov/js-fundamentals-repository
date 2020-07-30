function solve(text) {

    let counter = 0;
    let curr;
    let next;

    text = text.split('');

    while (true) {

        if (counter == text.length - 1) break;

        curr = text[counter];
        next = text[counter + 1];

        if (curr === next) {

            let index = text.indexOf(next, counter);
            text.splice(index, 1)
        }
        else counter ++;
    }

    console.log(text.join(''));
}
solve('aabbcaaeedssaa')