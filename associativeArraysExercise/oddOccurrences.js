function solve(string) {

    let wordMap = new Map();

    let wordArr = string.split(' ');
    
    for (let word of wordArr) {

        word = word.toLowerCase();

        if (!wordMap.has(word)) {

            wordMap.set(word, 1);
            continue;
        }

        wordMap.set(word, wordMap.get(word) + 1);
    }

    let mappedArr = Array.from(wordMap);

    let filtered = mappedArr.filter(el => el[1] % 2 !== 0);

    let output = '';

    for (let word of filtered) {
        
        output += `${word[0]} `
    }

    console.log(output);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')