function solve(keyWords, sentence) {

    let censored = '';

    for (let word of keyWords.split(', ')) {
        
        censored = '*'.repeat(word.length);

        if (sentence.includes(censored)) {

            sentence = sentence.replace(censored, word);
        }
    }

    console.log(sentence);
}
solve('great',
'softuni is ***** place for learning new programming languages'
)