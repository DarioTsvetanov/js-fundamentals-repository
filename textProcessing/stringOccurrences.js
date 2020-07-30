function solve(sentence, keyWord) {

    let wordCounter = 0;

    for (let word of sentence.split(' ')) {
        
        if (word == keyWord) wordCounter ++;
    }

    console.log(wordCounter);
}
solve(
    "This is a word and it also is a sentence",
    "is"
)