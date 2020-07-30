function solve(sentence, word) {

    while (true) {

        if (!sentence.includes(word)) break;

        let censored = '*'.repeat(word.length);
        
        sentence = sentence.replace(word, censored);
    }

    console.log(sentence);
}
solve("A small sentence with some words, small", "small")