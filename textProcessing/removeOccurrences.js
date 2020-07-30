function solve(word, text) {

    while (true) {

        if (text.indexOf(word) < 0) break;

        text = text.replace(word, '');
    }

    console.log(text);
}
solve('ice', 'kicegiciceeb');