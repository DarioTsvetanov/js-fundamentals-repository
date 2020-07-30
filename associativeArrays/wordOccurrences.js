function solve(input) {

    let wordMap = new Map();

    for (let word of input) {
        
        if (wordMap.has(word)) {

            wordMap.set(word, wordMap.get(word) + 1);
            continue;
        }

        wordMap.set(word, 1);
    }

    let wordArr = Array.from(wordMap).sort((a, b) => b[1] - a[1]);

    for (let word of wordArr) {
        
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])