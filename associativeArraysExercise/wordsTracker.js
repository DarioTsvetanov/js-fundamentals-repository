function solve(input) {

    let wordMap = new Map();

    input.shift().split(' ').forEach(el => wordMap.set(el, 0));
    
    for (let word of input) {
        
        if (wordMap.has(word)) wordMap.set(word, wordMap.get(word) + 1);
    }

    let arr = Array.from(wordMap).sort((a, b) => b[1] - a[1])

    for (let word of arr) console.log(`${word[0]} - ${word[1]}`);
}
solve([
    'this sentence',
    'In',
    'this',          'sentence',
    'you',           'have',
    'to',            'count',
    'the',           'occurances',
    'of',            'the',
    'words',         'this',
    'and',           'sentence',
    'because',       'this',
    'is',            'your',
    'task'
  ])