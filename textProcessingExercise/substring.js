function solve(keyWord, sentence) {

    for (let word of sentence.split(' ')) {
        
        if (word.toLowerCase() == keyWord) {

            console.log(keyWord);
            return;
        }
    }

    console.log(`${keyWord} not found!`);
}
solve('python',
'JavaScript is the best programming language'

)