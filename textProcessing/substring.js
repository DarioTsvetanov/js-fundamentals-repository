function solve(word, start, count) {

    word = word.substring(start, (start + count));

    console.log(word);
}
solve("ASentance", 1, 8)